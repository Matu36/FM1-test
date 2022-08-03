'use strict'

function BinarioADecimal(num) {
  let suma = 0;
  var numReverse = num.split("").reverse().join ("");
  for (var i = 0; i < numReverse.length; i++) {
      suma = suma + numReverse[i] * 2 ** i};
  return suma;
} 

function DecimalABinario(num) {
  var numeroBinario = [];
    var numeroPorDividir = num;
    for (;num;) {
        numeroBinario.unshift(num%2)
        var num = Math.floor(num / 2)}
    return numeroBinario.join ("");
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}