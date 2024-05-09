// Array<T> - T []

export function multiplicarArgs(...args: Array<number>): number {
    return args.reduce((ac, valor) => ac * valor, 1)
}

export function concatenarString(...args: string[]): string {
    return args.reduce((ac, valor) => ac + valor)
}

export function toUpperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

const result = multiplicarArgs(1, 2, 3);

const concatenacao = concatenarString('a', 'b', 'c');

const upper = toUpperCase('a', 'b', 'c');


console.log(result, concatenacao, upper);
