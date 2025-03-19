function add(string) {
    // If the input string is empty, return 0
    if (string === '') {
        return 0;  //return 0
    }

    let numArray = [];

    // Check for custom delimiter with square brackets format
    if (string.startsWith('//[') && string.indexOf(']\n') > 0) {
        const closingBracket = string.indexOf(']\n');
        const customDelimiter = string.substring(3, closingBracket); // Extract from after '//[' to before ']\n'
        const numbers = string.substring(closingBracket + 2); // Skip the ']\n' part
        numArray = numbers.split(customDelimiter);
    }
    // Check if the string starts with a custom delimiter (Eg: "//;\n1;2")
    else if (string.startsWith('//')) {
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

    // Check for negative numbers
    let negativeNumbers = [];

    for (let i = 0; i < numArray.length; i++) {
        const num = parseInt(numArray[i], 10);
        if (num < 0) {
            negativeNumbers.push(num);
        }
    }

    if (negativeNumbers.length > 0) {
        throw new Error('negative numbers not allowed ' + negativeNumbers.join(','));
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