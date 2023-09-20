package main

import (
	"flag"
	"fmt"
	"log"
	"net/http"
	"path/filepath"
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

	fileServer := http.FileServer(neuteredFileSystem{http.Dir("./ui/static/")})

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

type neuteredFileSystem struct {
	fs http.FileSystem
}

func (nfs neuteredFileSystem) Open(path string) (http.File, error) {
	f, err := nfs.fs.Open(path)
	if err != nil {
		return nil, err
	}
	s, err := f.Stat()
	if s.IsDir() {
		index := filepath.Join(path, "index2.html")
		if _, err := nfs.fs.Open(index); err != nil {
			closeErr := f.Close()
			if closeErr != nil {
				return nil, closeErr
			}
			return nil, err
		}
	}
	return f, nil
}
