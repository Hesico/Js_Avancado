const fs = require('fs');
const path = require('path');

const caminho = path.join(__dirname, 'dados.txt');

lerArquivo(caminho)
    .then(data => data.toString())
    .then(console.log);

console.log("Aqui");

function lerArquivo(path) {
    return new Promise(resolve => fs.readFile(path, (err,data) => resolve(data)))
}