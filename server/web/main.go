package main

import (
	"flag"
	"fmt"
	"log"
	"net/http"
)

type application struct {
	errorLog *log.Logger
	infoLog  *log.Logger
}

func main() {
	addr := flag.String("addr", ":9009", "Сетевой адрес HTTP")
	flag.Parse()

	app := &application{}

	mux := http.NewServeMux()
	mux.HandleFunc("/", app.mainWindowHandler)
	mux.HandleFunc("/journal", app.mainWindowHandler)
	mux.HandleFunc("/login", app.mainWindowHandler)
	mux.HandleFunc("/newPost", app.mainWindowHandler)

	fileServer := http.FileServer(http.Dir("./ui/static/"))
	mux.Handle("/static/", http.StripPrefix("/static", fileServer))

	srv := &http.Server{
		Addr:    *addr,
		Handler: mux,
	}

	fmt.Println("Server is running on :9009")

	err := srv.ListenAndServe()
	if err != nil {
		fmt.Printf("Error: %s\n", err)
	}
}
