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
            document.getElementById('output').textContent = input.match(/[a-zA-Z]/g);
            document.getElementById('syntax').textContent = '/[a-zA-Z]/g';
            document.getElementById('title').textContent = "Matching Alphabetical characters only";
            break;
        case 'alphaNum':
            document.getElementById('output').textContent = input.match(/[a-zA-Z0-9]/g);
            document.getElementById('syntax').textContent = '/[a-zA-Z0-9]/g';
            document.getElementById('title').textContent = "Matching Alphabetical or numerical characters only";
            break;
        case 'whitespace':
            document.getElementById('output').textContent = input.match(/\S+/);
            document.getElementById('syntax').textContent = '/\S+/';
            document.getElementById('title').textContent = "Matching Greater than 5";
            break;
        case 'arraySyntax':
            break;
        case 'moreThan':
            document.getElementById('output').textContent = input.match(/a{5,}/g);
            document.getElementById('syntax').textContent = '/a{3,}/g';
            document.getElementById('title').textContent = "Matching Greater than 5";
            break;
        default:
            break;
    }
})