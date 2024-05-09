type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type TemAltura = { altura: number };
type Pessoa = (TemNome & TemSobrenome & TemIdade) | TemAltura; //obrigatorio ( a & b & c ) ou pode ter | D 

const user: Pessoa = {
    nome: 'Edsu',
    sobrenome: 'teste',
    idade: 30,
};

console.log(user);

// module mode

export { user }
