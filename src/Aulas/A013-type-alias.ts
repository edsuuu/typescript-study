type Idade = number;

type Pessoa = {
  nome: string;
  idade: Idade;
  salario: number;
  corPreferida?: CorPreferida;
};

type CorRGB = 'Vermelho' | 'Verde' | 'Azul';
type corCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';
type CorPreferida = CorRGB | corCMYK;

const user: Pessoa = {
  nome: 'Luiz',
  idade: 30,
  salario: 200_000, // 200000
};

export function setCorPreferida(user: Pessoa, cor: CorPreferida): Pessoa {
  return { ...user, corPreferida: cor };
}

console.log(setCorPreferida(user, 'Azul'));
