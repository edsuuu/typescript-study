//tipo tuple 
const dadosCliente: [number, string] = [1, 'teste'];
const dadosCliente1: [number, string, string] = [1, 'teste', 'novo'];
const dadosCliente2: [number, string, string?] = [1, 'teste'];
const dadosCliente3: [number, string, ...string[]] = [1, 'teste'];

dadosCliente[0] = 100;
dadosCliente[1] = 'testando';

dadosCliente1[0] = 234;
dadosCliente1[1] = 'testando';


dadosCliente.pop();

console.log(dadosCliente);
console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);

//array readonly

const array: readonly string[] = ['teste', 'testando'];
const array2: ReadonlyArray<string> = ['teste', 'testando'];

console.log(array);
console.log(array2);
