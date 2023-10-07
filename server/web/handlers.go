package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"strconv"
	"strings"
	"text/template"

	"botgap.duo.com/SiteBezIgorya/pkg/models"
)

func (app *application) mainWindowHandler(w http.ResponseWriter, r *http.Request) {
	ts, err := template.ParseFiles("./static/index.html")
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

func (app *application) sendCVs(w http.ResponseWriter, r *http.Request) {
	cvs, err := app.mongoDBModel.GetAllCVs()
	if err != nil {
		http.Error(w, "Unable to retrieve CVs data from database", http.StatusInternalServerError)
		app.errorLog.Fatal(err)
	}
	cvJSON, err := json.Marshal(cvs)
	if err != nil {
		http.Error(w, "Unable to encode CVs data to JSON", http.StatusInternalServerError)
		app.errorLog.Fatal(err)
	}
	w.Header().Set("Content-Type", "application/json")
	w.Write(cvJSON)
}

func (app *application) saveSpint(w http.ResponseWriter, r *http.Request) {
	err := r.ParseMultipartForm(10 << 20)
	if err != nil {
		http.Error(w, "Unable to parse request", http.StatusInternalServerError)
		app.errorLog.Fatal(err)
	}
	file, _, err := r.FormFile("snapshot")
	if err != nil {
		http.Error(w, "Unable to get file", http.StatusInternalServerError)
		app.errorLog.Fatal(err)
	}
	defer file.Close()
	newSprintID, err := app.mongoDBModel.DocumentsCount(app.mongoDBModel.Client, "goWebDB", "Sprints")
	if err != nil {
		app.errorLog.Fatal(err)
	}
	newSprintID++
	err = saveFile(file, "sprint", newSprintID)
	if err != nil {
		http.Error(w, "Unable to save file", http.StatusInternalServerError)
		app.errorLog.Fatal(err)
	}
	stateJSON := r.FormValue("json")
	var sprint models.SprintFromFront
	err = json.Unmarshal([]byte(stateJSON), &sprint)
	if err != nil {
		http.Error(w, "Unable to decode JSON", http.StatusBadRequest)
		app.errorLog.Fatal(err)
	}
	sprintToInsert := models.SprintForDB{
		IDofSprint:   newSprintID,
		Title:        sprint.Title,
		Date:         "some date",
		SnapshotURL:  "http://134.249.147.135/static/sprint" + strconv.Itoa(newSprintID) + ".png",
		Descriptions: sprint.Descriptions,
	}
	err = app.mongoDBModel.InsertSprint(sprintToInsert)
	if err != nil {
		app.errorLog.Fatal(err)
	}
	var commentsDB []interface{}
	for _, comment := range sprint.Comments {
		commentDB := models.CommentForDB{
			IDofSprint: newSprintID,
			Name:       comment.Name,
			Comment:    comment.Comment,
		}
		commentsDB = append(commentsDB, commentDB)
	}
	err = app.mongoDBModel.InsertComments(commentsDB)
	if err != nil {
		app.errorLog.Fatal(err)
	}
	w.WriteHeader(http.StatusOK)
	w.Write([]byte("Everything is OK"))
}

func (app *application) sprintsCount(w http.ResponseWriter, r *http.Request) {
	count, err := app.mongoDBModel.DocumentsCount(app.mongoDBModel.Client, "goWebDB", "Sprints")
	if err != nil {
		http.Error(w, "Unable to retrieve documents count data from database", http.StatusInternalServerError)
		app.errorLog.Fatal(err)
	}
	w.Header().Set("Content-Type", "text/plain")
	w.WriteHeader(http.StatusOK)
	fmt.Fprintf(w, "%d", count)
}

func (app *application) sendSprint(w http.ResponseWriter, r *http.Request) {
	idofsprint, err := strconv.Atoi(r.URL.Query().Get("id"))
	if err != nil || idofsprint < 1 {
		app.NotFound(w)
		return
	}
	sprint, err := app.mongoDBModel.GetSprintByID(idofsprint)
	if err != nil {
		http.Error(w, "Unable to retrieve CVs data from database", http.StatusInternalServerError)
		app.errorLog.Fatal(err)
	}
	comments, err := app.mongoDBModel.GetCommentsByID(idofsprint)
	if err != nil {
		http.Error(w, "Unable to retrieve Comments data from database", http.StatusInternalServerError)
		app.errorLog.Fatal(err)
	}
	cvs, err := app.mongoDBModel.GetAllCVs()
	if err != nil {
		http.Error(w, "Unable to retrieve CVs data from database", http.StatusInternalServerError)
		app.errorLog.Fatal(err)
	}
	for i := range comments {
		comment := &comments[i]
		for _, cv := range cvs {
			if strings.Contains(cv.Name, comment.Name) {
				comment.DevStatus = cv.DevStatus
				comment.URLAvatar = cv.URLAvatar
				break
			}
		}
	}
	sprintToSend := models.SprintForFront{
		Title:        sprint.Title,
		Date:         sprint.Date,
		SnapshotURL:  sprint.SnapshotURL,
		Descriptions: sprint.Descriptions,
		Comments:     comments,
	}
	sprintToSendJSON, err := json.Marshal(sprintToSend)
	if err != nil {
		http.Error(w, "Unable to encode requested data to JSON", http.StatusInternalServerError)
		app.errorLog.Fatal(err)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	w.Write(sprintToSendJSON)
}
