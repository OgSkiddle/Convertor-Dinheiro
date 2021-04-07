// Declaração da função Converter Moeda
function currencyConverter() {
  // Declação do tipo de moeda que irá ser convertida
  var currencyTypeFrom = document.querySelector('.currency-type-from').value;
  // Declaração do valor que irá ser convertido
  var currencyValueFrom = Number(document.querySelector('#currency-value-from').value);
  // Declaração do tipo de moeda desejada para conversão
  var currencyTypeTo = document.querySelector('.currency-type-to').value;
  // Cálculo da conversão baseado na escolha do tipo de moeda
  if (currencyTypeFrom == "brl") {
	  
    if (currencyTypeTo == "usd") {
      convertedCurrency = currencyValueFrom / 5.61;
    }
    else if (currencyTypeTo == "eur") {
      convertedCurrency = currencyValueFrom / 6.66;
    }
    else {
      convertedCurrency = currencyValueFrom;
    }
  }
  else if (currencyTypeFrom == "usd") {
    if (currencyTypeTo == "brl") {
      convertedCurrency = currencyValueFrom * 5.61;
    }
    else if (currencyTypeTo == "eur") {
      convertedCurrency = currencyValueFrom / 1.17;
    }
    else {
      convertedCurrency = currencyValueFrom;
    }
  }
  else {
    if (currencyTypeTo == "brl") {
      convertedCurrency = currencyValueFrom * 6.66;
    }
    else if (currencyTypeTo == "usd") {
      convertedCurrency = currencyValueFrom * 1.17;
    }
    else {
      convertedCurrency = currencyValueFrom;
    }
  }
  // Impressão do resultado da conversão para o utilizador
  document.querySelector('#currency-value-to').innerHTML = convertedCurrency.toFixed(2);
};
// Declaração da variável "valor convertido"
var convertedCurrency = 0;
// Impressão do resultado da conversão para o utilizador
document.querySelector('#currency-value-to').innerHTML = convertedCurrency.toFixed(2);
// Declaração do botão Converter
const converterBotton = document.querySelector('button');
// Ativação da função Converter Moeda por meio do clique no botão
converterBotton.onclick = currencyConverter;
