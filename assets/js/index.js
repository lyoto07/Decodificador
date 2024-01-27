function criptografar(palavra){
    const regras = { 'a': 'ai','e': 'enter', 'i': 'imes','o':'ober','u': 'ufat'};
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

export { criptografar, descriptografar };
