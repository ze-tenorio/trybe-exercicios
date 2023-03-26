import { nanoid } from 'nanoid';
import './style.css';
import copy from 'clipboard-copy';

const passwordButton = document.getElementById('pass-btn');
const generatedPassword = document.getElementById('generated-pass');

passwordButton.addEventListener('click', () => {
    generatedPassword.innerHTML = nanoid();
});

generatedPassword.addEventListener('click', () => {
    copy(generatedPassword.innerHTML);
});
