function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8080/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })
}

export { handleSubmit }
// Function to handle form submission
async function handleSubmit(event) {
    event.preventDefault();

    const formText = document.getElementById('url').value;

    if (Client.checkForURL(formText)) {
        console.log("::: Form Submitted :::");

        try {
            const response = await postData('http://localhost:8081/api', { url: formText });

            updateUI(response);
        } catch (error) {
            console.error('Error:', error);
        }
    } else {
        alert('Seems like an invalid URL, please try with a valid URL.');
    }
}

// Function to post data to the server
async function postData(url = '', data = {}) {
    console.log('Analyzing:', data);
    
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    try {
        const newData = await response.json();
        console.log('Data received:', newData);
        return newData;
    } catch (error) {
        console.log('Error:', error);
        throw error;
    }
}

// Function to display sentiment polarity
function polarityChecker(score) {
    const scoreMappings = {
        'P+': 'strong positive',
        'P': 'positive',
        'NEW': 'neutral',
        'N': 'negative',
        'N+': 'strong negative',
        'NONE': 'no sentiment'
    };

    return (scoreMappings[score] || '').toUpperCase();
}

// Function to update the UI with sentiment analysis results
function updateUI(res) {
    document.getElementById('polarity').innerHTML = 'Polarity: ' + polarityChecker(res.score_tag);
    document.getElementById("agreement").innerHTML = `Agreement: ${res.agreement}`;
    document.getElementById("subjectivity").innerHTML = `Subjectivity: ${res.subjectivity}`;
    document.getElementById("confidence").innerHTML = `Confidence: ${res.confidence}`;
    document.getElementById("irony").innerHTML = `Irony: ${res.irony}`;
}

export { handleSubmit, polarityChecker };
