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

type SprintfromFront struct {
	IDofSprint  int                `bson:"idofsprint"`
	Title       string             `bson:"title"`
	SnapshotURL string             `bson:"snapshoturl"`
	Description []string           `bson:"description"`
	Comments    []CommentfromFront `bson:"comments"`
}

type CommentfromFront struct {
	IDofSprint  int    `bson:"idofsprint"`
	Name        string `bson:"name"`
	DevStatus   string `bson:"devstatus"`
	Description string `bson:"description"`
	URLAvatar   string `bson:"url"`
}

type SprintforDB struct {
	IDofSprint  int            `bson:"idofsprint"`
	Title       string         `bson:"title"`
	Date        string         `bson:"date"`
	SnapshotURL string         `bson:"snapshoturl"`
	Description []string       `bson:"description"`
	Comments    []CommentforDB `bson:"comments"`
}

type CommentforDB struct {
	IDofSprint  int    `bson:"idofsprint"`
	Name        string `bson:"name"`
	DevStatus   string `bson:"devstatus"`
	Description string `bson:"description"`
	URLAvatar   string `bson:"url"`
}
