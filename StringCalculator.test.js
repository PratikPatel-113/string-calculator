const { add } = require('./StringCalculator');

describe('StringCalculator', () => {
    test('should return 0 for an empty string', () => {
        expect(add('')).toBe(0);
    });

    test('should return the number itself for a single number', () => {
        expect(add('1')).toBe(1);
    });

    test('should return the sum of two numbers', () => {
        expect(add('1,5')).toBe(6);
    });

    test('should return the sum of two numbers', () => {
        expect(add('1, 2')).toBe(3);
    });

    test('should return the sum when input contains both commas and newlines as delimiters', () => {
        expect(add('1\n2,3')).toBe(6);
    });

    test('should return the number itself for a single number if input has missing numbers like empty tokens', () => {
        expect(add('1, \n')).toBe(1);
    });

    test('should return the sum of two numbers that supports custom single-character delimiter', () => {
        expect(add('//;\n1;2')).toBe(3);
    });
});
