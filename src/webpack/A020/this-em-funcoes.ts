export function funcao(this:Date, argumento: string, age: number): void {
    console.log(this);
    console.log(argumento);
    console.log(age);

}

funcao.call(new Date(), 'nome', 30);
funcao.apply(new Date(), ['nome', 30]);
