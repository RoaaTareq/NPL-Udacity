// Import MyClient if needed
// import MyClient from './MyClient'; // Assuming MyClient is in a separate module

function handleSubmit(event) {
  event.preventDefault();

  const formText = document.getElementById('myURL').value;
 

  const urlCheckerResult = MyClient.checkForRightURL(formText);


  document.getElementById('btnSubmit').addEventListener('click', ArticleData);
}

function ArticleData() {
  const inputforUserURL = document.getElementById('myURL').value;
  const isCorrectURL = MyClient.checkForRightURL(inputforUserURL);
  const myAPIKeyToSend = '?key=4db0355e48c925456f0bfa8ab89f7791';
  const meaningCloudUrl = 'https://api.meaningcloud.com/sentiment-2.1';

  if (!isCorrectURL) {
      alert('Kindly enter a valid URL!');
  } else {
      const urlToSend = "&url=" + inputforUserURL;
     

      getallArticleData(meaningCloudUrl, urlToSend, myAPIKeyToSend)
          .then(data => {
              postData('http://localhost:8081/addData', {
                  model: data.model,
                  score_tag: data.score_tag,
                  agreement: data.agreement,
                  subjectivity: data.subjectivity,
                  confidence: data.confidence,
                  irony: data.irony
              });
          })
          .then(() => updateMyformUI());
  }
}

async function getallArticleData(mCUrl, iUURL, api) {
  try {
      const res = await fetch(mCUrl + api + iUURL + '&lang=en');
      const data = await res.json();
     
      return data;
  } catch (error) {
      console.log("error in getArticleData", error);
  }
}

async function postData(url, data = {}) {

  try {
      const response = await fetch(url, {
          method: 'POST',
          credentials: 'same-origin',
          headers: {
              "Content-Type": 'application/json'
          },
          body: JSON.stringify(data)
      });
  } catch (error) {
      console.log(error);
  }
}

async function updateMyformUI() {
  try {
      const myRequest = await fetch('http://localhost:8081/all-data');
      const myReturnedData = await myRequest.json();

      document.getElementById('model').innerHTML = 'Model: ' + myReturnedData.model;
      document.getElementById('score_tag').innerHTML = 'Score Tag: ' + myReturnedData.score_tag;
      document.getElementById('agreement').innerHTML = 'Agreement: ' + myReturnedData.agreement;

      document.getElementById('subjectivity').innerHTML = 'Subjectivity: ' + myReturnedData.subjectivity;
      document.getElementById('confidence').innerHTML = 'Confidence: ' + myReturnedData.confidence;
      document.getElementById('irony').innerHTML = 'Irony: ' + myReturnedData.irony;
  } catch (err) {
      console.log(err);
  }
}

export { handleSubmit };
