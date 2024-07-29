const inputbox = document.querySelector('#input-box');
const listcontainer = document.querySelector('#list-container');
const btn = document.querySelector('button');

function addtask() {
    if (inputbox.value === '') {
        alert('Task cannot be empty!');
        return;
    }
    const li = document.createElement('li');
    li.innerHTML = inputbox.value;
    listcontainer.appendChild(li);
    inputbox.value = '';
    savedata ();

    let span = document.createElement('span');
    span.innerHTML = '&times;';
    li.appendChild(span);
}

btn.addEventListener('click', addtask);

listcontainer.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        savedata ()
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        savedata ()
    }
}, false);

function savedata (){
    localStorage.setItem("data", listcontainer.innerHTML);
}

function showtask(){
    listcontainer.innerHTML = localStorage.getItem("data")
}
showtask();