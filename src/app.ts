let employee = {
    code: 10,
    name: 'John',
};

let funcionario: {codigo: number, nome: string} = {
    codigo: 10,
    nome: 'Jhon'
}

interface Funcionario {
    codigo: number,
    nome: string
}

let funcionario2: Funcionario = {
    codigo: 200,
    nome: 'Jhon'
}