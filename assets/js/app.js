import {
    criptografar,
    descriptografar
} from './index.js';
import {
    validate
} from './validate.js';
import {
    attentionNotification,
    dangerNotification,
    successNotification,
    showNotification
} from './message.js';

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
    try {
        const word = getInput();
        resultText.innerText = criptografar(word);
        toggleAsideDisplay();
    } catch (err) {
        dangerNotification(err)
    }

}

function handleDecryptButtonClick() {
    try {
        const word = getInput();
        resultText.innerText = descriptografar(word);
        toggleAsideDisplay();
    } catch (err) {
        dangerNotification(err);
    }
}

function getInput() {
    try {
        const word = inputText.value;
        if (!validate(word)) {
            throw new Error("O texto inserido não é válido");
        }
        return word;

    } catch (err) {
        throw err;  
    }
}

async function handleCopyButtonClick() {
    try {
        await navigator.clipboard.writeText(resultText.innerText);
        successNotification(`O texto foi copiado`);
    } catch (err) {
        dangerNotification(`Erro ao copiar texto: ${err}`);
    }
}

function reset() {
    try {
        inputText.value = '';
        resultText.innerText = '';
        asideElementOff.style.display = "none";
        asideElementOn.style.display = "flex";
    } catch (err) {
        dangerNotification(err)
    }
}

function handleClearButtonClick(){
    try {
        reset()
        successNotification("Os campos foram limpos")
    } catch (err) {
        dangerNotification(err)
    }
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