/* eslint-disable */

let nome: string = 'Luiz'; // qualquer tipo de string '' "" ``
let idade: number = 30; // 10, 1.57, -5.55, 0b1010,
let aldulto: boolean = true; // true ou false
let simbolo: symbol = Symbol('qualque=symbol'); //symbol
// let big: bigint = 10n; bigint

// Arrays
let arrayDeNumeros: Array<number> = [1, 2, 3];
let arrayDeNumeros2: number[] = [1, 2, 3];

let arrayDeStrings: Array<string> = ['a', 'b'];
let arrayDeStrings2: string[] = ['a', 'b'];

let arrayDeBooleanos: Array<boolean> = [true, false, true];
let arrayDeBooleanos2: boolean[] = [true, false, true];

let arrayDeObjetos: Array<object> = [{ nome: 'Luiz' }, { nome: 'Maria' }];
let arrayDeObjetos2: object[] = [{ nome: 'Luiz' }, { nome: 'Maria' }];

let arrayDeAny: Array<any> = [1, 'a', true, [], {}];
let arrayDeAny2: any[] = [1, 'a', true, [], {}];

// Objetos
let pessoa: {nome: string, idade: number, adulto?: boolean} = {
   nome: 'edsu',
   idade: 30,
};

console.log(pessoa.nome);

// functions

function soma(x: number, y: number):number {
   return x + y;

}

const soma2: (x:number, y:number) => number = (x, y) => x + y;

