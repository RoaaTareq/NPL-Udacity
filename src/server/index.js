// Import required modules and initialize environment variables
const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

dotenv.config({
  path: `${__dirname}/src/.env`,
});

// Setup Express
const app = express();
const port = 8081;

// Middleware setup
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Serve static files from the 'dist' folder
app.use(express.static('dist'));

// Initialize project data object
const allprojectData = {};

// Define a GET route for the homepage
app.get('/', (req, res) => {
  res.sendFile('dist/index.html');
});

// Define a GET route to send project data
app.get('/all-data', (req, res) => {
  console.log(`Model: ${allprojectData.model}, Score Tag: ${allprojectData.score_tag}, Agreement: ${allprojectData.agreement}`);
  res.send(allprojectData);
});

// Define a POST route to add data
app.post('/addData', (req, res) => {
  console.log('Received data from client:', req.body);
  Object.assign(allprojectData, req.body); // Update projectData with received data
  res.send(allprojectData);
  console.log('Updated projectData:', allprojectData); // For testing purposes
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
