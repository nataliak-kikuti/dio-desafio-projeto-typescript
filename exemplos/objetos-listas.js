"use strict";
/**
 * A inferência de tipo também funciona para objetos.
 * Se estiver usando o visual studio code, tente passar o mouse por cima de um objeto não tipado e veja a mágica.
*/
const pessoa = {
    nome: 'Marian',
    idade: 28,
    profissao: 'desenvolvedor'
};
pessoa.idade = 22;
const andre = {
    nome: 'Andre',
    idade: 23,
    profissao: 'escritor'
};
const paula = {
    nome: 'Paula',
    idade: 23,
    profissao: 'Desenvolvedora'
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao[Profissao["JogadoraDeFutebol"] = 3] = "JogadoraDeFutebol";
    Profissao[Profissao["Desenvolvedor"] = 4] = "Desenvolvedor";
})(Profissao || (Profissao = {}));
const vanessa = {
    nome: 'Vanessa',
    idade: 44,
    profissao: Profissao.Atriz
};
const ana = {
    nome: 'Ana',
    idade: 44,
    profissao: Profissao.Atriz
};
const ricardo = {
    nome: 'Ricardo',
    idade: 34,
    materia: ["Algebra", "Programacao", "Banco de dados"]
};
function listar(lista) {
    for (const item of lista) {
        console.log(' ', item);
    }
}
listar(ricardo.materia);
