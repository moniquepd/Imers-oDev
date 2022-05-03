//Imersão DEV
//Alterar imagem de fundo
//Criar programa que calcule a média (um cálculo para soma e outro para divisão)
//Condição de aprovação nota >=6
//Formatação dos textos
//Plotar os resultados na tela


function calculoMedia() {
  //cálculo da média
      //coletar dados do input e criar variáveis:
var notaBimestre1 = document.getElementById("nota1");
  var nota1 = notaBimestre1.value
  var nota1num = parseFloat(nota1)
  
var notaBimestre2 = document.getElementById("nota2"); 
  var nota2 = notaBimestre2.value
  var nota2num = parseFloat(nota2)
  
var notaBimestre3 = document.getElementById("nota3"); 
  var nota3 = notaBimestre3.value
  var nota3num = parseFloat(nota3)
  
var notaBimestre4 = document.getElementById("nota4");
  var nota4 = notaBimestre4.value
  var nota4num = parseFloat(nota4)
  
//calculo da média (desafio separa as contas)
  var somaNotas = nota1num + nota2num + nota3num + nota4num
  var media = somaNotas / 4
  
  //Plotar o resultado:
  //Criar 2 variáveis:
  //Pegar o elemento do html "Total MÉDIA"
  var elementoMedias = document.getElementById("totalMedia");
  
  //Crie o texto que deseja que seja plotado:
  //Condição de aprovação: Nota >=6
  
  if ( media>= 6 )
    var totalMedia = "Parabéns, você está aprovado. Sua média é de " + media;
  
  else
     var totalMedia = "Infelizmente você foi reprovado. Sua média é de " + media;

  //colocar variável no html
 elementoMedias.innerHTML = totalMedia;
}