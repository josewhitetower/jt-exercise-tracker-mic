package middleware

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"net/http"
	"os"
	"strconv"
	"time"

	"excercisetracker/models"

	// used to get the params from the route
	"github.com/joho/godotenv" // package used to read the .env file
	_ "github.com/lib/pq"
)

// create connection with postgres db
func createConnection() *sql.DB {
	// load .env file only for local env
	err := godotenv.Load(".env")

	if err != nil {
		fmt.Print("Error loading .env file")
	}

	// Open the connection
	db, err := sql.Open("postgres", os.Getenv("POSTGRES_URL"))

	if err != nil {
		panic(err)
	}

	// check the connection
	err = db.Ping()

	if err != nil {
		panic(err)
	}

	fmt.Println("Successfully connected!")
	// return the connection
	return db
}

// CreateUser create a url in the postgres db
func CreateUser(w http.ResponseWriter, r *http.Request) {
	// set the header to content type x-www-form-urlencoded
	// Allow all origin to handle cors issue
	w.Header().Set("Context-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "POST")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

	// create an empty user of type models.User
	var user models.User

	// decode the json request to user
	err := json.NewDecoder(r.Body).Decode(&user)

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}

	// find existing user
	existingUser, err := getUserByUsername(user.UserName)

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}

	if existingUser.UserName != "" {
		http.Error(w, "Username already taken", 409)
		return
	}
	// call insert user function and pass the user
	_id := insertUser(user)

	// format a response object
	// Response format
	type Response struct {
		UserName string `json:"username"`
		ID       int64  `json:"_id"`
	}
	res := Response{user.UserName, _id}

	// send the response
	json.NewEncoder(w).Encode(res)

}

// GetAllUsers will return all the users
func GetAllUsers(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Context-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	// get all the users in the db
	users, err := getAllUsers()

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}

	// send all the users as response
	json.NewEncoder(w).Encode(users)
}

// CreateExercise will create an exercise
func CreateExercise(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Context-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")

	// create an empty exercise of type models.Exercise
	var exercise models.Exercise

	// decode the json request to user
	err := json.NewDecoder(r.Body).Decode(&exercise)

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}

	// check if there's a user with the user_id field
	existingUser, err := getUserByID(exercise.UserID)
	if existingUser.UserName == "" {
		http.Error(w, "User not found", http.StatusNotFound)
		return
	}

	newExercise, err := insertExercise(exercise)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
	// send all the exercises as response
	json.NewEncoder(w).Encode(newExercise)

}

type parameters struct {
	Limit string
	From  string
	To    string
}

// GetUserExercises returns a full exercise log of any user
func GetUserExercises(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Context-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")

	userID := r.URL.Query().Get("userId")
	from := r.URL.Query().Get("from")
	to := r.URL.Query().Get("to")
	limit := r.URL.Query().Get("limit")

	params := parameters{limit, from, to}

	n, err := strconv.ParseInt(userID, 10, 64)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	existingUser, err := getUserByID(n)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	if existingUser.UserName != "" {
		// get all exercises from existingUser
		exercises, err := getUserExercises(existingUser, params)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		var user models.User

		user.UserName = existingUser.UserName
		user.Log = exercises
		user.Count = len(exercises)
		// send the user log as response
		json.NewEncoder(w).Encode(user)

	}

}

//------------------------- handler functions ----------------
// insert one user in the DB
func insertUser(user models.User) int64 {
	if user.UserName != "" {
		// create the postgres db connection
		db := createConnection()

		// close the db connection
		defer db.Close()

		// create the insert sql query
		// returning _id will return the _id of the inserted user
		sqlStatement := `INSERT INTO users (username) VALUES ($1) RETURNING _id`

		// the inserted _id will store in this _id
		var _id int64

		// execute the sql statement
		// Scan function will save the insert _id in the _id
		err := db.QueryRow(sqlStatement, user.UserName).Scan(&_id)

		if err != nil {
			return 0
		}

		fmt.Printf("Inserted a single record %v", _id)

		// return the inserted id
		return _id
	}
	return 0
}

// insert one exercise in the DB
func insertExercise(exercise models.Exercise) (models.Exercise, error) {
	var newExercise models.Exercise
	var returnErr error

	if exercise.UserID != 0 {
		// create the postgres db connection
		db := createConnection()

		// close the db connection
		defer db.Close()

		// create the insert sql query
		sqlStatement := `INSERT INTO exercises (user_id,description,duration,date) VALUES ($1,$2,$3,$4) RETURNING _id,description,duration,date,user_id`
		date := exercise.Date
		if date == "" {
			date = time.Now().Format("2006-01-02 15:04:05")
		}

		// execute the sql statement
		row := db.QueryRow(sqlStatement, exercise.UserID, exercise.Description, exercise.Duration, date)
		err := row.Scan(&newExercise.ID, &newExercise.Description, &newExercise.Duration, &newExercise.Date, &newExercise.UserID)

		if err != nil {
			returnErr = err
		}

		fmt.Printf("Inserted a single record %v", newExercise.ID)

	}
	return newExercise, returnErr
}

// get all users
func getAllUsers() ([]models.User, error) {
	// create the postgres db connection
	db := createConnection()

	// close the db connection
	defer db.Close()

	var users []models.User

	// create the select sql query
	sqlStatement := `SELECT * FROM users`

	// execute the sql statement
	rows, err := db.Query(sqlStatement)

	if err != nil {
		return users, err
	}

	// close the statement
	defer rows.Close()

	// iterate over the rows
	for rows.Next() {
		var user models.User

		// unmarshal the row object to url
		err := rows.Scan(&user.UserName, &user.ID)

		if err != nil {
			return users, err
		}

		// append the user in the users slice
		users = append(users, user)

	}

	// return empty user on error
	return users, err
}

func getUserByUsername(userName string) (models.User, error) {
	// create the postgres db connection
	db := createConnection()

	// close the db connection
	defer db.Close()

	// create a url of models.User type
	var user models.User

	// create the insert sql query
	sqlStatement := `SELECT * FROM users WHERE username=$1`
	// execute the sql statement
	row := db.QueryRow(sqlStatement, userName)

	// unmarshal the row object to url
	err := row.Scan(&user.UserName, &user.ID)
	switch err {
	case sql.ErrNoRows:
		return user, nil
	case nil:
		return user, nil
	default:
		return user, err
	}
	// return empty user on error
	return user, err
}

func getUserByID(userID int64) (models.User, error) {
	// create the postgres db connection
	db := createConnection()

	// close the db connection
	defer db.Close()

	// create a user of models.User type
	var user models.User

	// create the insert sql query
	sqlStatement := `SELECT * FROM users WHERE _id=$1`
	// execute the sql statement
	row := db.QueryRow(sqlStatement, userID)

	// unmarshal the row object to url
	err := row.Scan(&user.UserName, &user.ID)
	switch err {
	case sql.ErrNoRows:
		return user, nil
	case nil:
		return user, nil
	default:
		return user, err
	}
	// return empty user on error
	return user, err
}

func getUserExercises(user models.User, params parameters) ([]models.Exercise, error) {
	// create the postgres db connection
	db := createConnection()

	// close the db connection
	defer db.Close()

	userLog := []models.Exercise{}

	// var exercises []models.Exercise

	// create the select sql query
	sqlStatement := `SELECT description, duration, date FROM exercises WHERE user_id=$1`

	if params.From != "" {
		sqlStatement = sqlStatement + ` AND date >= timestamp ` + `'` + params.From + `'`
	}
	if params.To != "" {
		sqlStatement = sqlStatement + ` AND date <= timestamp ` + `'` + params.To + `'`
	}

	if params.Limit != "" {
		sqlStatement = sqlStatement + " LIMIT " + params.Limit
	}

	// TODO: find a way to escape the rest of the params, so they can be used on db.Query

	// execute the sql statement
	rows, err := db.Query(sqlStatement, user.ID)

	if err != nil {
		return userLog, err
	}
	// iterate over the rows
	for rows.Next() {
		var exercise models.Exercise

		// unmarshal the row object to url
		err := rows.Scan(&exercise.Description, &exercise.Duration, &exercise.Date)
		if err != nil {
			return userLog, err
		}
		// append the exercise in the exercise slice
		userLog = append(userLog, exercise)

	}

	// close the statement
	defer rows.Close()

	return userLog, err
}
