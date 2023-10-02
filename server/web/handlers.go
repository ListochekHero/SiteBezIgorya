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

	collection := app.mongoDBModel.Client.Database("goWebDB").Collection("Comments")
	comModel := models.CommentforDB{
		IDofSprint:  1,
		Name:        "Serhii",
		Description: "can run some Go app",
	}
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
	result, err := collection.InsertOne(context.TODO(), comModel)
	if err != nil {
		app.errorLog.Fatal(err)
	}
	insertedID := result.InsertedID
	fmt.Fprintf(w, "Inserted document ID:%v", insertedID)
}

func (app *application) sendCVs(w http.ResponseWriter, r *http.Request) {
	//id, err := strconv.Atoi(r.URL.Query().Get("id"))
	// if err != nil || id < 1 {
	// 	app.NotFound(w)
	// 	return
	// }

	app.mongoDBModel.GetAllCVs()

	collection := app.mongoDBModel.Client.Database("goWebDB").Collection("CVs")
	cursor, err := collection.Find(context.TODO(), bson.M{})
	if err != nil {
		http.Error(w, "Unable to retrieve CV data from database", http.StatusInternalServerError)
		return
	}
	defer cursor.Close(context.TODO())

	var cvs []models.CV

	for cursor.Next(context.TODO()) {
		var cv models.CV
		if err := cursor.Decode(&cv); err != nil {
			http.Error(w, "Unable to decode CV data", http.StatusInternalServerError)
			return
		}
		cvs = append(cvs, cv)
	}

	cvJSON, err := json.Marshal(cvs)
	if err != nil {
		http.Error(w, "Unable to encode CV data to JSON", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(cvJSON)
}

func (app *application) saveSpint(w http.ResponseWriter, r *http.Request) {
	// Читаємо JSON з тіла HTTP-запиту
	var sprint models.SprintfromFront
	err := json.NewDecoder(r.Body).Decode(&sprint)
	if err != nil {
		http.Error(w, "Помилка розкодування JSON", http.StatusBadRequest)
		return
	}

	// Опрацьовуємо дані sprint

	// Надсилаємо відповідь назад на фронтенд
	w.WriteHeader(http.StatusOK)
	w.Write([]byte("Дані успішно отримано та опрацьовано"))
}

func (app *application) sprintsCount(w http.ResponseWriter, r *http.Request) {
	count, err := app.mongoDBModel.DocumnetsCount(app.mongoDBModel.Client, "gCoWebDB", "Sprints")
	if err != nil {
		http.Error(w, "Unable to retrieve doucments count data from database", http.StatusInternalServerError)
		return
	}
	w.Header().Set("Content-Type", "text/plain")
	w.WriteHeader(http.StatusOK)
	fmt.Fprintf(w, "%d", count)
}
