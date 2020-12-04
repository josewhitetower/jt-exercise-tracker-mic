package router

import (
	"excercisetracker/middleware"
	"net/http"

	"github.com/gorilla/mux"
)

// Router is exported and used in main.go
func Router() *mux.Router {

	router := mux.NewRouter()

	router.HandleFunc("/api/exercise/new-user", middleware.CreateUser).Methods("POST")
	router.HandleFunc("/api/exercise/users", middleware.GetAllUsers).Methods("GET")
	router.HandleFunc("/api/exercise/add", middleware.CreateExercise).Methods("POST")
	router.HandleFunc("/api/exercise/log", middleware.GetUserExercises).Queries("userId", "{userId}", "limit", "{limit}")
	router.HandleFunc("/api/exercise/log", middleware.GetUserExercises).Queries("userId", "{userId}", "from", "{from}", "limit", "{limit}")
	router.HandleFunc("/api/exercise/log", middleware.GetUserExercises).Queries("userId", "{userId}", "to", "{to}", "limit", "{limit}")
	router.HandleFunc("/api/exercise/log", middleware.GetUserExercises).Queries("userId", "{userId}", "from", "{from}", "to", "{to}", "limit", "{limit}")
	router.HandleFunc("/api/exercise/log", middleware.GetUserExercises).Queries("userId", "{userId}")
	router.HandleFunc("/api/exercise/log", middleware.GetUserExercises).Queries("userId", "{userId}", "from", "{from}")
	router.HandleFunc("/api/exercise/log", middleware.GetUserExercises).Queries("userId", "{userId}", "to", "{to}")
	router.HandleFunc("/api/exercise/log", middleware.GetUserExercises).Queries("userId", "{userId}", "from", "{from}", "to", "{to}")
	// This will serve files under http://localhost:8000/static/<filename>
	router.PathPrefix("/").Handler(http.StripPrefix("/", http.FileServer(http.Dir("./static"))))

	return router
}
