function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
   nome: 'edsuuu',
   sobrenome: 'tesasdae',

   exibirNome(): void {
    console.log(`${this.nome} ${this.sobrenome}`);
  }
};

semRetorno('edsu', 'teste');

pessoa.exibirNome();

export { pessoa };
