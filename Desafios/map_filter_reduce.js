Array.prototype.meuMap = function (fn) {
    const novoArray = [];

    for(let i = 0; i < this.length; i++) {
        novoArray.push(fn(this[i], i, this));
    }
    return novoArray;
}

Array.prototype.meuFilter = function (fn) {
    const novoArray = [];

    for(let i = 0; i < this.length; i++) {
       if(fn(this[i], i, this)) novoArray.push(this[i]);
    }
    return novoArray;
}

Array.prototype.meuReduce = function (fn, valorInicial) {
    
    let [acumuladorAtual, interacaoInicial] = valorInicial === 0 || valorInicial 
    ? [valorInicial, 0] : [this[0], 1];

    for(let i = interacaoInicial; i < this.length; i++) {
        acumuladorAtual = fn(acumuladorAtual,this[i], i, this);
    }

    return acumuladorAtual;
}

console.log([2,3,5,8,7].meuMap(e => e*2));
console.log([2,3,5,8,7].meuFilter(e => e > 3));
console.log([2,3,5,8,7].meuReduce(somaQuantidadeMedia,{soma: 0, quantidade : 0, media: 0}));
console.log([2,3,5,8,7].meuReduce((acc,el) => acc + el));

function somaQuantidadeMedia (acc, el) {
    const novaSoma = acc.soma + el;
    const novaQuantidade = acc.quantidade + 1;
    return {
        soma: novaSoma,
        quantidade : novaQuantidade,
        media: novaSoma / novaQuantidade
    }
}
