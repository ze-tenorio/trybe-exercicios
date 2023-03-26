import './style.css';
import validator from 'validator';

const input = document.querySelector('input');
const button = document.querySelector('button');
const select = document.querySelector('select');
const validation = document.querySelector('p');

button.addEventListener('click', (e) => {
    e.preventDefault();
    const check = input.value;
    const defText = 'A validação retornou';
    if (select.value === 'email') {
        validation.innerHTML = `${defText} ${validator.isEmail(check)}`;
    }
    if (select.value === 'mobile') {
        validation.innerHTML = `${defText} ${validator.isMobilePhone(check, 'pt-BR')}`;
    }
});
