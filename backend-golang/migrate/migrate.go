package main

import (
	"github.com/hary/backend-golang/helpers"
	"github.com/hary/backend-golang/models"
	"github.com/hary/backend-golang/schema"
)

func init() {
	helpers.LoadEnvVariables()
	schema.ConnectToDB()
}

func main() {
	//Migrate the schema
	schema.DB.AutoMigrate(&models.User{})
}
