package main

import (
	"context"
	"flag"
	"log"
	"net/http"
	"os"

	"botgap.duo.com/SiteBezIgorya/pkg/models/mongoDB"
)

type application struct {
	errorLog     *log.Logger
	infoLog      *log.Logger
	mongoDBModel *mongoDB.MongoDBModel
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
		errorLog:     errorLog,
		infoLog:      infoLog,
		mongoDBModel: &mongoDB.MongoDBModel{Client: client},
	}
	srv := &http.Server{
		Addr:     *addr,
		ErrorLog: errorLog,
		Handler:  app.routes(),
	}
	infoLog.Printf("Server is running on :%s\n", *addr)
	err = srv.ListenAndServe()
	if err != nil {
		errorLog.Fatal(err)
	}
}
