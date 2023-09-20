package main

import (
	"flag"
	"log"
	"net/http"
	"os"
	"path/filepath"
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

	mux := http.NewServeMux()
	mux.HandleFunc("/", app.mainWindowHandler)
	mux.HandleFunc("/journal", app.mainWindowHandler)
	mux.HandleFunc("/login", app.mainWindowHandler)
	mux.HandleFunc("/newPost", app.mainWindowHandler)

	fileServer := http.FileServer(neuteredFileSystem{http.Dir("./ui/static/")})
	mux.Handle("/static", http.NotFoundHandler())
	mux.Handle("/static/", http.StripPrefix("/static", fileServer))

	srv := &http.Server{
		Addr:     *addr,
		ErrorLog: errorLog,
		Handler:  mux,
	}

	infoLog.Printf("Server is running on :%s\n", *addr)

	err := srv.ListenAndServe()
	errorLog.Fatal(err)
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
