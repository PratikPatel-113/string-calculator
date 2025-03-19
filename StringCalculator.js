function add(string) {
    // If the input string is empty, return 0
    if (string === '') {
        return 0;  //return 0
    }

    // Check if the input is a single number (no commas)
    if (!string.includes(',')) {
        return parseInt(string, 10);  // Return the number itself
    }

    // Split the string by both commas and newlines
    const numArray = string.split(/[\n,]+/);

    // Step 2: Initialize a sum variable to 0
    let sum = 0;

    // Step 3: Loop through each number in the array
    for (let i = 0; i < numArray.length; i++) {
        // Step 4: Convert each string to a number and add it to the sum
        sum += parseInt(numArray[i], 10);
    }

    // Step 5: Return the final sum
    return sum;
}

module.exports = { add };