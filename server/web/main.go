package main

import (
	"fmt"
	"log"
	"net/http"
)

type application struct {
	errorLog *log.Logger
	infoLog  *log.Logger
}

func main() {

	app := &application{}

	mux := http.NewServeMux()
	mux.HandleFunc("/", app.mainWindowHandler)
	mux.HandleFunc("/journal", app.mainWindowHandler)
	mux.HandleFunc("/login", app.mainWindowHandler)
	mux.HandleFunc("/newPost", app.mainWindowHandler)

	fileServer := http.FileServer(http.Dir("./ui/static/"))
	mux.Handle("/static/", http.StripPrefix("/static", fileServer))

	fmt.Println("Server is running on :9009")

	err := http.ListenAndServe(":9009", mux)
	if err != nil {
		fmt.Printf("Error: %s\n", err)
	}
}
