function add(string) {
    // If the input string is empty, return 0
    if (string === '') {
        return 0;  //return 0
    }

    // Check if the input is a single number (no commas)
    if (!string.includes(',')) {
        return parseInt(string, 10);  // Return the number itself
    }
}

module.exports = { add };