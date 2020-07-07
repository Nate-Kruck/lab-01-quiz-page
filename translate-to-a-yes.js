export function translateToAYes(word) {
    
    const firstLetter = word.charAt(0).toLowerCase();
    
    const firstLetterIsY = firstLetter === 'y';
    
    return firstLetterIsY;
}