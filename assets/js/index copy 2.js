const regras = { 'a': 'ai','e': 'enter', 'i': 'imes','o':'ober','u': 'ufat'};
function aplicarRegras(letra) {
    if(regras[letra]){
        return regras[letra]
    } 
    return letra;
}

function criptografar(palavra){
    const regras = { 'a': 'ai','e': 'enter', 'i': 'imes','o':'ober','u': 'ufat'};
    palavra.split("").map(aplicarRegras);
    const palavraCriptografada = palavra.split("").map(letra => regras[letra] || letra).join('');
    return palavraCriptografada;
}

function descriptografar(palavraCriptografada) {
    const regrasInversas = {'ai': 'a', 'enter': 'e', 'imes': 'i', 'ober': 'o', 'ufat': 'u'};
    
    //guarda o resultado final
    let resultado = '';

    //verifica o tamanho da palavra
    for(let i = 0; i < palavraCriptografada.length;){
        let validaLetra = false;

        for (const chave in regrasInversas) {

            console.log(palavraCriptografada.slice(i, i + chave.length)+` | i atual ${i} | tamanho da chave ${chave.length} | tamanho da chave mais o i ${i + chave.length}| valor da chave ${chave}`)
            if (palavraCriptografada.slice(i, i + chave.length) === chave) {
                resultado += regrasInversas[chave];
                i += chave.length;
                validaLetra = true;
                break;
            }
        }

        if(!validaLetra){
            resultado += palavraCriptografada[i];
            i++;
        }
    }

    return resultado;

}

console.log(criptografar('mamae'));
console.log(descriptografar('maimaienter'));
module.exports = { criptografar, descriptografar };