package mongoDB

import (
	"botgap.duo.com/SiteBezIgorya/pkg/models"
	"go.mongodb.org/mongo-driver/mongo"
)

type MongoDBModel struct {
	Client *mongo.Client
}

func (m *MongoDBModel) Insert() (int, error) {
	return 0, nil
}

func (m *MongoDBModel) GetAllCVs(id int) (*models.CV, error) {

	return nil, nil
}

func (m *MongoDBModel) Latest() ([]*models.CV, error) {
	return nil, nil
}
