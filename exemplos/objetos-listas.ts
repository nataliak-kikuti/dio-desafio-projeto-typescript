/**
 * A inferência de tipo também funciona para objetos.
 * Se estiver usando o visual studio code, tente passar o mouse por cima de um objeto não tipado e veja a mágica.
*/

const pessoa = {
  nome:'Marian',
  idade: 28,
  profissao: 'desenvolvedor'
}

pessoa.idade = 22;


const andre : {nome:string, idade:number, profissao:string} = {
  nome:'Andre',
  idade: 23,
  profissao: 'escritor'

}

const paula : {nome:string, idade:number, profissao:string} = {
  nome:'Paula',
  idade: 23,
  profissao: 'Desenvolvedora'

}

enum Profissao {
  Professora, 
  Atriz,
  Desenvolvedora,
  JogadoraDeFutebol,
  Desenvolvedor
}

interface Pessoa{
  nome: string,
  idade: number,
  profissao?: Profissao,
}

interface Estudante extends Pessoa{
  materia:string[  ]
}

const vanessa: Pessoa = {
  nome: 'Vanessa',
  idade:44,
  profissao:Profissao.Atriz

}

const ana: Pessoa = {
  nome: 'Ana',
  idade:44,
  profissao:Profissao.Atriz

}


const ricardo: Estudante = {
  nome:'Ricardo',
  idade: 34,
  
  materia:["Algebra","Programacao","Banco de dados"]

}


function listar(lista:string[]){
  for(const item of lista){
    console.log(' ', item)
  }

}

listar(ricardo.materia);