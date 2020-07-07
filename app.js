// import functions and grab DOM elements
import { countAsYes } from './translate-to-a-yes.js';

const takeQuiz = document.getElementById('.takeQuiz');
// initialize state
takeQuiz.addEventListener('click', () => {

    const username = prompt('what is your name?');
    const testConfirm = confirm('would you like to take a quiz,  ${username}?');
    if (!testConfirm) {
        return;
    }
// set event listeners to update state and DOM
    confirm('you sure you want to do this?');
   
    
    const answer1 = prompt('Am I under the age of 30?');
    if (!answer1){
        return;
    }

    const answer2 = prompt('Is camping one of my hobbies?');
    if (!answer2) {
        return;
    }

    const answer3 = prompt('Do I like Portland?');
    if (!answer3) {
        return;
    }


});