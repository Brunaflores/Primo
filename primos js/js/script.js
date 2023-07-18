
function Primo(n) {
    // se o número for menor que 2 não é primo
    if (n < 2) {
      return false;
    }
    // se o número for divisível por 2 e não for 2 não é primo
    if (n % 2 == 0 && n != 2) {
      return false;
    }
    // testa os divisores ímpares até a raiz quadrada do número
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
      // se o número for divisível por algum divisor não é primo
      if (n % i == 0) {
        return false;
      }
    }
    // se passou por todos os testes é primo!
    return true;
  }
  
 //testando
  console.log(Primo(13) ? "13 sim! é um número primo" : "13 não! não é um número primo!");