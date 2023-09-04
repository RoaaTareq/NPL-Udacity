# NLP-Powered News Article Evaluation: A Web Project

## Introduction

Welcome to the NLP-Powered News Article Evaluation project! This web-based platform empowers users to submit the URLs of specific articles or blogs from various websites for in-depth Natural Language Processing (NLP) analysis. The project leverages an external API provided by Meaning Cloud, focusing primarily on sentiment analysis. The project consists of two core components: the client-side and the server-side, each operating on distinct ports.

## Development Approach

The website's development is rooted in JavaScript and HTML, and it makes use of a range of technologies including Webpack, Webpack loaders and plugins, SASS, service workers, and APIs.

To initiate development:

1. Ensure that all project dependencies are installed by executing `npm install`.
2. Launch the server using `npm start`.
3. Benefit from both development and production configuration setups.

## Essential Installations

In addition to the aforementioned technologies, the project necessitates the installation of various dependencies:

* express
* body-parser
* cors
* jest
* dotenv

These required dependencies, alongside others, are meticulously detailed in the package.json file.

## Engaging with the API

The project taps into the capabilities of the Meaning Cloud API to facilitate the essential NLP analysis of user-provided URLs. To seamlessly integrate with this API:

* An API key is registered within the .env file—no further credentials are necessary.
* It's worth noting that the API offers free access for up to 1000 daily requests.
 ## explain  code and resource
 * check url 
  - https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url
  - chatgpt
  - https://www.freecodecamp.org/news/check-if-a-javascript-string-is-a-url/#:~:text=checkValidity()%20method%20is%20used,is%20not%20a%20proper%20URL.
  * handelsubmit 
  - w3school
  - third section from course I studied intgration API

  *I have exprince on coding
  
## Enriching Features

Beyond its core functionality, the project boasts additional compelling features:

* Robust unit testing for JavaScript files, ensuring code quality and reliability.
* Offline accessibility through service workers, allowing users to engage with the website even without an active internet connection.
* Dynamic integration of server responses into the User Interface, creating a seamless and responsive user experience.

## About the Author

My name is Roaa, and I am the proud author of this project. As a dedicated student enrolled in the Jordan initiative, I've undertaken the creation of this endeavor to harness the power of NLP for article evaluation.