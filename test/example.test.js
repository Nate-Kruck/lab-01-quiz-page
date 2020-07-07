// IMPORT MODULES under test here:
import { translateToAYes } from '../translate-to-a-yes.js';
// import example from '../example.js';

const test = QUnit.test;

test('these should all return true', function(expect) {
    //Arrange
    // Set up your arguments and expectations
    const word1 = 'yes';
    const word2 = 'yup';
    const word3 = 'yea';
    const word4 = 'yeppers';
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual1 = translateToAYes(word1);
    const actual2 = translateToAYes(word2);
    const actual3 = translateToAYes(word3);
    const actual4 = translateToAYes(word4);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual1, actual2, actual3, actual4, expected);
});

test('these should all return false', function(expect) {
    //Arrange
    //Set up arguments and expectations
    const wrong1 = 'no';
    const wrong2 = 'nope';
    const wrong3 = 'naw';
    const expected = false;

    //Act
    //Call the function then set result to const
    const actual5 = translateToAYes(wrong1);
    const actual6 = translateToAYes(wrong2);
    const actual7 = translateToAYes(wrong3);

    //Expect
    //Make assertations about what is expected vs actual result
    expect.equal(actual5, actual6, actual7, expected);

});


