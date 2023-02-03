const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// - Copie esse arquivo e edite apenas ele;
//  - Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// - Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
//  - Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
const addClass = (event) => {
    const currentTech = document.querySelector('.tech');
    currentTech.classList.remove('tech');
    event.target.classList.add('tech');
}

firstLi.addEventListener('click', addClass);
secondLi.addEventListener('click', addClass);
thirdLi.addEventListener('click', addClass);

// - Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

const changeText = () => {
    const currentTech = document.querySelector('.tech');
    const newText = input.value;
    currentTech.innerHTML = newText;
}

const resetInput = (event) => {
    event.target.value = '';
}

input.addEventListener('keyup', changeText);

input.addEventListener('mouseup', resetInput)

// - Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
//  - Que tal redirecionar para seu portfólio?
const redirectPrtfl = () => {
    window.location.href = 'https://ze-tenorio.github.io/'
}

myWebpage.addEventListener('dblclick', redirectPrtfl)
// - Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
const changeColor = () => {
    myWebpage.style.color = '#2fc18c'
}

const returnColor = () => {
    myWebpage.style.color = 'white'
}

myWebpage.addEventListener('mouseover', changeColor)
myWebpage.addEventListener('mouseleave', returnColor)
// Segue abaixo um exemplo do uso de event.target:


const resetText = (event) => {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.