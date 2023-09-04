/**
 * @description This function checks whether the entered article URL provided by the user is a valid URL.
 *              It ensures that the URL can be sent to the Meaning Cloud API.
 * @param {string} inputText - The input string provided by the user, which needs to be validated as a URL.
 * @returns {boolean} Returns 'true' if the input is a valid URL, and 'false' if it's not a valid URL.
 */

function checkForRightURL(inputText) {
    console.log("Checking for right URL", inputText);

    try {
        new URL(inputText);
        return true;
    } catch (error) {
       
        return false;
    }
}

export { checkForRightURL };
