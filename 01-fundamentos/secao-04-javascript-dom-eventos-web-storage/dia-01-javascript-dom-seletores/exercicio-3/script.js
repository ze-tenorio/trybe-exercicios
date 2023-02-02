document.getElementById('header-container').style.backgroundColor = 'green';

const divColors = (index, color) => {
    const div = document.getElementsByTagName('div')[index]
    div.style.backgroundColor = color;
}

for (let index = 0; index <= 1; index += 1) {
    divColors(index, 'pink')
}

for (let index = 2; index <= 3; index++) {
    divColors(index, 'yellow')   
}

const firstDivs = document.querySelectorAll('.emergency-tasks h3');
const secondDivs = document.querySelectorAll('.no-emergency-tasks h3');
firstDivs[1].style.marginTop = '0px'
secondDivs[1].style.marginTop = '0px'

for (div in firstDivs) {
    firstDivs[div].style.backgroundColor = 'purple'
    secondDivs[div].style.backgroundColor = 'black'
}

