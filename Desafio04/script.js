//sorteio fora da função para ser executada somente quando a página é recarregada

var numeroSecreto = parseInt(Math.random() * 11);

var tentativa = 0;

function Chutar() {
  //Adicionar a primeira tentativa
  if (tentativa <= 3) {
    tentativa = tentativa + 1; //soma 1

    //Mensagens de resultado - referenciar h2
    var elementoResultado = document.getElementById("resultado");
    // identificar se a pessoa erra / acerta / resposta incorreta
    var chute = parseInt(document.getElementById("valor").value);
    // Função para trabalhar as respostas
    //em caso de acerto:
    if (chute == numeroSecreto) {
      elementoResultado.innerHTML = "Parabéns! Correto você está";
      //em caso de número fora pré definido:
    } else if (chute > 10 || chute < 0) {
      elementoResultado.innerHTML = `${chute} Válido não é. <br> Digitar um número entre 0 e 10 você deve!`;
      //em caso de número maior que o sorteado:
    } else if (chute > numeroSecreto) {
      elementoResultado.innerHTML = `Menor que ${chute} o número é.`;
      //em caso de número menor que o sorteado:
    } else if (chute < numeroSecreto) {
      elementoResultado.innerHTML = `Maior que  ${chute} o número é.`;
    }
  } // tentei colocar else if não deu certo. Ver depois
  if ((tentativa == 3) & (chute != numeroSecreto)) {
    var elementoResultado = document.getElementById("resultado");
    elementoResultado.innerHTML = `Esgotadas suas tentativas elas foram. ${numeroSecreto} o numero correto era.`;
  } else if (tentativa > 3) {
    var elementoResultado = document.getElementById("resultado");
    elementoResultado.innerHTML = `Atualizar a página você deve <br> para comigo novamente você jogar.`;
  }
}
// || ou <BR> ${numeroSecreto} o numero correto era.
// Criar nto aleatório:
// Math.random() - nro aleatório 0 a 0,99999999
// se multiplicar por 11 incluir o 10
// função parseInt transforma em nro inteiro, excluindo casas decimais
// parseInt(Math.random() * 11);

//DESAFIO
//nro de tentativas 3
// mensagem de erro e indicar se o nro secreto é maior ou menor
//