if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'CampoMinado'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'CampoMinado'.");
}
var CampoMinado = function (_, Kotlin) {
  'use strict';
  var ensureNotNull = Kotlin.ensureNotNull;
  var toString = Kotlin.toString;
  var equals = Kotlin.equals;
  var Random = Kotlin.kotlin.random.Random;
  var equals_0 = Kotlin.kotlin.text.equals_igcy3c$;
  function abrirCelula(pos) {
    var x = document.getElementById(pos);
    if (equals(toString(ensureNotNull(x).textContent), '*'))
      x.innerHTML = '<img class="mina" src="img/mina.png"/>';
    if (equals(toString(ensureNotNull(x).textContent), '1'))
      ensureNotNull(x).className = 'clicked1';
    if (equals(toString(ensureNotNull(x).textContent), '2'))
      ensureNotNull(x).className = 'clicked2';
    if (equals(toString(ensureNotNull(x).textContent), '3'))
      ensureNotNull(x).className = 'clicked3';
    if (equals(toString(ensureNotNull(x).textContent), '4'))
      ensureNotNull(x).className = 'clicked4';
    if (equals(toString(ensureNotNull(x).textContent), '5'))
      ensureNotNull(x).className = 'clicked5';
    if (equals(toString(ensureNotNull(x).textContent), '6'))
      ensureNotNull(x).className = 'clicked6';
  }
  function main() {
    var k = 0;
    while (k < 10) {
      var mina = Random.Default.nextInt_vux9f0$(1, 36);
      var caixa = document.getElementById(mina.toString());
      if (!equals_0(caixa != null ? caixa.textContent : null, '*')) {
        ensureNotNull(caixa).innerHTML = '*';
        k = k + 1 | 0;
      }
    }
    for (var i = 1; i <= 36; i++) {
      var caixa_0 = document.getElementById(i.toString());
      var caixa1 = document.getElementById((i - 7 | 0).toString());
      var caixa2 = document.getElementById((i - 6 | 0).toString());
      var caixa3 = document.getElementById((i - 5 | 0).toString());
      var caixa4 = document.getElementById((i - 1 | 0).toString());
      var caixa5 = document.getElementById((i + 1 | 0).toString());
      var caixa6 = document.getElementById((i + 5 | 0).toString());
      var caixa7 = document.getElementById((i + 6 | 0).toString());
      var caixa8 = document.getElementById((i + 7 | 0).toString());
      var numMinas = 0;
      if (!equals_0(caixa_0 != null ? caixa_0.textContent : null, '*')) {
        if (i === 1) {
          if (equals_0(caixa5 != null ? caixa5.textContent : null, '*'))
            numMinas = numMinas + 1 | 0;
          if (equals_0(caixa7 != null ? caixa7.textContent : null, '*'))
            numMinas = numMinas + 1 | 0;
          if (equals_0(caixa8 != null ? caixa8.textContent : null, '*'))
            numMinas = numMinas + 1 | 0;
        }
         else if (i === 7 || i === 13 || i === 19 || i === 25) {
          if (equals_0(caixa2 != null ? caixa2.textContent : null, '*'))
            numMinas = numMinas + 1 | 0;
          if (equals_0(caixa3 != null ? caixa3.textContent : null, '*'))
            numMinas = numMinas + 1 | 0;
          if (equals_0(caixa5 != null ? caixa5.textContent : null, '*'))
            numMinas = numMinas + 1 | 0;
          if (equals_0(caixa7 != null ? caixa7.textContent : null, '*'))
            numMinas = numMinas + 1 | 0;
          if (equals_0(caixa8 != null ? caixa8.textContent : null, '*'))
            numMinas = numMinas + 1 | 0;
        }
         else if (i === 6) {
          if (equals_0(caixa4 != null ? caixa4.textContent : null, '*'))
            numMinas = numMinas + 1 | 0;
          if (equals_0(caixa6 != null ? caixa6.textContent : null, '*'))
            numMinas = numMinas + 1 | 0;
          if (equals_0(caixa7 != null ? caixa7.textContent : null, '*'))
            numMinas = numMinas + 1 | 0;
        }
         else if (i === 12 || i === 18 || i === 24 || i === 30) {
          if (equals_0(caixa1 != null ? caixa1.textContent : null, '*'))
            numMinas = numMinas + 1 | 0;
          if (equals_0(caixa2 != null ? caixa2.textContent : null, '*'))
            numMinas = numMinas + 1 | 0;
          if (equals_0(caixa4 != null ? caixa4.textContent : null, '*'))
            numMinas = numMinas + 1 | 0;
          if (equals_0(caixa6 != null ? caixa6.textContent : null, '*'))
            numMinas = numMinas + 1 | 0;
          if (equals_0(caixa7 != null ? caixa7.textContent : null, '*'))
            numMinas = numMinas + 1 | 0;
        }
         else if (i === 32 || i === 33 || i === 34 || i === 35) {
          if (equals_0(caixa1 != null ? caixa1.textContent : null, '*'))
            numMinas = numMinas + 1 | 0;
          if (equals_0(caixa2 != null ? caixa2.textContent : null, '*'))
            numMinas = numMinas + 1 | 0;
          if (equals_0(caixa3 != null ? caixa3.textContent : null, '*'))
            numMinas = numMinas + 1 | 0;
          if (equals_0(caixa4 != null ? caixa4.textContent : null, '*'))
            numMinas = numMinas + 1 | 0;
          if (equals_0(caixa5 != null ? caixa5.textContent : null, '*'))
            numMinas = numMinas + 1 | 0;
        }
         else if (i === 31) {
          if (equals_0(caixa2 != null ? caixa2.textContent : null, '*'))
            numMinas = numMinas + 1 | 0;
          if (equals_0(caixa3 != null ? caixa3.textContent : null, '*'))
            numMinas = numMinas + 1 | 0;
          if (equals_0(caixa5 != null ? caixa5.textContent : null, '*'))
            numMinas = numMinas + 1 | 0;
        }
         else if (i === 36) {
          if (equals_0(caixa1 != null ? caixa1.textContent : null, '*'))
            numMinas = numMinas + 1 | 0;
          if (equals_0(caixa2 != null ? caixa2.textContent : null, '*'))
            numMinas = numMinas + 1 | 0;
          if (equals_0(caixa4 != null ? caixa4.textContent : null, '*'))
            numMinas = numMinas + 1 | 0;
        }
         else {
          if (equals_0(caixa1 != null ? caixa1.textContent : null, '*'))
            numMinas = numMinas + 1 | 0;
          if (equals_0(caixa2 != null ? caixa2.textContent : null, '*'))
            numMinas = numMinas + 1 | 0;
          if (equals_0(caixa3 != null ? caixa3.textContent : null, '*'))
            numMinas = numMinas + 1 | 0;
          if (equals_0(caixa4 != null ? caixa4.textContent : null, '*'))
            numMinas = numMinas + 1 | 0;
          if (equals_0(caixa5 != null ? caixa5.textContent : null, '*'))
            numMinas = numMinas + 1 | 0;
          if (equals_0(caixa6 != null ? caixa6.textContent : null, '*'))
            numMinas = numMinas + 1 | 0;
          if (equals_0(caixa7 != null ? caixa7.textContent : null, '*'))
            numMinas = numMinas + 1 | 0;
          if (equals_0(caixa8 != null ? caixa8.textContent : null, '*'))
            numMinas = numMinas + 1 | 0;
        }
        ensureNotNull(caixa_0).innerHTML = numMinas.toString();
      }
    }
  }
  _.abrirCelula = abrirCelula;
  _.main = main;
  main();
  Kotlin.defineModule('CampoMinado', _);
  return _;
}(typeof CampoMinado === 'undefined' ? {} : CampoMinado, kotlin);
