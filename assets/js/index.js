import {
    validate
} from './validate.js';
import {
    dangerNotification
} from './message.js';

function criptografar(palavra) {

    try {
        if(!validate(palavra)){
            throw new Error("O texto inserido não é válido");
        }
        const regras = {
            'a': 'ai',
            'e': 'enter',
            'i': 'imes',
            'o': 'ober',
            'u': 'ufat'
        };
        const palavraCriptografada = palavra.split("").map(letra => regras[letra] || letra).join('');
        return palavraCriptografada;
    } catch (err) {
        dangerNotification("Não foi possivel criptografar");
    }

}

function descriptografar(palavraCriptografada) {

    try {
        if(!validate(palavraCriptografada)){
            throw new Error("O texto inserido não é válido");
        }
        const regrasInversas = {
            'ai': 'a',
            'enter': 'e',
            'imes': 'i',
            'ober': 'o',
            'ufat': 'u'
        };

        let resultado = '';
        
        for (let i = 0; i < palavraCriptografada.length;) {
            let validaLetra = false;

            for (const chave in regrasInversas) {
                if (palavraCriptografada.slice(i, i + chave.length) === chave) {
                    resultado += regrasInversas[chave];
                    i += chave.length;
                    validaLetra = true;
                    break;
                }
            }

            if (!validaLetra) {
                resultado += palavraCriptografada[i];
                i++;
            }
        }
        return resultado;
    } catch (err) {
        throw err;    
    }
}


export {
    criptografar,
    descriptografar
};