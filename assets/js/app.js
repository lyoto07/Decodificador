import { criptografar, descriptografar } from './index.js'

const btnEncrypt = document.getElementById('criptografar');
const btnDecrypt = document.getElementById('descriptografar');
const btnToCopy = document.getElementById('copiar');
const btnToClear = document.getElementById('clear');
const inputText = document.getElementById('inputText');
const resultText = document.getElementById('resultText');

const container = document.getElementById("textarea_container");
const asideElementOff = document.getElementById('aside_off');
const asideElementOn = document.getElementById('aside_on');

function handleKeyUpEvent() {
    if (inputText.value === '') {
        reset();
    }
}

function handleEncryptButtonClick() {
    const texto = criptografar(getInput());
    resultText.innerHTML = texto;
    toggleAsideDisplay();
}

function handleDecryptButtonClick() {
    resultText.innerText = descriptografar(getInput());
    toggleAsideDisplay();
}

function handleCopyButtonClick() {
    copyText()
}

function handleClearButtonClick() {
    reset()
}

function getInput() {
    return inputText.value;
}

async function copyText() {
    try {
        await navigator.clipboard.writeText(resultText.innerText);

        alert('Texto copiado: ' + resultText.innerText);
    } catch (err) {
        console.error('Erro ao copiar texto: ', err);
    }
}

function reset() {
    inputText.value = '';
    resultText.innerText = '';
    asideElementOff.style.display = "none"
    asideElementOn.style.display = "flex"
}

inputText.addEventListener('keyup', handleKeyUpEvent);
btnEncrypt.addEventListener('click', handleEncryptButtonClick);
btnDecrypt.addEventListener('click', handleDecryptButtonClick);
btnToCopy.addEventListener('click', handleCopyButtonClick);
btnToClear.addEventListener('click', handleClearButtonClick);

function toggleAsideDisplay() {
    asideElementOff.style.display = "flex";
    asideElementOn.style.display = "none";
}
