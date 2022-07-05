const action = document.getElementById('submit')
const alphaNum = document.getElementById('alphaNum');
const alpha = document.getElementById('alpha');
const whitespace = document.getElementById('whitespace');
const arraySyntax = document.getElementById('arraySyntax');
const moreThan = document.getElementById('moreThan');
var lastOption;

alphaNum.addEventListener('click', () => lastOption = "alphaNum")
alpha.addEventListener('click', () => lastOption = "alpha");
whitespace.addEventListener('click', () => lastOption = "whitespace");
arraySyntax.addEventListener('click', () => lastOption = "arraySyntax");
moreThan.addEventListener('click', () => lastOption = "moreThan");

action.addEventListener('click', (e) =>{
    let input = document.getElementById('input').value;
    switch(lastOption){
        case 'alpha':
            document.getElementById('output').textContent = input.match(/[a-zA-Z]/g).join('');
            document.getElementById('syntax').textContent = '/[a-zA-Z]/g';
            document.getElementById('title').textContent = "Matches Alphabetical characters between a - z upper or lower case";
            break;
        case 'alphaNum':
            document.getElementById('output').textContent = input.match(/[a-zA-Z0-9]/g).join('');
            document.getElementById('syntax').textContent = '/[a-zA-Z0-9]/g';
            document.getElementById('title').textContent = "Matches Alphabetical characters between a - z upper or lower case and any numerical characters between 0 - 9";
            break;
        case 'whitespace':
            document.getElementById('output').textContent = input.replace(/[a-zA-Z]/w/g);
            document.getElementById('syntax').textContent = `/[\W]/g`;
            document.getElementById('title').textContent = "filtering for non-words to convert into array syntax";
            break;
        case 'arraySyntax':
            document.getElementById('output').textContent = input.replace(/[\W]/g, `','`);
            document.getElementById('syntax').textContent = `/[\W]/g`;
            document.getElementById('title').textContent = "filtering for non-words to convert into array syntax";
            break;
        case 'moreThan':
            document.getElementById('output').textContent = input.match(/\w{5,}/g).join(' ');
            document.getElementById('syntax').textContent = '/\\\w{5,}/g';
            document.getElementById('title').textContent = "Matching Greater than 5";
            break;
        default:
            break;
    }
})