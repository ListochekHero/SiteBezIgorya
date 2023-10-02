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

type Sprint struct {
	IDofSprint  int
	Title       string
	Date        string
	SnapshotURL string
	Description [10]string
	Comments    [3]Comment
}

type Comment struct {
	IDofSprint  int
	Name        string
	DevStatus   string
	Description string
	URLAvatar   string
}
