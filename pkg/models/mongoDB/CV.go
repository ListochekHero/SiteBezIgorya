package mongoDB

import (
	"context"
	"fmt"

	"botgap.duo.com/SiteBezIgorya/pkg/models"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

type MongoDBModel struct {
	Client *mongo.Client
}

func (m *MongoDBModel) GetAllCVs() ([]models.CV, error) {
	collection := m.Client.Database("goWebDB").Collection("CVs")
	cursor, err := collection.Find(context.TODO(), bson.M{})
	if err != nil {
		return nil, err
	}
	defer cursor.Close(context.TODO())
	var cvs []models.CV
	for cursor.Next(context.TODO()) {
		var cv models.CV
		if err := cursor.Decode(&cv); err != nil {
			return nil, err
		}
		cvs = append(cvs, cv)
	}
	return cvs, nil
}

func (m *MongoDBModel) DocumentsCount(client *mongo.Client, dbName string, collectionName string) (int, error) {
	collection := client.Database(dbName).Collection(collectionName)
	count, err := collection.CountDocuments(context.Background(), bson.M{})
	if err != nil {
		return 0, err
	}
	return int(count), nil
}

func (m *MongoDBModel) InsertSprint(sprintToInsert models.SprintForDB) error {
	collection := m.Client.Database("goWebDB").Collection("Sprints")
	_, err := collection.InsertOne(context.TODO(), sprintToInsert)
	if err != nil {
		return err
	}
	return nil
}

func (m *MongoDBModel) InsertComments(commentsToInsert []interface{}) error {
	collection := m.Client.Database("goWebDB").Collection("Comments")
	_, err := collection.InsertMany(context.TODO(), commentsToInsert)
	if err != nil {
		return err
	}
	return nil
}

func (m *MongoDBModel) GetSprintByID(IDofSprint int) (models.SprintForDB, error) {
	collection := m.Client.Database("goWebDB").Collection("Sprints")
	filter := bson.M{"idofsprint": IDofSprint}
	document := collection.FindOne(context.TODO(), filter)
	if document.Err() == mongo.ErrNoDocuments {
		return models.SprintForDB{}, fmt.Errorf("sprint with ID %d not found", IDofSprint)
	} else if document.Err() != nil {
		return models.SprintForDB{}, document.Err()
	}
	sprint := models.SprintForDB{}
	err := document.Decode(&sprint)
	if err != nil {
		return models.SprintForDB{}, err
	}
	return sprint, nil
}

func (m *MongoDBModel) GetCommentsByID(IDofSprint int) ([]models.CommentForFront, error) {
	collection := m.Client.Database("goWebDB").Collection("Comments")
	filter := bson.M{"idofsprint": IDofSprint}
	cursor, err := collection.Find(context.TODO(), filter)
	if err != nil {
		return nil, err
	}
	defer cursor.Close(context.TODO())
	var comments []models.CommentForFront
	for cursor.Next(context.TODO()) {
		var comment models.CommentForDB
		err := cursor.Decode(&comment)
		if err != nil {
			return nil, err
		}
		commentForFront := models.CommentForFront{
			Name:    comment.Name,
			Comment: comment.Comment,
		}
		comments = append(comments, commentForFront)
	}
	return comments, nil
}
