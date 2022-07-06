const action = document.getElementById('submit')
const char = document.getElementById('char');
const asse = document.getElementById('asse');
const grou = document.getElementById('grou');
const quan = document.getElementById('quan');
const unic = document.getElementById('unic');
var lastOption;

char.addEventListener('click', () => lastOption = "char")
asse.addEventListener('click', () => lastOption = "asse");
grou.addEventListener('click', () => lastOption = "grou");
quan.addEventListener('click', () => lastOption = "quan");
unic.addEventListener('click', () => lastOption = "unic");

action.addEventListener('click', (e) =>{
    let input = document.getElementById('input').value;
    switch(lastOption){
        case 'char':
            document.getElementById('output').textContent = input.match(/ab+c/g).join('');
            document.getElementById('syntax').textContent = '/ab+c/g';
            document.getElementById('title').textContent = "Matches Alphabetical characters between a - z upper or lower case";
            break;
        case 'asse':
            document.getElementById('output').textContent = input.match(/\w+$/g).join('');
            document.getElementById('syntax').textContent = '/\w+$/g';
            document.getElementById('title').textContent = "Matches Alphabetical characters between a - z upper or lower case and any numerical characters between 0 - 9";
            break;
        case 'grou':
            document.getElementById('output').textContent = input.replace(/\b[a-df-z]+\b/ig);
            document.getElementById('syntax').textContent = `/\b[a-df-z]+\b/ig`;
            document.getElementById('title').textContent = "filtering for non-words to convert into array syntax";
            break;
        case 'quan':
            document.getElementById('output').textContent = input.match(/\b\w{2,6}\b/g);
            document.getElementById('syntax').textContent = `/\b\w{2,6}\b/g`;
            document.getElementById('title').textContent = "filtering for non-words to convert into array syntax";
            break;
        case 'unic':
            document.getElementById('output').textContent = input.match(/\p{Emoji_Presentation}/gu);
            document.getElementById('syntax').textContent = '/\p{Emoji_Presentation}/gu';
            document.getElementById('title').textContent = "Matches only Emoji's, The return string will only contain Emoji's";
            break;
        default:
            break;
    }
})