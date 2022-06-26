const action = document.getElementById('submit')

action.addEventListener('click', (e) =>{
    const alphanumeric = /[a-zA-Z0-9]/g;
    let input = document.getElementById('input').value;
    document.getElementById('output').textContent = input.match(alphanumeric);
})