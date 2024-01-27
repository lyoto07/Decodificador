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
    
    // Utiliza expressão regular para buscar correspondências no dicionário inverso
    return palavraCriptografada.replace(/ai|enter|imes|ober|ufat/g, match => regrasInversas[match] || match);
}

console.log(criptografar('mamae'));
console.log(descriptografar('maimaienter'));
module.exports = { criptografar, descriptografar };