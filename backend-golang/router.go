package main

import (
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/hary/backend-golang/controllers"
)

func NewRouter() *gin.Engine {
	r := gin.Default()

	// Konfigurasi CORS
	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:3000"},
		AllowMethods:     []string{"GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Accept"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
		AllowOriginFunc: func(origin string) bool {
			return origin == "http://localhost:3000"
		},
		MaxAge: 12 * time.Hour,
	}))

	// Define your routes here.
	// r.GET("/", controllers.TestData)
	r.GET("/GetDataUser", controllers.GetData)

	// r.POST("/AddData", controllers.AddData)
	// r.PUT("/UpdateData/:id", controllers.UpdateData)
	// r.DELETE("/DeleteData/:id", controllers.DeleteData)

	r.POST("/login", controllers.Login)
	r.POST("/register", controllers.Register)

	return r
}
