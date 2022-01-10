const assert = require('assert');
const Rooster = require('../index');

//DeScribe BLOCK
describe ('Rooster', () => {

    describe('.announceDawn', () => {

    it('returns a rooster call', () => {

  // Define expected output
const expected = 'moo!';
 
  // Call Rooster.announceDawn and store result in variable
 const result = Rooster.announceDawn();

  // Use an assert method to compare actual and expected result
  assert.strictEqual(expected, result);
    });
    });

 describe('.timeAtDawn', () => {

      it('returns its argument as a string', () => {

        //setup
        const time = '5';
        const actual = 5;

        //exercise
        const correctTime = Rooster.timeAtDawn(actual);

        //Using assert to verify
        assert.strictEqual(correctTime,  time);
      });

      it('throws an error if passed a number less than 0', () => {
        
        //setup
         const num = -1;
         const expected = RangeError;
        
       
        //assert to verify
          assert.throws( () => {
            Rooster.timeAtDawn(num);
          },
          expected
          );
      });
     it('throws an error if passed a number greater than 23', () => {
         
          //setup
     const num  = 24;
     const expected = RangeError;

     //assert to verify
     assert.throws( () => {
     Rooster.timeAtDawn(num);
     }, 
     expected
      );
      })
    }); 
});