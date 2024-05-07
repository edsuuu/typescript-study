let a;
if (typeof a === 'undefined') a = 20;
console.log(a * 2);

export function createPerson (fistName: string, lastName?: string): {
    fistName: string;
    lastName?: string;
} {
    return {
        fistName,
        lastName,
    };
}

export function squareOf(x: unknown) {
    if (typeof x === 'number') return x * x;
    return null;
}

const squareOfTwoNumber = squareOf(2);
// const squareOfTwoString = squareOf('2');

if (squareOfTwoNumber === null) {
    console.log('Conta inválida');
} else {
    console.log(squareOfTwoNumber * 2);
}

// por exemplo se for fazer uma busca na base de dados, por exemplo algum dado do cliente, entao se nao tiver retorna null para nao dizer q foi um erro de busca ou algum erro no servidor
