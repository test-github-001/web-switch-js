'use strict';

let userInput = prompt('Введите технологию: HTML, CSS или JS');
userInput = userInput.toUpperCase();
userInput = userInput.trim();

switch(userInput) {
    case 'HTML' :
        alert('HyperText Markup Language');
    break;
    case 'CSS' :
        alert('Cascading Style Sheets');
    break;
    case 'JS' :
        alert('JavaScript');
    break;
    default :
        alert('undefined…');
}