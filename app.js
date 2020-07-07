// import functions and grab DOM elements
import { translateToAYes } from './translate-to-a-yes.js';

const takeQuiz = document.getElementById('quiz-time');
const result = document.getElementById('quiz-result');
// initialize state


function launchQuiz() {
    let score = 0;

    let name = '';

    alert('hello');

    const confirmed = confirm('sure you want to proceed?');
    if (confirmed === false) {
        return;
    }

    const firstName = prompt('What is your first name?');
    name = firstName;

    const lastName = prompt('What is your last name?');
    name + ' ' + lastName;
// set event listeners to update state and DOM
   
    
    const answer1 = prompt('Am I under the age of 30? (yes/no)');
    if (translateToAYes(answer1) === true) {
        score++;
    }

    const answer2 = prompt('Is camping one of my hobbies?');
    if (translateToAYes(answer2) === true) {
        score++;
    }
        
    const answer3 = prompt('Do I like Portland?');
    if (translateToAYes(answer3) === true) {
        score++;
    }
    result.textContent = name + score;
}

takeQuiz.addEventListener('click', launchQuiz);