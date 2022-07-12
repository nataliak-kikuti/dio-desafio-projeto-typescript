  /**
 * Quando tipamos podemos passar mais de um tipo, como no caso abaixo em que cada parâmetro contém o tipo input, que é igual aos tipos number ou string
 * No exemplo abaixo também ocorre um tratamento interno na função para que ela lide com os diferentes tipos de cada parâmetro
*/
  
// Também é possível criar tipos! E combinar tipos com esses tipos!
  type input = number | string;
  
  function soma(input1:input, input2:input){
    if(typeof input1 === 'string' || typeof input2 === 'string'){
      return input1.toString() + input2.toString(); 
    }else{
    return input1 + input2; 
    }
  }

  // Exemplos de uma chamada para essa função, um com strings e um com números
  console.log(soma(1,3));
  console.log(soma("Ola",", tudo bem?"));
  console.log(soma('1','3'))