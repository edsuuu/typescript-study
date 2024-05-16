//record
const objeto1: Record<string, string | number> = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: '30',
};

console.log(objeto1);

type PessoaProtocol = {
  nome?: string;
  sobrenome?: string;
  idade?: number;
};
// required
type PessoaRequired = PessoaProtocol;

//opcional
// type PessoaPartial = Partial<PessoaProtocol>;

// type PessoaReadonly = Readonly<PessoaProtocol>;

// type PessoaPick = Pick<PessoaRequired, 'nome' | 'sobrenome'>;

const objeto2: Required<PessoaRequired> = {
  nome: 'teste',
  sobrenome: 'testando',
  idade: 30,
};

console.log(objeto2);

// Extract e exclude
// type ABC = 'A' | 'B' | 'C';
// type CDE = 'C' | 'D' | 'B';
// type TipoExclude = Exclude<ABC, CDE>;
// type TipoExtract = Extract<ABC, CDE>;

type AccountMongo = {
  _id: string;
  name: string;
  age: number;
};

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
    id: string;

};

const AccountMongo: AccountMongo = {
  _id: 'daisdhuahd81031asd',
  name: 'Luiz',
  age: 30,
};

function mapAccout(accountMongo: AccountMongo): AccountApi {
  const { _id, ...accoutData } = accountMongo;
    return {...accoutData, id: _id};
}

const accountApi = mapAccout(AccountMongo);
console.log(accountApi);
console.log(accountApi);

export default 1;
