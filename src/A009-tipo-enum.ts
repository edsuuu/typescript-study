enum Cores {
    VERMELHO, // 0
    AZUL, // 1
    AMARELO, // 2
    //PARA ATRIBUIR UM VALOR ESPECIFICO

    ROXO = 200,
    VERDE = 300,
    ROSA = 400,
    BRANCO = 'BRANCO',

}

console.log(Cores);
console.log(Cores.AMARELO);
console.log(Cores[2]);
console.log(Cores[200]);
console.log(Cores.BRANCO);

function escolhaUmaCor(cor:Cores): void {
    console.log(Cores[cor]);

}

escolhaUmaCor(Cores.AMARELO);
