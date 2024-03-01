package main

import (
	"github.com/hary/backend-golang/helpers"
	"github.com/hary/backend-golang/schema"
)

func init() {
	helpers.LoadEnvVariables()
	schema.ConnectToDB()

}

func main() {

	r := NewRouter()

	r.Run()

}
