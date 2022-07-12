enum Prof {
  Atriz,
  Padeiro,

}
type Gente = {
  nome:string,
  idade:number,
  profissao: Prof

}
let pessoa1: Gente ={
    nome: 'maria',
    idade: 29,
    profissao: Prof.Atriz

}

let pessoa2: Gente = {
  nome: 'roberto',
    idade: 19,
    profissao: Prof.Padeiro

}

let pessoa3: Gente = {
  nome: 'laura',
    idade: 32,
    profissao: Prof.Atriz

}

let pessoa4: Gente = {
  nome: 'carlos',
    idade: 19,
    profissao: Prof.Padeiro

}
