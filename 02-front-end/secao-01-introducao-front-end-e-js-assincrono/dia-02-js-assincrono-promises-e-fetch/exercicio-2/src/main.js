import './style.css'

const sortBtn = document.getElementById('sort-btn');
const heroPhoto = document.getElementById('hero-photo');
const heroName = document.getElementById('hero-name');

const BASE_URL = `https://superheroapi.com/api.php/6221998501156546`

const getID = () => Math.round(Math.random() * 1000);

sortBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const heroID = getID();
    fetch(`${BASE_URL}/${heroID}`)
        .then(response => response.json())
        .then(data => {
            heroPhoto.src = data.image.url;
            heroName.innerHTML = data.name;
        })
        // .catch(error => window.alert(`Herói não achado: ${error.message}`));
        .catch((error) => window.alert(`ID de Herói Inválido: ${error.message}`));
});



