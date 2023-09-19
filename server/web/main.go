package main

import (
	"fmt"
	"net/http"
)

func main() {

	mux := http.NewServeMux()
	mux.HandleFunc("/", Main_Window_Handler)
	mux.HandleFunc("/journal", Main_Window_Handler)
	mux.HandleFunc("/login", Main_Window_Handler)
	mux.HandleFunc("/newPost", Main_Window_Handler)

	fileServer := http.FileServer(http.Dir("./ui/static/"))
	mux.Handle("/static/", http.StripPrefix("/static", fileServer))

	fmt.Println("Server is running on :9009")

	err := http.ListenAndServe(":9009", mux)
	if err != nil {
		fmt.Printf("Error: %s\n", err)
	}
}
