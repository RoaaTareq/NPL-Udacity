
//settings and initializations
//1- setup the enviromental variables
const dotenv = require('dotenv')
dotenv.config({
    path: `${__dirname}/src/.env`
  })

// Setup an empty JS object to act as endpoint for all routes in my project
allprojectData = {}

var path = require('path')

//Setup express
const express = require('express')

const app = express()


console.log(__dirname) //for test
console.log("Rouaa API key is",process.env.APIkey) //for test

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Cors for cross origin allowance
const cors = require('cors')
app.use(cors())

// Initialize the main project folder (dist)
app.use(express.static('dist'))

//End Initializations

//get request 
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
   
})

// designates what port the server will listen to for incoming requests
app.listen(8081, function () {
    console.log('listening on port 8081!')
})

//  *****************************   Rou start server *****************************************

//make routes

//get route

/**
 * @description Defines a GET route that sends the data from the 'projectData' endpoint as the server response.
 * @param {string} '/all' - The URL of the GET route.
 * @param {function} anonymous - The function with request and response parameters.
 */

app.get('/all-data',function(req,res){
    
   console.log('model ' + allprojectData.model + ' score_tag:' + allprojectData.score_tag + ' agreement:' + allprojectData.agreement)
    res.send(allprojectData)
  })
  
  //post route
  
  /**
 * @description Defines a POST route that receives data and populates the 'projectData' endpoint as the server response.
 *              Additionally, it logs the endpoint data to the console (terminal) for testing purposes.
 * @param {string} '/addData' - The URL of the POST route.
 * @param {function} addArticleData - The function with request and response parameters that populates the 'projectData' endpoint with the received data.
 */

  app.post('/addData', addArticleData)
  
 /**
 * @description Populates the 'projectData' endpoint with the received data (model, score_tag, agreement, subjectivity, confidence, irony)
 *              and sends the 'projectData' endpoint to the client.
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 */

  function addArticleData(req, res){
   
    console.log('from server: request :' + req.body)
  
    allprojectData.model=req.body.model;
    allprojectData.score_tag=req.body.score_tag;
    allprojectData.agreement=req.body.agreement;

    allprojectData.subjectivity=req.body.subjectivity;
    allprojectData.confidence=req.body.confidence;
    allprojectData.irony=req.body.irony;
 
    res.send(allprojectData)
    console.log('This is server - projectData' + allprojectData)//for test s
    
  } 
  
//********************************   Rou END SERVER ******************************************* */