package controllers

import (
	"github.com/gin-gonic/gin"
	"github.com/hary/backend-golang/models"
	"github.com/hary/backend-golang/schema"
)

func TestData(c *gin.Context) {
	c.JSON(200, gin.H{
		"Message": "Hello, world!",
	})
}

func GetData(c *gin.Context) {
	//Get Data from user
	var data []models.User
	schema.DB.Find(&data)

	//Send Response
	c.JSON(200, gin.H{
		"data": data,
	})
}

func GetDataById(c *gin.Context) {

	//Get Id from User
	id := c.Param("id")

	//Get Data from Database
	var data models.User
	schema.DB.First(&data, id)

	//Send Response
	c.JSON(200, gin.H{
		"data": data,
	})
}

func AddData(c *gin.Context) {

	//Get Data from req body and Bind for convert JSON to Text/XML
	var body struct {
		Username string
		Email    string
		Password string
	}

	c.Bind(&body)

	//Create a Data
	addData := models.User{
		Username: body.Username, Email: body.Email, Password: body.Password}

	result := schema.DB.Create(&addData)

	if result.Error != nil {
		c.Status(400)
		return
	}

	//Send Response
	c.JSON(200, gin.H{
		"Message": "Success Add Data",
		"data":    addData,
	})
}

func UpdateData(c *gin.Context) {
	//Get ID From User
	id := c.Param("id")

	//Get Data from req body user and convert JSON to Text/XML
	var body struct {
		Username string
		Email    string
		Password string
	}

	c.Bind(&body)

	//Find data for updating user
	var data models.User
	schema.DB.First(&data, id)

	//Update data
	schema.DB.Model(&data).Updates(models.User{
		Username: body.Username,
		Email:    body.Email,
		Password: body.Password,
	})

	//Send Response
	c.JSON(299, gin.H{
		"message": "Success Update Data",
		"data":    data,
	})
}

func DeleteData(c *gin.Context) {

	//Get id from req body
	id := c.Param("id")

	//Delete data from database
	schema.DB.Delete(&models.User{}, id)

	//Send Response
	c.Status(200)

}

func Register(c *gin.Context) {

	//Get Data from req body and convert from JSON to text / HTML
	var body struct {
		Username string
		Email    string
		Password string
	}

	c.Bind(&body)

	//Create a Data
	data := models.User{
		Username: body.Username,
		Email:    body.Email,
		Password: body.Password,
	}

	result := schema.DB.Create(&data)

	if result.Error != nil {
		c.Status(400)
		return
	}

	//Send Response
	c.JSON(200, gin.H{
		"message": "Success Register User",
		"data":    data,
	})
}

func Login(c *gin.Context) {
	//Get Data from req body and convert from JSON to text / HTML
	var body struct {
		Username string
		Password string
	}

	c.Bind(&body)

	//Create a Data
	data := models.User{
		Username: body.Username,
		Password: body.Password,
	}

	result := schema.DB.Create(&data)

	if result.Error != nil {
		c.Status(400)
		return
	}

	//Send Response
	c.JSON(200, gin.H{
		"Message": "Success Login User",
		"data":    data,
	})
}
