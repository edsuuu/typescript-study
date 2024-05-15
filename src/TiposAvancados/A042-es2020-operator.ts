//Encadeamento opcional e Operador de Coalescencia nula
type Documento = {
    titulo: string,
    texto: string,
    data?: Date
}

const documento: Documento = {
    titulo: 'O titulo',
    texto: 'O texto',
    // data: new Date()
    data: new Date()
}

console.log(documento.data?.toDateString() ?? 'Não existe data.');
