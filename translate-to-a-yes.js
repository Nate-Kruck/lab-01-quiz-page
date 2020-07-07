export function translateToAYes(word) {
    word = word.charAt(0).toLowerCase();
    if (word === 'y') {
        return true;
    } else if (word === 'yes') {
        return true;
    } else if (word === 'yup') {
        return true;
    } else if (word === 'yea') {
        return true;
    } else if (word === 'yeppers') {
        return true;
    } else
        return false;
}

export default translateToAYes;