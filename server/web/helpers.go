package main

import (
	"context"
	"fmt"
	"io"
	"net/http"
	"os"
	"path/filepath"
	"runtime/debug"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func (app *application) serverError(w http.ResponseWriter, err error) {
	trace := fmt.Sprintf("%s\n%s", err.Error(), debug.Stack())
	app.errorLog.Output(2, trace)
	http.Error(w, http.StatusText(http.StatusInternalServerError), http.StatusInternalServerError)
}

func (app *application) clientError(w http.ResponseWriter, status int) {
	http.Error(w, http.StatusText(status), status)
}

func (app *application) NotFound(w http.ResponseWriter) {
	app.clientError(w, http.StatusNotFound)
}

func saveFile(file io.Reader, whatToSave string, identificator any) error {
	fileToCreate := fmt.Sprintf("%v%v.png", whatToSave, identificator)
	filePath := filepath.Join("static", fileToCreate)
	newFile, err := os.Create(filePath)
	if err != nil {
		return err
	}
	defer newFile.Close()
	_, err = io.Copy(newFile, file)
	if err != nil {
		return err
	}
	return nil
}

func connectToMongoDB() (*mongo.Client, error) {
	client, err := mongo.Connect(context.TODO(), options.Client().ApplyURI("mongodb://goWebUser:gowebuser@localhost:27017/goWebDB"))
	if err != nil {
		return nil, err
	}
	err = client.Ping(context.TODO(), nil)
	if err != nil {
		return nil, err
	}
	fmt.Println("Connected to MongoDB!")
	return client, nil
}
