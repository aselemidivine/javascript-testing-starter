import { describe, test, it, expect} from "vitest";
import { fizzBuzz, max, calculateAverage } from "../src/intro";

describe('max', () => {
    it('should return first argument if it is greater', () => {
        // patterns to follow while arranging test should look like this. AAA  
        expect(max(2, 1)).toBe(2)
    })
    it('should return the second argument if it is greater', () => {
        expect(max(1, 2)).toBe(2)
    })
    it('should return the first argument if iarguments are equal', () => {
        expect(max(1, 1)).toBe(1)
    })
})


// A "false positive" means that a test passes even though there is still a bug. Giving us an illussion that the code works. And vice versa

describe('fizzBuzz', () => {
    it('should return the fizzbuzz if argument is divisible by 5', () => {
        expect(fizzBuzz(25)).toBe('Buzz')
    })
    it('should return the fizzbuzz if argument is divisible by 3', () => {
        expect(fizzBuzz(9)).toBe('Fizz')
    })
    it('should return the fizzbuzz if argument is divisible by 3 and 5', () => {
        expect(fizzBuzz(30)).toBe('FizzBuzz')
    })
    it('should return the argument as a string if it is not divisible by 3 and 5', () => {
        expect(fizzBuzz(7)).toBe('7')
    })
})

describe('calculateAverage', () => {
    it('should return NaN if given an empty array', () => {
        expect(calculateAverage([])).toBe(NaN);
    })
    it('should calculate the average of an array with a single element', () => {
        expect(calculateAverage([1])).toBe(1);
    })
    it('should calculate the average of an array with two elements', () => {
        expect(calculateAverage([1, 2])).toBe(1.5);
    })
    it('should calculate the average of an array with three elements', () => {
        expect(calculateAverage([1, 2, 3])).toBe(2);
    })
})

describe('factorial', () => {
    it('it should return 1 if given 0'), () => {
        expect(factorial(0)).toBe(1);
    } 
    it('it should return 1 if given 1'), () => {
        expect(factorial(1)).toBe(1);
    } 
    it('it should return 2 if given 2'), () => {
        expect(factorial(2)).toBe(2);
    } 
    it('it should return 6 if given 3'), () => {
        expect(factorial(3)).toBe(6);
    } 
    it('it should return 24 if given 4'), () => {
        expect(factorial(4)).toBe(24);
    } 
    it('it should return undefined if given a negative number'), () => {
        expect(factorial(-4)).toBeUndefined();
    } 
})