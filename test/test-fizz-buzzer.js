const expect = require('chai').expect;

const adder = require('../fizzBuzzer');

describe('fizzBuzzer', function() {
    it('should test if numbers are divisible by 3, 5 and 15', function() {
        
        const normalCases = [
          {num: 15, expected: 'fizz-buzz'},
          {num: 3 , expected: 'fizz'},
          {num: 5, expected: 'buzz'}
        ];
        
        normalCases.forEach(function(input) {
          const answer = fizzBuzzer(input[0]);  
          expect(answer).to.equal(input.expected);
        });
      });
    
      it('should raise error if arg is not a number', function() {
        
        const badInputs = [
          ['a'],
          ['1'],
          [false]
        ];
       
        badInputs.forEach(function(input) {
          expect(function() {
            fizzBuzzer(input[0]);
          }).to.throw(Error);
        });
      });
    });