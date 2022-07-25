const pessoa = {
    nome: 'Mariana',
    idade: 23,
    profissao: 'Desenvolvedora'
}

pessoa.idade = 25;

const andre: {nome: string, idade: number, profissao: string} = {
    nome: 'Andre',
    idade: 12,
    profissao: 'Estudante'
}
    
const paula: {nome: string, idade: number, profissao: string} = {
    nome: 'Paula',
    idade: 27,
    profissao: 'desenvolvedora'
}

enum Profissao {
    Professora,
    Atriz,
    Desenvolvedora,
    JogadoraDeFutebol
}

interface Estudante extends Pessoa {
    materias: string[]
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao
}

const vanessa: Pessoa = {
    nome: 'Vanessa',
    idade: 21,
    profissao: Profissao.Desenvolvedora
}

const maria: Pessoa = {
    nome: 'Maria',
    idade: 21,
    profissao: Profissao.Desenvolvedora
}

const jessica: Estudante = {
    nome: 'Jessica',
    idade: 26,
    profissao: Profissao.Desenvolvedora,
    materias: ['Matemática discreta', 'Programação']
}

const monica: Estudante = {
    nome: 'Monica',
    idade: 26,
    materias: ['Matemática discreta', 'Programação']
}

function listar(lista: string[]) {
    for (const item of lista){
        console.log('- ', item);
    }
} 

listar(monica.materias)