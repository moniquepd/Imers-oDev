//Criar conversor de Real para Dólar, Euro, Bitcoin - adicional Libra e

//PARA DÓLAR
function converterDolar() {
  var elementoReal = document.getElementById("valor");
  var valorReal = elementoReal.value;
  var realNumerico = parseFloat(valorReal).toFixed(2);

  var valorEmDolar = (realNumerico / 5.1).toFixed(2);
  // console.log(valoremDolar);

  //plotar Resultado
  var elementoDolarConvertido = document.getElementById("valorConvertido");

  var valorConvertido = `R$ ${realNumerico} equivale a $ ${valorEmDolar}`;

  elementoDolarConvertido.innerHTML = valorConvertido;
}

//PARA EURO
function converterEuro() {
  var elementoReal = document.getElementById("valor");
  var valorReal = elementoReal.value;
  var realNumerico = parseFloat(valorReal).toFixed(2);

  var valorEmEuro = (realNumerico / 5.6).toFixed(2);

  //plotar Resultado
  var elementoEuroConvertido = document.getElementById("valorConvertido");

  var valorConvertido = `R$ ${realNumerico} equivale a € ${valorEmEuro}`;

  elementoEuroConvertido.innerHTML = valorConvertido;
}

//PARA LIBRA
function converterLibra() {
  var elementoReal = document.getElementById("valor");
  var valorReal = elementoReal.value;
  var realNumerico = parseFloat(valorReal).toFixed(2);

  var valorEmLibra = (realNumerico / 6.62).toFixed(2);

  //plotar Resultado
  var elementoLibraConvertido = document.getElementById("valorConvertido");

  var valorConvertido = `R$ ${realNumerico} equivale a £ ${valorEmLibra}`;

  elementoLibraConvertido.innerHTML = valorConvertido;
}

//PARA Bitcoin
function converterBitcoin() {
  var elementoReal = document.getElementById("valor");
  var valorReal = elementoReal.value;
  var realNumerico = parseFloat(valorReal).toFixed(2);

  var valorEmBitcoin = (realNumerico / 196406.98).toFixed(10);

  //plotar Resultado
  var elementoBitcoinConvertido = document.getElementById("valorConvertido");

  var valorConvertido = `R$ ${realNumerico} equivale a BTC ${valorEmBitcoin}`;

  elementoBitcoinConvertido.innerHTML = valorConvertido;
}