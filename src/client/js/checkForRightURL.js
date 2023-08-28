

/**
 * @description This function checks whether the entered article URL provided by the user is a valid URL.
 *              It ensures that the URL can be sent to the Meaning Cloud API.
 * @param {string} inputText - The input string provided by the user, which needs to be validated as a URL.
 * @returns {boolean} Returns 'true' if the input is a valid URL, and 'false' if it's not a valid URL.
 */


function checkForRightURL(inputText) {
    console.log("Checking for right URL", inputText);

    
  let regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
        if (regexp.test(inputText))
        {
            return true;
        }else
        {
            return false;
        }
   
} //end checkForRightURL

export {checkForRightURL}