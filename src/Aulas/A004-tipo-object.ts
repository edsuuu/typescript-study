const objectA: {
    readonly chaveA: string;
    chaveB: string;
    chaveC?: string;
    [key: string]: unknown;
} = {
  chaveA: 'A',
  chaveB: 'B',
};

// objectA.chaveA = 'Outra coisa'; chave a nao pode ser alterada com readonly
objectA.chaveC = 'nova coisa';
objectA.chaveD = 'nova coisa';
