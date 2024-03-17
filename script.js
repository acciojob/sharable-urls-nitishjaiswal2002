// your code here
const form = document.getElementById('form');
const nameInput = document.getElementById('name');
const yearInput = document.getElementById('year');
const urlElement = document.getElementById('url');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = nameInput.value;
    const year = yearInput.value;

    let queryString = `?name=${name}&year=${year}`;
    urlElement.textContent = `https://localhost:8080/${queryString}`;
});
