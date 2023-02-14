let p = new Promise((fn) => {
    let cont = 0;
    while(cont < 11000){
        cont++;
    }
    fn("retorna algo")
}).then(valorRetornado => console.log(valorRetornado));

let outroCont = 0;

while(outroCont < 3){
    outroCont++;
    console.log("Aqui")
}