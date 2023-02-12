const fs = require('fs');
const path = require('path');

const caminho = path.join(__dirname, 'dados.txt');

// Assincrono

console.log("Inicio!!");
fs.readFile(caminho, exibirConteudo);
console.log("Fim!!");

function exibirConteudo (erro,dados) {
    console.log(dados.toString());
}

// Síncron1o

console.log("Inicio!!");
const file = fs.readFileSync(caminho);
console.log(file.toString());
console.log("Fim!!");