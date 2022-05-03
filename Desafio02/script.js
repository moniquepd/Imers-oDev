//Desafio Conversor de Temperatura

function converterKelvin() {
  //cálculo de conversão paraKelvin
    //coletar valores do input
var valorCelsius = document.getElementById("valor");
var valor = valorCelsius.value;
var celsiusNumerico = parseFloat(valor)

//calculo
 var kelvinConvertido =  celsiusNumerico + 273.15
 
//Plotar Resultado
  var elementoKelvin =  document.getElementById("valorConvertido");
  var valorConvertido = "A temperatura em Kelvin é " + kelvinConvertido;
  elementoKelvin.innerHTML = valorConvertido
}
  
// para FAHR

function converterFahr() {
  var valorCelsius = document.getElementById("valor");
  var valor = valorCelsius.value;
  var celsiusNumerico = parseFloat(valor)
  
//Cálculo
   var fahrConvertido = (celsiusNumerico*1.8) + 32
//Plotar o resultado:
   var elementoFahr = document.getElementById("valorConvertido")
   var valorConvertido = "A temperatura em Fahrenheit é " + fahrConvertido;
   elementoFahr.innerHTML = valorConvertido
}