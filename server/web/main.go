package main

import (
	"flag"
	"log"
	"net/http"
	"os"
)

type application struct {
	errorLog *log.Logger
	infoLog  *log.Logger
}

func main() {
	addr := flag.String("addr", ":9009", "Сетевой адрес HTTP")
	flag.Parse()

	infoFile, fileerr := os.OpenFile("info.log", os.O_RDWR|os.O_CREATE, 0666)
	if fileerr != nil {
		log.Fatal(fileerr)
	}
	defer infoFile.Close()
	errorFile, fileerr := os.OpenFile("error.log", os.O_RDWR|os.O_CREATE, 0666)
	if fileerr != nil {
		log.Fatal(fileerr)
	}
	defer errorFile.Close()
	infoLog := log.New(infoFile, "INFO\t", log.Ldate|log.Ltime)
	errorLog := log.New(errorFile, "ERROR\t", log.Ldate|log.Ltime|log.Lshortfile)

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

	err := srv.ListenAndServe()
	errorLog.Fatal(err)
}
