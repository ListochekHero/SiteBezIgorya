package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"text/template"

	"context"

	"botgap.duo.com/SiteBezIgorya/pkg/models"
	"go.mongodb.org/mongo-driver/bson"
)

func (app *application) mainWindowHandler(w http.ResponseWriter, r *http.Request) {
	ts, err := template.ParseFiles("./ui/static/index.html")
	if err != nil {
		app.serverError(w, err)
		http.Error(w, "Internal Server Error", 500)
		return
	}
	err = ts.Execute(w, nil)
	if err != nil {
		app.serverError(w, err)
		http.Error(w, "Internal Server Error", 500)
	}
}

func (app *application) showSomeJournal(w http.ResponseWriter, r *http.Request) {
	collection := app.mongoDBModel.Client.Database("goWebDB").Collection("CVs")
	result := collection.FindOne(context.TODO(), bson.M{"someid": 1})
	var cv models.CV
	if err := result.Decode(&cv); err != nil {
		app.errorLog.Fatal(err)
	}
	// id, err := strconv.Atoi(r.URL.Query().Get("id"))
	// if err != nil || id < 1 {
	// 	app.NotFound(w)
	// 	return
	// }
	fmt.Fprintf(w, "Display a specific snippet with ID %v...", cv)
}

func (app *application) createSomeJournal(w http.ResponseWriter, r *http.Request) {

	//collection := app.mongoDBModel.Client.Database("goWebDB").Collection("CVs")
	// cvModel := models.CV{
	// 	IDofCV:      2,
	// 	Name:        "Serhii Feshchenko",
	// 	DevStatus:   "back-end developer",
	// 	Description: "can run some Go app",
	// 	URLAvatar:   "http://134.249.147.135/static/xayah.jpg",
	// 	GitHub:      "https://github.com/ListochekHero",
	// 	CV:          "https://docs.google.com/document/d/1Yr-0JmYBNIhmcZ5AfOrPJrH4RPXSN2Rf1AY5FL1ULVQ/edit",
	// 	Portfolio:   "https://github.com/ListochekHero?tab=repositories",
	// 	Telegram:    "https://t.me/ListochekHero",
	// }
	// cvModel := models.CV{
	// 	IDofCV:      1,
	// 	Name:        "Andrii Kryvyziuk",
	// 	DevStatus:   "front-end developer",
	// 	Description: "Sample description",
	// 	URLAvatar:   "https://prod.api.assets.riotgames.com/public/v1/asset/lol/13.18.1/CHAMPION/497/ICON?width=200&height=200&format=auto&auto=webp",
	// 	GitHub:      "https://github.com/su8ject",
	// 	CV:          "CV data",
	// 	Portfolio:   "https://su8ject.github.io/portfolio/",
	// 	Telegram:    "https://t.me/AndriiKryvyziuk",
	// }
	// result, err := collection.InsertOne(context.TODO(), cvModel)
	// if err != nil {
	// 	app.errorLog.Fatal(err)
	// }
	// insertedID := result.InsertedID
	// fmt.Fprintf(w, "Inserted document ID:%v", insertedID)
}

func (app *application) sendCVbyid(w http.ResponseWriter, r *http.Request) {
	//id, err := strconv.Atoi(r.URL.Query().Get("id"))
	// if err != nil || id < 1 {
	// 	app.NotFound(w)
	// 	return
	// }

	collection := app.mongoDBModel.Client.Database("goWebDB").Collection("CVs")
	cursor, err := collection.Find(context.TODO(), bson.M{})
	if err != nil {
		http.Error(w, "Unable to retrieve CV data from database", http.StatusInternalServerError)
		return
	}
	defer cursor.Close(context.TODO())

	var cvs []models.CV

	// Ітеруємось по результатам та додавайте їх у масив
	for cursor.Next(context.TODO()) {
		var cv models.CV
		if err := cursor.Decode(&cv); err != nil {
			http.Error(w, "Unable to decode CV data", http.StatusInternalServerError)
			return
		}
		cvs = append(cvs, cv)
	}

	// Перетворити масив у JSON
	cvJSON, err := json.Marshal(cvs)
	if err != nil {
		http.Error(w, "Unable to encode CV data to JSON", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(cvJSON)

	// collection := app.mongoDBModel.Client.Database("goWebDB").Collection("CVs")
	// result := collection.FindOne(context.TODO(), bson.M{"someid": 1})
	// var cv models.CV
	// if err := result.Decode(&cv); err != nil {
	// 	app.errorLog.Fatal(err)
	// }
	// cvJSON, err := json.Marshal(cv)
	// if err != nil {
	// 	http.Error(w, "Unable to encode CV data to JSON", http.StatusInternalServerError)
	// 	return
	// }
	// w.Header().Set("Content-Type", "application/json")
	// w.Write(cvJSON)

	//fmt.Fprintf(w, "Display a specific snippet with ID %v...", cv)
}
