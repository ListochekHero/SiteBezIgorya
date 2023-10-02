package mongoDB

import (
	"context"

	"botgap.duo.com/SiteBezIgorya/pkg/models"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

type MongoDBModel struct {
	Client *mongo.Client
}

func (m *MongoDBModel) Insert() (int, error) {
	return 0, nil
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

func (m *MongoDBModel) Latest() ([]*models.CV, error) {
	return nil, nil
}

func (m *MongoDBModel) DocumentsCount(client *mongo.Client, dbName string, collectionName string) (int64, error) {
	collection := client.Database(dbName).Collection(collectionName)
	count, err := collection.CountDocuments(context.Background(), bson.M{})
	if err != nil {
		return 0, err
	}
	return count, nil
}
