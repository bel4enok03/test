const button = document.querySelector ('#btn');
const par = document.querySelector ('#par');

button.addEventListener('click', getDogs);

async function getDogs() {
    const res = await fetch('https://dog.ceo/api/breeds/image/random');
    const resRecived = await res.json();
    showImages(resRecived)
}

function showImages(resRecived){
    par.innerHTML = `<img src=${resRecived.message} width="300px" alt="dog">`
}