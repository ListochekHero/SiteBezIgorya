package main

import (
	"context"
	"flag"
	"fmt"
	"log"
	"net/http"
	"os"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

type application struct {
	errorLog *log.Logger
	infoLog  *log.Logger
}

func connectToMongoDB() (*mongo.Client, error) {
	// З'єднання з базою даних MongoDB
	client, err := mongo.Connect(context.TODO(), options.Client().ApplyURI("mongodb://goWebUser:gowebus2er@localhost:27017/goWebDB"))
	if err != nil {
		return nil, err
	}

	// Перевірка з'єднання з базою даних
	err = client.Ping(context.TODO(), nil)
	if err != nil {
		return nil, err
	}

	fmt.Println("Connected to MongoDB!")
	return client, nil
}

func main() {

	addr := flag.String("addr", ":9009", "Сетевой адрес HTTP")
	flag.Parse()

	infoFile, err := os.OpenFile("info.log", os.O_RDWR|os.O_CREATE, 0666)
	if err != nil {
		log.Fatal(err)
	}
	defer infoFile.Close()
	errorFile, err := os.OpenFile("error.log", os.O_RDWR|os.O_CREATE, 0666)
	if err != nil {
		log.Fatal(err)
	}
	defer errorFile.Close()
	infoLog := log.New(infoFile, "INFO\t", log.Ldate|log.Ltime)
	errorLog := log.New(errorFile, "ERROR\t", log.Ldate|log.Ltime|log.Lshortfile)

	client, err := connectToMongoDB()
	if err != nil {
		errorLog.Fatal(err)
		return
	}

	defer client.Disconnect(context.TODO())

	app := &application{
		errorLog: errorLog,
		infoLog:  infoLog,
	}

	srv := &http.Server{
		Addr:     *addr,
		ErrorLog: errorLog,
		Handler:  app.routes(),
	}

	infoLog.Printf("Server is running on :%s\n", *addr)

	err = srv.ListenAndServe()
	errorLog.Fatal(err)
}
