if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'CampoMinado'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'CampoMinado'.");
}
var CampoMinado = function (_, Kotlin) {
  'use strict';
  var throwCCE = Kotlin.throwCCE;
  var trimMargin = Kotlin.kotlin.text.trimMargin_rjktp$;
  var toString = Kotlin.toString;
  var equals = Kotlin.equals;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var equals_0 = Kotlin.kotlin.text.equals_igcy3c$;
  var Random = Kotlin.kotlin.random.Random;
  var ensureNotNull = Kotlin.ensureNotNull;
  var trimIndent = Kotlin.kotlin.text.trimIndent_pdl1vz$;
  function imagemMina() {
    return '<img width="30" height="30" src="img/bomba.png"/>';
  }
  function imagemBandeira() {
    return '<img width="30" height="30" src="img/bandeira.png"/>';
  }
  function posivelMina(pos) {
    var tmp$;
    var x = Kotlin.isType(tmp$ = document.getElementById(pos), HTMLTableCellElement) ? tmp$ : throwCCE();
    x.innerHTML = imagemBandeira();
  }
  function gameOver() {
    var tmp$;
    var info = Kotlin.isType(tmp$ = document.getElementById('resultJogo'), HTMLDivElement) ? tmp$ : throwCCE();
    info.innerHTML = trimMargin('Perdeu :(\n        <p>\n        <a href="campo-minado.html"><button onclick="campo-minado.html">Jogar Novamente<\/button><\/a>\n    ');
    desabilitaCliqueMouse();
  }
  function venceu() {
    var tmp$;
    var info = Kotlin.isType(tmp$ = document.getElementById('resultJogo'), HTMLDivElement) ? tmp$ : throwCCE();
    info.innerHTML = trimMargin('Ganhou :)\n        <p>\n        <a href="campo-minado.html"><button onclick="campo-minado.html">Jogar Novamente<\/button><\/a>\n    ');
    desabilitaCliqueMouse();
  }
  function desabilitaCliqueMouse$lambda(it) {
    return '';
  }
  function desabilitaCliqueMouse() {
    var tmp$;
    for (var j = 0; j <= 5; j++) {
      for (var i = 0; i <= 5; i++) {
        var caixa = Kotlin.isType(tmp$ = document.getElementById(j.toString() + i.toString()), HTMLTableCellElement) ? tmp$ : throwCCE();
        caixa.onclick = desabilitaCliqueMouse$lambda;
      }
    }
  }
  function abrirCelula(pos) {
    var tmp$, tmp$_0;
    var x = Kotlin.isType(tmp$ = document.getElementById(pos), HTMLTableCellElement) ? tmp$ : throwCCE();
    if (equals(toString(x.textContent), '0')) {
      caixaBranco(String.fromCharCode(pos.charCodeAt(0)), String.fromCharCode(pos.charCodeAt(1)));
    }
     else if (equals(toString(x.textContent), '*')) {
      x.className = 'mina-clicked';
      x.innerHTML = imagemMina();
      for (var j = 0; j <= 5; j++) {
        for (var i = 0; i <= 5; i++) {
          var minaRest = Kotlin.isType(tmp$_0 = document.getElementById(j.toString() + i.toString()), HTMLTableCellElement) ? tmp$_0 : throwCCE();
          if (equals(toString(minaRest.textContent), '*')) {
            minaRest.className = 'mina';
            minaRest.innerHTML = imagemMina();
          }
        }
      }
      gameOver();
    }
     else
      caixaNumero(x);
    verificaGanhador();
  }
  function verificaGanhador() {
    var tmp$;
    var isMina = true;
    for (var j = 0; j <= 5; j++) {
      for (var i = 0; i <= 5; i++) {
        var caixa = Kotlin.isType(tmp$ = document.getElementById(j.toString() + i.toString()), HTMLTableCellElement) ? tmp$ : throwCCE();
        if (equals(caixa.className, 'caixaFechada') && !equals(toString(caixa.textContent), '*')) {
          isMina = false;
          break;
        }
      }
    }
    if (isMina === true) {
      venceu();
    }
  }
  function caixaNumero(x) {
    if (equals(toString(x.textContent), '1'))
      x.className = 'clicked num1';
    else if (equals(toString(x.textContent), '2'))
      x.className = 'clicked num2';
    else if (equals(toString(x.textContent), '3'))
      x.className = 'clicked num3';
    else if (equals(toString(x.textContent), '4'))
      x.className = 'clicked num4';
    else if (equals(toString(x.textContent), '5'))
      x.className = 'clicked num5';
    else if (equals(toString(x.textContent), '6'))
      x.className = 'clicked num6';
  }
  var minasExist;
  function caixaBranco(y, x) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
    var caixa = Kotlin.isType(tmp$ = document.getElementById(y + x), HTMLTableCellElement) ? tmp$ : throwCCE();
    var j = toInt(y);
    var i = toInt(x);
    if (!minasExist.contains_11rb$(y + x))
      minasExist.add_11rb$(y + x);
    caixa.className = 'clicked num0';
    if ((j - 1 | 0) >= 0 && (i - 1 | 0) >= 0 && equals_0((tmp$_0 = document.getElementById((j - 1 | 0).toString() + (i - 1 | 0).toString())) != null ? tmp$_0.textContent : null, '0') && !minasExist.contains_11rb$((j - 1 | 0).toString() + (i - 1 | 0).toString())) {
      caixaBranco((j - 1 | 0).toString(), (i - 1 | 0).toString());
      abreCelulasRedor(j - 1 | 0, i - 1 | 0);
    }
    if ((j - 1 | 0) >= 0 && equals_0((tmp$_1 = document.getElementById((j - 1 | 0).toString() + i.toString())) != null ? tmp$_1.textContent : null, '0') && !minasExist.contains_11rb$((j - 1 | 0).toString() + i.toString())) {
      caixaBranco((j - 1 | 0).toString(), i.toString());
      abreCelulasRedor(j - 1 | 0, i);
    }
    if ((j - 1 | 0) >= 0 && (i + 1 | 0) <= 5 && equals_0((tmp$_2 = document.getElementById((j - 1 | 0).toString() + (i + 1 | 0).toString())) != null ? tmp$_2.textContent : null, '0') && !minasExist.contains_11rb$((j - 1 | 0).toString() + (i + 1 | 0).toString())) {
      caixaBranco((j - 1 | 0).toString(), (i + 1 | 0).toString());
      abreCelulasRedor(j - 1 | 0, i + 1 | 0);
    }
    if ((i - 1 | 0) >= 0 && equals_0((tmp$_3 = document.getElementById(j.toString() + (i - 1 | 0).toString())) != null ? tmp$_3.textContent : null, '0') && !minasExist.contains_11rb$(j.toString() + (i - 1 | 0).toString())) {
      caixaBranco(j.toString(), (i - 1 | 0).toString());
      abreCelulasRedor(j, i - 1 | 0);
    }
    if ((i + 1 | 0) <= 5 && equals_0((tmp$_4 = document.getElementById(j.toString() + (i + 1 | 0).toString())) != null ? tmp$_4.textContent : null, '0') && !minasExist.contains_11rb$(j.toString() + (i + 1 | 0).toString())) {
      caixaBranco(j.toString(), (i + 1 | 0).toString());
      abreCelulasRedor(j, i + 1 | 0);
    }
    if ((j + 1 | 0) <= 5 && (i - 1 | 0) >= 0 && equals_0((tmp$_5 = document.getElementById((j + 1 | 0).toString() + (i - 1 | 0).toString())) != null ? tmp$_5.textContent : null, '0') && !minasExist.contains_11rb$((j + 1 | 0).toString() + (i - 1 | 0).toString())) {
      caixaBranco((j + 1 | 0).toString(), (i - 1 | 0).toString());
      abreCelulasRedor(j + 1 | 0, i - 1 | 0);
    }
    if ((j + 1 | 0) <= 5 && equals_0((tmp$_6 = document.getElementById((j + 1 | 0).toString() + i.toString())) != null ? tmp$_6.textContent : null, '0') && !minasExist.contains_11rb$((j + 1 | 0).toString() + i.toString())) {
      caixaBranco((j + 1 | 0).toString(), i.toString());
      abreCelulasRedor(j + 1 | 0, i);
    }
    if ((j + 1 | 0) <= 5 && (i + 1 | 0) >= 0 && equals_0((tmp$_7 = document.getElementById((j + 1 | 0).toString() + (i + 1 | 0).toString())) != null ? tmp$_7.textContent : null, '0') && !minasExist.contains_11rb$((j + 1 | 0).toString() + (i + 1 | 0).toString())) {
      caixaBranco((j + 1 | 0).toString(), (i + 1 | 0).toString());
      abreCelulasRedor(j + 1 | 0, i + 1 | 0);
    }
    abreCelulasRedor(j, i);
  }
  function abreCelulasRedor(j, i) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6;
    if ((j - 1 | 0) >= 0 && (i - 1 | 0) >= 0) {
      caixaNumero(Kotlin.isType(tmp$ = document.getElementById((j - 1 | 0).toString() + (i - 1 | 0).toString()), HTMLTableCellElement) ? tmp$ : throwCCE());
    }
    if ((j - 1 | 0) >= 0) {
      caixaNumero(Kotlin.isType(tmp$_0 = document.getElementById((j - 1 | 0).toString() + i.toString()), HTMLTableCellElement) ? tmp$_0 : throwCCE());
    }
    if ((j - 1 | 0) >= 0 && (i + 1 | 0) <= 5) {
      caixaNumero(Kotlin.isType(tmp$_1 = document.getElementById((j - 1 | 0).toString() + (i + 1 | 0).toString()), HTMLTableCellElement) ? tmp$_1 : throwCCE());
    }
    if ((i - 1 | 0) >= 0) {
      caixaNumero(Kotlin.isType(tmp$_2 = document.getElementById(j.toString() + (i - 1 | 0).toString()), HTMLTableCellElement) ? tmp$_2 : throwCCE());
    }
    if ((i + 1 | 0) <= 5) {
      caixaNumero(Kotlin.isType(tmp$_3 = document.getElementById(j.toString() + (i + 1 | 0).toString()), HTMLTableCellElement) ? tmp$_3 : throwCCE());
    }
    if ((j + 1 | 0) <= 5 && (i - 1 | 0) >= 0) {
      caixaNumero(Kotlin.isType(tmp$_4 = document.getElementById((j + 1 | 0).toString() + (i - 1 | 0).toString()), HTMLTableCellElement) ? tmp$_4 : throwCCE());
    }
    if ((j + 1 | 0) <= 5) {
      caixaNumero(Kotlin.isType(tmp$_5 = document.getElementById((j + 1 | 0).toString() + i.toString()), HTMLTableCellElement) ? tmp$_5 : throwCCE());
    }
    if ((j + 1 | 0) <= 5 && (i + 1 | 0) >= 0 && (i + 1 | 0) <= 5) {
      caixaNumero(Kotlin.isType(tmp$_6 = document.getElementById((j + 1 | 0).toString() + (i + 1 | 0).toString()), HTMLTableCellElement) ? tmp$_6 : throwCCE());
    }
  }
  function criaMinasCampo(numMinas) {
    if (numMinas === 0)
      return;
    else {
      var minay = Random.Default.nextInt_vux9f0$(0, 5);
      var minax = Random.Default.nextInt_vux9f0$(0, 5);
      var caixa = document.getElementById(minay.toString() + minax.toString());
      if (!equals_0(caixa != null ? caixa.textContent : null, '*')) {
        ensureNotNull(caixa).innerHTML = '*';
        criaMinasCampo(numMinas - 1 | 0);
      }
       else
        criaMinasCampo(numMinas);
    }
  }
  function varreCampo() {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6;
    for (var j = 0; j <= 5; j++) {
      for (var i = 0; i <= 5; i++) {
        var caixa = document.getElementById(j.toString() + i.toString());
        if (!equals_0(caixa != null ? caixa.textContent : null, '*')) {
          if ((j - 1 | 0) >= 0 && (i - 1 | 0) >= 0 && equals_0((tmp$ = document.getElementById((j - 1 | 0).toString() + (i - 1 | 0).toString())) != null ? tmp$.textContent : null, '*'))
            ensureNotNull(caixa).innerHTML = (toInt(ensureNotNull(caixa.textContent)) + 1 | 0).toString();
          if ((j - 1 | 0) >= 0 && equals_0((tmp$_0 = document.getElementById((j - 1 | 0).toString() + i.toString())) != null ? tmp$_0.textContent : null, '*'))
            ensureNotNull(caixa).innerHTML = (toInt(ensureNotNull(caixa.textContent)) + 1 | 0).toString();
          if ((j - 1 | 0) >= 0 && (i + 1 | 0) <= 5 && equals_0((tmp$_1 = document.getElementById((j - 1 | 0).toString() + (i + 1 | 0).toString())) != null ? tmp$_1.textContent : null, '*'))
            ensureNotNull(caixa).innerHTML = (toInt(ensureNotNull(caixa.textContent)) + 1 | 0).toString();
          if ((i - 1 | 0) >= 0 && equals_0((tmp$_2 = document.getElementById(j.toString() + (i - 1 | 0).toString())) != null ? tmp$_2.textContent : null, '*'))
            ensureNotNull(caixa).innerHTML = (toInt(ensureNotNull(caixa.textContent)) + 1 | 0).toString();
          if ((i + 1 | 0) <= 5 && equals_0((tmp$_3 = document.getElementById(j.toString() + (i + 1 | 0).toString())) != null ? tmp$_3.textContent : null, '*')) {
            ensureNotNull(caixa).innerHTML = (toInt(ensureNotNull(caixa.textContent)) + 1 | 0).toString();
          }
          if ((j + 1 | 0) <= 5 && (i - 1 | 0) >= 0 && equals_0((tmp$_4 = document.getElementById((j + 1 | 0).toString() + (i - 1 | 0).toString())) != null ? tmp$_4.textContent : null, '*'))
            ensureNotNull(caixa).innerHTML = (toInt(ensureNotNull(caixa.textContent)) + 1 | 0).toString();
          if ((j + 1 | 0) <= 5 && equals_0((tmp$_5 = document.getElementById((j + 1 | 0).toString() + i.toString())) != null ? tmp$_5.textContent : null, '*'))
            ensureNotNull(caixa).innerHTML = (toInt(ensureNotNull(caixa.textContent)) + 1 | 0).toString();
          if ((j + 1 | 0) <= 5 && (i + 1 | 0) >= 0 && equals_0((tmp$_6 = document.getElementById((j + 1 | 0).toString() + (i + 1 | 0).toString())) != null ? tmp$_6.textContent : null, '*'))
            ensureNotNull(caixa).innerHTML = (toInt(ensureNotNull(caixa.textContent)) + 1 | 0).toString();
        }
      }
    }
  }
  function informaNumMinas(num) {
    var tmp$;
    var info = Kotlin.isType(tmp$ = document.getElementById('infoJogo'), HTMLDivElement) ? tmp$ : throwCCE();
    info.innerHTML = info.innerHTML + trimIndent('\n' + '        : ' + num + '\n' + '    ');
  }
  function main() {
    var numDeMinas = 7;
    informaNumMinas(numDeMinas);
    criaMinasCampo(numDeMinas);
    varreCampo();
  }
  _.imagemMina = imagemMina;
  _.imagemBandeira = imagemBandeira;
  _.posivelMina = posivelMina;
  _.gameOver = gameOver;
  _.venceu = venceu;
  _.desabilitaCliqueMouse = desabilitaCliqueMouse;
  _.abrirCelula = abrirCelula;
  _.verificaGanhador = verificaGanhador;
  _.caixaNumero_pb2y98$ = caixaNumero;
  Object.defineProperty(_, 'minasExist', {
    get: function () {
      return minasExist;
    },
    set: function (value) {
      minasExist = value;
    }
  });
  _.caixaBranco_puj7f4$ = caixaBranco;
  _.abreCelulasRedor_vux9f0$ = abreCelulasRedor;
  _.criaMinasCampo_za3lpa$ = criaMinasCampo;
  _.varreCampo = varreCampo;
  _.informaNumMinas_za3lpa$ = informaNumMinas;
  _.main = main;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  minasExist = ArrayList_init();
  main();
  Kotlin.defineModule('CampoMinado', _);
  return _;
}(typeof CampoMinado === 'undefined' ? {} : CampoMinado, kotlin);
