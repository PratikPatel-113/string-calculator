# string-calculator

This repo contains an implementation of the String Calculator kata, a Test-Driven Development (TDD) exercise. It builds a calculator that processes strings with numbers and delimiters for basic arithmetic. The project gradually adds complexity, including custom delimiters, handling negative numbers, and addressing edge cases.

## Features

- Sum numbers from a comma-separated string (e.g., `"1,2,3"`)
- Supports newlines as delimiters (e.g., `"1\n2,3"`)
- Supports custom single-character delimiters (e.g., `"//;\n1;2;3"`)
- Supports custom multi-character delimiters (e.g., `"//[***]\n1***2***3"`)
- Throws an exception if negative numbers are provided (e.g., `"1,-2"` throws `"negative numbers not allowed -2"`)

## Tech Stack

- **Language**: JavaScript
- **Testing Framework**: Jest

## How to Run

1. **Clone the repository**

   ```bash
   git clone <repo-url>
   cd string-calculator

   ```

2. **Install dependencies**

   ```bash
   npm install

   ```

3. **Run tests**

   ```bash
   npm test
   ```
