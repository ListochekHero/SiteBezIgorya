package models

import (
	"errors"
)

var ErrNoRecord = errors.New("models: no apropriate record found")

type CV struct {
	IDofCV      int32  `bson:"idofcv"`
	Name        string `bson:"name"`
	DevStatus   string `bson:"devstatus"`
	Description string `bson:"description"`
	URLAvatar   string `bson:"url"`
	GitHub      string `bson:"github"`
	Telegram    string `bson:"telegram"`
	CV          string `bson:"cv"`
	Portfolio   string `bson:"portfolio"`
}

type SprintFromFront struct {
	Title        string
	SnapshotURL  string
	Descriptions []string
	Comments     []CommentFromFront
}

type CommentFromFront struct {
	Name    string
	Comment string
}

type SprintForDB struct {
	IDofSprint   int      `bson:"idofsprint"`
	Title        string   `bson:"title"`
	Date         string   `bson:"date"`
	SnapshotURL  string   `bson:"snapshoturl"`
	Descriptions []string `bson:"description"`
}

type CommentForDB struct {
	IDofSprint int    `bson:"idofsprint"`
	Name       string `bson:"name"`
	Comment    string `bson:"description"`
}

type SprintForFront struct {
	Title        string
	Date         string
	SnapshotURL  string
	Descriptions []string
	Comments     []CommentForFront
}

type CommentForFront struct {
	Name      string
	Comment   string
	URLAvatar string
	DevStatus string
}
