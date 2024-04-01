import { describe, test, it, expect} from "vitest";
import { fizzBuzz, max } from "../src/intro";

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