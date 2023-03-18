import './style.css';

const dogButton = document.querySelector('#dog-btn');
const catButton = document.querySelector('#cat-btn');
const supriseButton = document.querySelector('#suprise-btn');
const petImage = document.querySelector('#random-pet-image')

dogButton.addEventListener('click', (event) => {
    event.preventDefault();
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(result => result.json())
        .then(data => petImage.src = data.message)
})

catButton.addEventListener('click', (event) => {
    event.preventDefault();
    fetch('https://aws.random.cat/meow')
        .then(result => result.json())
        .then(data => petImage.src = data.file)
})

supriseButton.addEventListener('click', (event) => {
    event.preventDefault();
    Promise.any([
        fetch('https://aws.random.cat/meow'), 
        fetch('https://dog.ceo/api/breeds/image/random')
    ])
        .then(result => result.json())
        .then(data => {
            const petImageSrc = data.message || data.file;
            petImage.src = petImageSrc;
        })
})