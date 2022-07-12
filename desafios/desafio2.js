"use strict";
var Prof;
(function (Prof) {
    Prof[Prof["Atriz"] = 0] = "Atriz";
    Prof[Prof["Padeiro"] = 1] = "Padeiro";
})(Prof || (Prof = {}));
let pessoa1 = {
    nome: 'maria',
    idade: 29,
    profissao: Prof.Atriz
};
let pessoa2 = {
    nome: 'roberto',
    idade: 19,
    profissao: Prof.Padeiro
};
let pessoa3 = {
    nome: 'laura',
    idade: 32,
    profissao: Prof.Atriz
};
let pessoa4 = {
    nome: 'carlos',
    idade: 19,
    profissao: Prof.Padeiro
};
