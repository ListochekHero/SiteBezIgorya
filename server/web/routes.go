package main

import (
	"net/http"
	"path/filepath"
)

func (app *application) routes() *http.ServeMux {
	mux := http.NewServeMux()
	mux.HandleFunc("/", app.mainWindowHandler)
	mux.HandleFunc("/team/CVs/", app.sendCVs)
	mux.HandleFunc("/saveSprint/", app.saveSpint)
	mux.HandleFunc("/sprintsCount/", app.sprintsCount)
	mux.HandleFunc("/getSprint", app.sendSprint)
	fileServer := http.FileServer(neuteredFileSystem{http.Dir("static/")})
	mux.Handle("/static", http.NotFoundHandler())
	mux.Handle("/static/", http.StripPrefix("/static", fileServer))
	return mux
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
	if err != nil {
		return nil, err
	}
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
