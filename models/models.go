package models

// User Schema for the urls table
type User struct {
	UserName string     `json:"username"`
	ID       int64      `json:"_id,omitempty"`
	Log      []Exercise `json:"log,omitempty"`
	Count    int        `json:"count,omitempty"`
}

// Exercise Schema for the exercises table
type Exercise struct {
	UserID      int64  `json:"user_id,omitempty"`
	Description string `json:"description,omitempty"`
	Duration    int64  `json:"duration,omitempty"`
	Date        string `json:"date,omitempty"`
	ID          int64  `json:"_id,omitempty"`
}
