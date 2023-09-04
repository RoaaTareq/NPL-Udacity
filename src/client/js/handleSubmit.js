

function handleSubmit(event) {
    event.preventDefault();
    
    const inputElement = document.getElementById("myURL");
     // Retrieve the value from the input element
    const inputValue = inputElement.value;
    const urlCheckerResult = MyClient.checkForRightURL(inputValue);
    // Get reference to the form element
  const formElement = document.getElementById("btnSubmit");
  
  // Add a submit event listener to the form
  formElement.addEventListener("click", ArticleData);
  
        
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
        // This is a placeholder function, you would replace it with your actual analysis logic using  any other method.
      
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
      const analysisData = await myRequest.json();
// Display the analysisData in respective divs
      document.getElementById("model").textContent = "Model: " + analysisData.model;
      document.getElementById("score_tag").textContent = "Score Tag: " + analysisData.score_tag;
      document.getElementById("agreement").textContent = "Agreement: " + analysisData.agreement;
      document.getElementById("subjectivity").textContent = "Subjectivity: " + analysisData.subjectivity;
      document.getElementById("confidence").textContent = "Confidence: " + analysisData.confidence;
      document.getElementById("irony").textContent = "Irony: " + analysisData.irony;
  } catch (err) {
      console.log(err);
  }
}

export { handleSubmit };
