"use strict";
let anyEstaDeVolta;
anyEstaDeVolta = 3;
anyEstaDeVolta = 'teste';
let stringTest = 'verificar';
stringTest = anyEstaDeVolta;
let unknownValor;
unknownValor = 3;
unknownValor = 'opa';
unknownValor = true;
unknownValor = 'vai sim';
let stringTest2 = 'agora vai';
// stringTest2 = unknownValor;
if (typeof unknownValor === 'string') {
    stringTest2 = unknownValor;
}
function jogaErro(erro, codigo) {
    throw { error: erro, code: codigo };
}
jogaErro('deu erro', 500);
