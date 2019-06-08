if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'CampoMinado'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'CampoMinado'.");
}
var CampoMinado = function (_, Kotlin) {
  'use strict';
  var throwCCE = Kotlin.throwCCE;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var Random = Kotlin.kotlin.random.Random;
  var equals = Kotlin.kotlin.text.equals_igcy3c$;
  function descobrir(pos) {
    var tmp$;
    var x = Kotlin.isType(tmp$ = document.getElementById(pos), HTMLTableCellElement) ? tmp$ : throwCCE();
    println(x.textContent);
  }
  function abrir(pos) {
    var tmp$;
    var x = Kotlin.isType(tmp$ = document.getElementById(pos), HTMLTableCellElement) ? tmp$ : throwCCE();
    println(x.textContent);
  }
  function main() {
    for (var j = 1; j <= 36; j++) {
      var caixa = document.getElementById(j.toString());
      ensureNotNull(caixa).innerHTML = '0';
    }
    var k = 0;
    while (k < 10) {
      var mina = Random.Default.nextInt_vux9f0$(1, 36);
      var caixa_0 = document.getElementById(mina.toString());
      if (!equals(caixa_0 != null ? caixa_0.textContent : null, '*')) {
        ensureNotNull(caixa_0).innerHTML = '*';
        k = k + 1 | 0;
      }
    }
    for (var i = 1; i <= 36; i++) {
      var caixa_1 = document.getElementById(i.toString());
      var caixa1 = document.getElementById((i - 7 | 0).toString());
      var caixa2 = document.getElementById((i - 6 | 0).toString());
      var caixa3 = document.getElementById((i - 5 | 0).toString());
      var caixa4 = document.getElementById((i - 1 | 0).toString());
      var caixa5 = document.getElementById((i + 1 | 0).toString());
      var caixa6 = document.getElementById((i + 5 | 0).toString());
      var caixa7 = document.getElementById((i + 6 | 0).toString());
      var caixa8 = document.getElementById((i + 7 | 0).toString());
      var numMinas = 0;
      if (!equals(caixa_1 != null ? caixa_1.textContent : null, '*')) {
        if (i === 1) {
          if (equals(caixa5 != null ? caixa5.textContent : null, '*'))
            numMinas = numMinas + 1 | 0;
          if (equals(caixa7 != null ? caixa7.textContent : null, '*'))
            numMinas = numMinas + 1 | 0;
          if (equals(caixa8 != null ? caixa8.textContent : null, '*'))
            numMinas = numMinas + 1 | 0;
        }
         else if (i === 7 || i === 13 || i === 19 || i === 25) {
          if (equals(caixa2 != null ? caixa2.textContent : null, '*'))
            numMinas = numMinas + 1 | 0;
          if (equals(caixa3 != null ? caixa3.textContent : null, '*'))
            numMinas = numMinas + 1 | 0;
          if (equals(caixa5 != null ? caixa5.textContent : null, '*'))
            numMinas = numMinas + 1 | 0;
          if (equals(caixa7 != null ? caixa7.textContent : null, '*'))
            numMinas = numMinas + 1 | 0;
          if (equals(caixa8 != null ? caixa8.textContent : null, '*'))
            numMinas = numMinas + 1 | 0;
        }
         else if (i === 6) {
          if (equals(caixa4 != null ? caixa4.textContent : null, '*'))
            numMinas = numMinas + 1 | 0;
          if (equals(caixa6 != null ? caixa6.textContent : null, '*'))
            numMinas = numMinas + 1 | 0;
          if (equals(caixa7 != null ? caixa7.textContent : null, '*'))
            numMinas = numMinas + 1 | 0;
        }
         else if (i === 12 || i === 18 || i === 24 || i === 30) {
          if (equals(caixa1 != null ? caixa1.textContent : null, '*'))
            numMinas = numMinas + 1 | 0;
          if (equals(caixa2 != null ? caixa2.textContent : null, '*'))
            numMinas = numMinas + 1 | 0;
          if (equals(caixa4 != null ? caixa4.textContent : null, '*'))
            numMinas = numMinas + 1 | 0;
          if (equals(caixa6 != null ? caixa6.textContent : null, '*'))
            numMinas = numMinas + 1 | 0;
          if (equals(caixa7 != null ? caixa7.textContent : null, '*'))
            numMinas = numMinas + 1 | 0;
        }
         else if (i === 32 || i === 33 || i === 34 || i === 35) {
          if (equals(caixa1 != null ? caixa1.textContent : null, '*'))
            numMinas = numMinas + 1 | 0;
          if (equals(caixa2 != null ? caixa2.textContent : null, '*'))
            numMinas = numMinas + 1 | 0;
          if (equals(caixa3 != null ? caixa3.textContent : null, '*'))
            numMinas = numMinas + 1 | 0;
          if (equals(caixa4 != null ? caixa4.textContent : null, '*'))
            numMinas = numMinas + 1 | 0;
          if (equals(caixa5 != null ? caixa5.textContent : null, '*'))
            numMinas = numMinas + 1 | 0;
        }
         else if (i === 31) {
          if (equals(caixa2 != null ? caixa2.textContent : null, '*'))
            numMinas = numMinas + 1 | 0;
          if (equals(caixa3 != null ? caixa3.textContent : null, '*'))
            numMinas = numMinas + 1 | 0;
          if (equals(caixa5 != null ? caixa5.textContent : null, '*'))
            numMinas = numMinas + 1 | 0;
        }
         else if (i === 36) {
          if (equals(caixa1 != null ? caixa1.textContent : null, '*'))
            numMinas = numMinas + 1 | 0;
          if (equals(caixa2 != null ? caixa2.textContent : null, '*'))
            numMinas = numMinas + 1 | 0;
          if (equals(caixa4 != null ? caixa4.textContent : null, '*'))
            numMinas = numMinas + 1 | 0;
        }
         else {
          if (equals(caixa1 != null ? caixa1.textContent : null, '*'))
            numMinas = numMinas + 1 | 0;
          if (equals(caixa2 != null ? caixa2.textContent : null, '*'))
            numMinas = numMinas + 1 | 0;
          if (equals(caixa3 != null ? caixa3.textContent : null, '*'))
            numMinas = numMinas + 1 | 0;
          if (equals(caixa4 != null ? caixa4.textContent : null, '*'))
            numMinas = numMinas + 1 | 0;
          if (equals(caixa5 != null ? caixa5.textContent : null, '*'))
            numMinas = numMinas + 1 | 0;
          if (equals(caixa6 != null ? caixa6.textContent : null, '*'))
            numMinas = numMinas + 1 | 0;
          if (equals(caixa7 != null ? caixa7.textContent : null, '*'))
            numMinas = numMinas + 1 | 0;
          if (equals(caixa8 != null ? caixa8.textContent : null, '*'))
            numMinas = numMinas + 1 | 0;
        }
        ensureNotNull(caixa_1).innerHTML = numMinas.toString();
      }
    }
  }
  _.descobrir_61zpoe$ = descobrir;
  _.abrir = abrir;
  _.main = main;
  main();
  Kotlin.defineModule('CampoMinado', _);
  return _;
}(typeof CampoMinado === 'undefined' ? {} : CampoMinado, kotlin);
