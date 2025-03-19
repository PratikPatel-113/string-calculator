function add(string) {
    // If the input string is empty, return 0
    if (string === '') {
        return 0;  //return 0
    }

    let numArray = [];

    // Check if the string starts with a custom delimiter (Eg: "//;\n1;2")
    if (string.startsWith('//')) {
        // Find the first newline character after the delimiter declaration
        const firstNewLine = string.indexOf('\n');
        // Extract the custom delimiter from the substring before the newline
        let customDelimiter = string.substring(2, firstNewLine);
        // Get the numbers of the string (after the newline)
        const numbers = string.substring(firstNewLine + 1);


        // Split the numbers using the custom delimiter
        numArray = numbers.split(customDelimiter);
    }
    // THEN check if it's a single number without delimiters
    else if (!string.includes(',') && !string.includes('\n')) {
        return parseInt(string, 10);  // Convert the string to an integer and return it
    }
    else {
        // Split the string by both commas and newlines
        numArray = string.split(/[\n,]+/);
    }

    // Calculate sum
    // Initialize the sum to 0
    let sum = 0;

    // Iterate over each number in the array
    for (let i = 0; i < numArray.length; i++) {
        // Remove any extra spaces around the number
        const trimmed = numArray[i].trim();

        if (trimmed !== '') {
            // Convert the string number to an integer
            const parsed = parseInt(trimmed, 10);
            // Add the number to the sum
            sum += parsed;
        }
    }

    // Return the final sum
    return sum;
}

module.exports = { add };