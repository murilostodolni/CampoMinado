if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'CampoMinado'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'CampoMinado'.");
}
var CampoMinado = function (_, Kotlin) {
  'use strict';
  var throwCCE = Kotlin.throwCCE;
  var toString = Kotlin.toString;
  var equals = Kotlin.equals;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var contains = Kotlin.kotlin.collections.contains_c03ot6$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var equals_0 = Kotlin.kotlin.text.equals_igcy3c$;
  var Random = Kotlin.kotlin.random.Random;
  function abrirCelula(pos) {
    var tmp$;
    var x = Kotlin.isType(tmp$ = document.getElementById(pos), HTMLTableCellElement) ? tmp$ : throwCCE();
    if (equals(toString(x.textContent), '*')) {
      x.className = 'mina';
      x.innerHTML = '<img width="50" height="50" src="img/bomba.png"/>';
    }
    if (equals(toString(x.textContent), '0'))
      caixaBranco(pos, numMinas);
    else
      caixaNumero(x);
  }
  function caixaNumero(x) {
    if (equals(toString(x.textContent), '1'))
      x.className = 'clicked1';
    if (equals(toString(x.textContent), '2'))
      x.className = 'clicked2';
    if (equals(toString(x.textContent), '3'))
      x.className = 'clicked3';
    if (equals(toString(x.textContent), '4'))
      x.className = 'clicked4';
    if (equals(toString(x.textContent), '5'))
      x.className = 'clicked5';
    if (equals(toString(x.textContent), '6'))
      x.className = 'clicked6';
  }
  var numMinas;
  function caixaBranco(i, numAnt) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13, tmp$_14, tmp$_15, tmp$_16, tmp$_17, tmp$_18, tmp$_19, tmp$_20, tmp$_21, tmp$_22, tmp$_23, tmp$_24, tmp$_25, tmp$_26, tmp$_27, tmp$_28, tmp$_29, tmp$_30, tmp$_31, tmp$_32, tmp$_33, tmp$_34, tmp$_35, tmp$_36, tmp$_37, tmp$_38, tmp$_39;
    var caixa = Kotlin.isType(tmp$ = document.getElementById(i), HTMLTableCellElement) ? tmp$ : throwCCE();
    var n = toInt(i);
    println(n);
    if (!contains(numMinas, n))
      numMinas[n] = n;
    var caixa1 = document.getElementById((n - 7 | 0).toString());
    var caixa2 = document.getElementById((n - 6 | 0).toString());
    var caixa3 = document.getElementById((n - 5 | 0).toString());
    var caixa4 = document.getElementById((n - 1 | 0).toString());
    var caixa5 = document.getElementById((n + 1 | 0).toString());
    var caixa6 = document.getElementById((n + 5 | 0).toString());
    var caixa7 = document.getElementById((n + 6 | 0).toString());
    var caixa8 = document.getElementById((n + 7 | 0).toString());
    caixa.className = 'clicked0';
    if (n === 1) {
      if (equals_0(ensureNotNull(caixa5).textContent, '0') && !contains(numMinas, n + 1 | 0))
        caixaBranco((n + 1 | 0).toString(), numAnt);
      if (equals_0(ensureNotNull(caixa7).textContent, '0') && !contains(numMinas, n + 6 | 0))
        caixaBranco((n + 6 | 0).toString(), numAnt);
      if (equals_0(ensureNotNull(caixa8).textContent, '0') && !contains(numMinas, n + 7 | 0))
        caixaBranco((n + 7 | 0).toString(), numAnt);
      caixaNumero(Kotlin.isType(tmp$_0 = caixa5, HTMLTableCellElement) ? tmp$_0 : throwCCE());
      caixaNumero(Kotlin.isType(tmp$_1 = caixa7, HTMLTableCellElement) ? tmp$_1 : throwCCE());
      caixaNumero(Kotlin.isType(tmp$_2 = caixa8, HTMLTableCellElement) ? tmp$_2 : throwCCE());
    }
     else if (n === 2 || n === 3 || n === 4 || n === 5) {
      if (equals_0(ensureNotNull(caixa4).textContent, '0') && !contains(numMinas, n - 1 | 0))
        caixaBranco((n - 1 | 0).toString(), numAnt);
      if (equals_0(ensureNotNull(caixa5).textContent, '0') && !contains(numMinas, n + 1 | 0))
        caixaBranco((n + 1 | 0).toString(), numAnt);
      if (equals_0(ensureNotNull(caixa6).textContent, '0') && !contains(numMinas, n + 5 | 0))
        caixaBranco((n + 5 | 0).toString(), numAnt);
      if (equals_0(ensureNotNull(caixa7).textContent, '0') && !contains(numMinas, n + 6 | 0))
        caixaBranco((n + 6 | 0).toString(), numAnt);
      if (equals_0(ensureNotNull(caixa8).textContent, '0') && !contains(numMinas, n + 7 | 0))
        caixaBranco((n + 7 | 0).toString(), numAnt);
      caixaNumero(Kotlin.isType(tmp$_3 = caixa4, HTMLTableCellElement) ? tmp$_3 : throwCCE());
      caixaNumero(Kotlin.isType(tmp$_4 = caixa5, HTMLTableCellElement) ? tmp$_4 : throwCCE());
      caixaNumero(Kotlin.isType(tmp$_5 = caixa6, HTMLTableCellElement) ? tmp$_5 : throwCCE());
      caixaNumero(Kotlin.isType(tmp$_6 = caixa7, HTMLTableCellElement) ? tmp$_6 : throwCCE());
      caixaNumero(Kotlin.isType(tmp$_7 = caixa8, HTMLTableCellElement) ? tmp$_7 : throwCCE());
    }
     else if (n === 7 || n === 13 || n === 19 || n === 25) {
      if (equals_0(ensureNotNull(caixa2).textContent, '0') && !contains(numMinas, n - 6 | 0))
        caixaBranco((n - 6 | 0).toString(), numAnt);
      if (equals_0(ensureNotNull(caixa3).textContent, '0') && !contains(numMinas, n - 5 | 0))
        caixaBranco((n - 5 | 0).toString(), numAnt);
      if (equals_0(ensureNotNull(caixa5).textContent, '0') && !contains(numMinas, n + 1 | 0))
        caixaBranco((n + 1 | 0).toString(), numAnt);
      if (equals_0(ensureNotNull(caixa7).textContent, '0') && !contains(numMinas, n + 6 | 0))
        caixaBranco((n + 6 | 0).toString(), numAnt);
      if (equals_0(ensureNotNull(caixa8).textContent, '0') && !contains(numMinas, n + 7 | 0))
        caixaBranco((n + 7 | 0).toString(), numAnt);
      caixaNumero(Kotlin.isType(tmp$_8 = caixa2, HTMLTableCellElement) ? tmp$_8 : throwCCE());
      caixaNumero(Kotlin.isType(tmp$_9 = caixa3, HTMLTableCellElement) ? tmp$_9 : throwCCE());
      caixaNumero(Kotlin.isType(tmp$_10 = caixa5, HTMLTableCellElement) ? tmp$_10 : throwCCE());
      caixaNumero(Kotlin.isType(tmp$_11 = caixa7, HTMLTableCellElement) ? tmp$_11 : throwCCE());
      caixaNumero(Kotlin.isType(tmp$_12 = caixa8, HTMLTableCellElement) ? tmp$_12 : throwCCE());
    }
     else if (n === 6) {
      if (equals_0(ensureNotNull(caixa4).textContent, '0') && !contains(numMinas, n - 1 | 0))
        caixaBranco((n - 1 | 0).toString(), numAnt);
      if (equals_0(ensureNotNull(caixa6).textContent, '0') && !contains(numMinas, n + 5 | 0))
        caixaBranco((n + 5 | 0).toString(), numAnt);
      if (equals_0(ensureNotNull(caixa7).textContent, '0') && !contains(numMinas, n + 6 | 0))
        caixaBranco((n + 6 | 0).toString(), numAnt);
      caixaNumero(Kotlin.isType(tmp$_13 = caixa4, HTMLTableCellElement) ? tmp$_13 : throwCCE());
      caixaNumero(Kotlin.isType(tmp$_14 = caixa6, HTMLTableCellElement) ? tmp$_14 : throwCCE());
      caixaNumero(Kotlin.isType(tmp$_15 = caixa7, HTMLTableCellElement) ? tmp$_15 : throwCCE());
    }
     else if (n === 12 || n === 18 || n === 24 || n === 30) {
      if (equals_0(ensureNotNull(caixa1).textContent, '0') && !contains(numMinas, n - 7 | 0))
        caixaBranco((n - 7 | 0).toString(), numAnt);
      if (equals_0(ensureNotNull(caixa2).textContent, '0') && !contains(numMinas, n - 6 | 0))
        caixaBranco((n - 6 | 0).toString(), numAnt);
      if (equals_0(ensureNotNull(caixa4).textContent, '0') && !contains(numMinas, n - 1 | 0))
        caixaBranco((n - 1 | 0).toString(), numAnt);
      if (equals_0(ensureNotNull(caixa6).textContent, '0') && !contains(numMinas, n + 5 | 0))
        caixaBranco((n + 5 | 0).toString(), numAnt);
      if (equals_0(ensureNotNull(caixa7).textContent, '0') && !contains(numMinas, n + 5 | 0))
        caixaBranco((n + 6 | 0).toString(), numAnt);
      caixaNumero(Kotlin.isType(tmp$_16 = caixa1, HTMLTableCellElement) ? tmp$_16 : throwCCE());
      caixaNumero(Kotlin.isType(tmp$_17 = caixa2, HTMLTableCellElement) ? tmp$_17 : throwCCE());
      caixaNumero(Kotlin.isType(tmp$_18 = caixa4, HTMLTableCellElement) ? tmp$_18 : throwCCE());
      caixaNumero(Kotlin.isType(tmp$_19 = caixa6, HTMLTableCellElement) ? tmp$_19 : throwCCE());
      caixaNumero(Kotlin.isType(tmp$_20 = caixa7, HTMLTableCellElement) ? tmp$_20 : throwCCE());
    }
     else if (n === 32 || n === 33 || n === 34 || n === 35) {
      if (equals_0(ensureNotNull(caixa1).textContent, '0') && !contains(numMinas, n - 7 | 0))
        caixaBranco((n - 7 | 0).toString(), numAnt);
      if (equals_0(ensureNotNull(caixa2).textContent, '0') && !contains(numMinas, n - 6 | 0))
        caixaBranco((n - 6 | 0).toString(), numAnt);
      if (equals_0(ensureNotNull(caixa3).textContent, '0') && !contains(numMinas, n - 5 | 0))
        caixaBranco((n - 5 | 0).toString(), numAnt);
      if (equals_0(ensureNotNull(caixa4).textContent, '0') && !contains(numMinas, n - 1 | 0))
        caixaBranco((n - 1 | 0).toString(), numAnt);
      if (equals_0(ensureNotNull(caixa5).textContent, '0') && !contains(numMinas, n + 1 | 0))
        caixaBranco((n + 1 | 0).toString(), numAnt);
      caixaNumero(Kotlin.isType(tmp$_21 = caixa1, HTMLTableCellElement) ? tmp$_21 : throwCCE());
      caixaNumero(Kotlin.isType(tmp$_22 = caixa2, HTMLTableCellElement) ? tmp$_22 : throwCCE());
      caixaNumero(Kotlin.isType(tmp$_23 = caixa3, HTMLTableCellElement) ? tmp$_23 : throwCCE());
      caixaNumero(Kotlin.isType(tmp$_24 = caixa4, HTMLTableCellElement) ? tmp$_24 : throwCCE());
      caixaNumero(Kotlin.isType(tmp$_25 = caixa5, HTMLTableCellElement) ? tmp$_25 : throwCCE());
    }
     else if (n === 31) {
      if (equals_0(ensureNotNull(caixa2).textContent, '0') && !contains(numMinas, n - 6 | 0))
        caixaBranco((n - 6 | 0).toString(), numAnt);
      if (equals_0(ensureNotNull(caixa3).textContent, '0') && !contains(numMinas, n - 5 | 0))
        caixaBranco((n - 5 | 0).toString(), numAnt);
      if (equals_0(ensureNotNull(caixa5).textContent, '0') && !contains(numMinas, n + 1 | 0))
        caixaBranco((n + 1 | 0).toString(), numAnt);
      caixaNumero(Kotlin.isType(tmp$_26 = caixa2, HTMLTableCellElement) ? tmp$_26 : throwCCE());
      caixaNumero(Kotlin.isType(tmp$_27 = caixa3, HTMLTableCellElement) ? tmp$_27 : throwCCE());
      caixaNumero(Kotlin.isType(tmp$_28 = caixa5, HTMLTableCellElement) ? tmp$_28 : throwCCE());
    }
     else if (n === 36) {
      if (equals_0(ensureNotNull(caixa1).textContent, '0') && !contains(numMinas, n - 7 | 0))
        caixaBranco((n - 7 | 0).toString(), numAnt);
      if (equals_0(ensureNotNull(caixa2).textContent, '0') && !contains(numMinas, n - 6 | 0))
        caixaBranco((n - 6 | 0).toString(), numAnt);
      if (equals_0(ensureNotNull(caixa4).textContent, '0') && !contains(numMinas, n - 1 | 0))
        caixaBranco((n - 1 | 0).toString(), numAnt);
      caixaNumero(Kotlin.isType(tmp$_29 = caixa1, HTMLTableCellElement) ? tmp$_29 : throwCCE());
      caixaNumero(Kotlin.isType(tmp$_30 = caixa2, HTMLTableCellElement) ? tmp$_30 : throwCCE());
      caixaNumero(Kotlin.isType(tmp$_31 = caixa4, HTMLTableCellElement) ? tmp$_31 : throwCCE());
    }
     else {
      if (equals_0(ensureNotNull(caixa1).textContent, '0') && !contains(numMinas, n - 7 | 0))
        caixaBranco((n - 7 | 0).toString(), numAnt);
      if (equals_0(ensureNotNull(caixa2).textContent, '0') && !contains(numMinas, n - 6 | 0))
        caixaBranco((n - 6 | 0).toString(), numAnt);
      if (equals_0(ensureNotNull(caixa3).textContent, '0') && !contains(numMinas, n - 5 | 0))
        caixaBranco((n - 5 | 0).toString(), numAnt);
      if (equals_0(ensureNotNull(caixa4).textContent, '0') && !contains(numMinas, n - 1 | 0))
        caixaBranco((n - 1 | 0).toString(), numAnt);
      if (equals_0(ensureNotNull(caixa5).textContent, '0') && !contains(numMinas, n + 1 | 0))
        caixaBranco((n + 1 | 0).toString(), numAnt);
      if (equals_0(ensureNotNull(caixa6).textContent, '0') && !contains(numMinas, n + 5 | 0))
        caixaBranco((n + 5 | 0).toString(), numAnt);
      if (equals_0(ensureNotNull(caixa7).textContent, '0') && !contains(numMinas, n + 6 | 0))
        caixaBranco((n + 6 | 0).toString(), numAnt);
      if (equals_0(ensureNotNull(caixa8).textContent, '0') && !contains(numMinas, n + 7 | 0))
        caixaBranco((n + 7 | 0).toString(), numAnt);
      caixaNumero(Kotlin.isType(tmp$_32 = caixa1, HTMLTableCellElement) ? tmp$_32 : throwCCE());
      caixaNumero(Kotlin.isType(tmp$_33 = caixa2, HTMLTableCellElement) ? tmp$_33 : throwCCE());
      caixaNumero(Kotlin.isType(tmp$_34 = caixa3, HTMLTableCellElement) ? tmp$_34 : throwCCE());
      caixaNumero(Kotlin.isType(tmp$_35 = caixa4, HTMLTableCellElement) ? tmp$_35 : throwCCE());
      caixaNumero(Kotlin.isType(tmp$_36 = caixa5, HTMLTableCellElement) ? tmp$_36 : throwCCE());
      caixaNumero(Kotlin.isType(tmp$_37 = caixa6, HTMLTableCellElement) ? tmp$_37 : throwCCE());
      caixaNumero(Kotlin.isType(tmp$_38 = caixa7, HTMLTableCellElement) ? tmp$_38 : throwCCE());
      caixaNumero(Kotlin.isType(tmp$_39 = caixa8, HTMLTableCellElement) ? tmp$_39 : throwCCE());
    }
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
  _.caixaNumero_pb2y98$ = caixaNumero;
  Object.defineProperty(_, 'numMinas', {
    get: function () {
      return numMinas;
    },
    set: function (value) {
      numMinas = value;
    }
  });
  _.caixaBranco_thi2i1$ = caixaBranco;
  _.main = main;
  var array = new Int32Array(36);
  var tmp$;
  tmp$ = array.length - 1 | 0;
  for (var i = 0; i <= tmp$; i++) {
    array[i] = 0;
  }
  numMinas = array;
  main();
  Kotlin.defineModule('CampoMinado', _);
  return _;
}(typeof CampoMinado === 'undefined' ? {} : CampoMinado, kotlin);
