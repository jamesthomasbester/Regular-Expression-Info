const action = document.getElementById('submit')

var lastOption;

document.getElementById('gototest').addEventListener('click', () => {window.location = "#input"})
document.getElementById('gotodocu').addEventListener('click', () => {window.location = "#docu"})
document.getElementById('char').addEventListener('click', () => { document.getElementById('title').textContent = "Matches any vowes either uppercase or lowercase in the input string"; lastOption = "char" })
document.getElementById('asse').addEventListener('click', () => { document.getElementById('title').textContent = "filtering for only last word in the input string"; lastOption = "asse" });
document.getElementById('grou').addEventListener('click', () => { document.getElementById('title').textContent = "will filter for characters inbetween any single or double quotes"; lastOption = "grou" });
document.getElementById('quan').addEventListener('click', () => { document.getElementById('title').textContent = "filtering for any words/groups that are between 4-6 characters long "; lastOption = "quan" });
document.getElementById('unic').addEventListener('click', () => { document.getElementById('title').textContent = "Matches only Emoji's, The return string will only contain Emoji's"; lastOption = "unic" });
document.getElementById('setClass').addEventListener('click', () => { window.location = '#input'; lastOption = "char" })
document.getElementById('setAssert').addEventListener('click', () => { window.location = '#input'; lastOption = "asse"})
document.getElementById('setGroup').addEventListener('click', () => { window.location = '#input'; lastOption = "grou"})
document.getElementById('setQuant').addEventListener('click', () => { window.location = '#input'; lastOption = "quan"})
document.getElementById('setUni').addEventListener('click', () => { window.location = '#input'; lastOption = "unic"})

action.addEventListener('click', (e) =>{
    let input = document.getElementById('input').value;
    switch(lastOption){
        case 'char':
            document.getElementById('output').textContent = input.match(/[AEIOUYaeiouy]/g);
            document.getElementById('syntax').textContent = '/[AEIOUYaeiouy]/g';
        case 'asse':
            document.getElementById('output').textContent = input.match(/\w+$/);
            document.getElementById('syntax').textContent = `/\\w+$/`;
            break;
        case 'grou':
            document.getElementById('output').textContent = input.match(/(['"]).*?\1/g);
            document.getElementById('syntax').textContent = `/(['"]).*?\\1/g`;
            break;
        case 'quan':
            document.getElementById('output').textContent = input.match(/\b\w{4,6}\b/g);
            document.getElementById('syntax').textContent = '/\\b\\w{4,6}\\b/g';
            break;
        case 'unic':
            document.getElementById('output').textContent = input.match(/\p{Emoji_Presentation}/gu);
            document.getElementById('syntax').textContent = '/\\p{Emoji_Presentation}/gu';
            break;
        default:
            break;
    }
})