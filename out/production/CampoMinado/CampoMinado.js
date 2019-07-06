if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'CampoMinado'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'CampoMinado'.");
}
var CampoMinado = function (_, Kotlin) {
  'use strict';
  var throwCCE = Kotlin.throwCCE;
  var trimMargin = Kotlin.kotlin.text.trimMargin_rjktp$;
  var generateSequence = Kotlin.kotlin.sequences.generateSequence_gexuht$;
  var take = Kotlin.kotlin.sequences.take_wuwhe2$;
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
    var x = Kotlin.isType(tmp$ = getElement(pos), HTMLTableCellElement) ? tmp$ : throwCCE();
    x.className = 'bandeira';
  }
  function getElement(id) {
    var tmp$;
    return Kotlin.isType(tmp$ = document.getElementById(id), HTMLElement) ? tmp$ : throwCCE();
  }
  function resultadoJogo(result) {
    var tmp$;
    var info = Kotlin.isType(tmp$ = getElement('resultJogo'), HTMLDivElement) ? tmp$ : throwCCE();
    if (result) {
      info.innerHTML = trimMargin('PARAB\xC9NS!!! Voc\xEA ganhouuuu :)\n        <p>\n    ');
    }
     else {
      info.innerHTML = trimMargin('Perdeuuuuuuuuuuuuuuuuu :(\n        <p>\n    ');
    }
    info.innerHTML = info.innerHTML + '<a href="campo-minado.html"><button onclick="campo-minado.html">Jogar Novamente<\/button><\/a>';
    desabilitaClickMouse();
  }
  function desabilitaClickMouse$lambda(x) {
    return x + 1 | 0;
  }
  function desabilitaClickMouse$lambda_0(x) {
    return x + 1 | 0;
  }
  function desabilitaClickMouse$lambda$lambda$lambda(it) {
    return '';
  }
  function desabilitaClickMouse() {
    var j = generateSequence(0, desabilitaClickMouse$lambda);
    var i = generateSequence(0, desabilitaClickMouse$lambda_0);
    var tmp$;
    tmp$ = take(j, 6).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0;
      tmp$_0 = take(i, 6).iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        var tmp$_1;
        var caixa = Kotlin.isType(tmp$_1 = getElement(element.toString() + element_0.toString()), HTMLTableCellElement) ? tmp$_1 : throwCCE();
        caixa.onclick = desabilitaClickMouse$lambda$lambda$lambda;
      }
    }
  }
  function abrirCelula$lambda(x) {
    return x + 1 | 0;
  }
  function abrirCelula$lambda_0(x) {
    return x + 1 | 0;
  }
  function abrirCelula(pos) {
    var tmp$;
    var caixa = Kotlin.isType(tmp$ = getElement(pos), HTMLTableCellElement) ? tmp$ : throwCCE();
    if (equals(toString(caixa.textContent), '0'))
      caixaBranco(String.fromCharCode(pos.charCodeAt(0)), String.fromCharCode(pos.charCodeAt(1)));
    else if (equals(toString(caixa.textContent), '*')) {
      caixa.className = 'mina-clicked';
      caixa.innerHTML = imagemMina();
      var j = generateSequence(0, abrirCelula$lambda);
      var i = generateSequence(0, abrirCelula$lambda_0);
      var tmp$_0;
      tmp$_0 = take(j, 6).iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        var tmp$_1;
        tmp$_1 = take(i, 6).iterator();
        while (tmp$_1.hasNext()) {
          var element_0 = tmp$_1.next();
          var tmp$_2;
          var minaRest = Kotlin.isType(tmp$_2 = document.getElementById(element.toString() + element_0.toString()), HTMLTableCellElement) ? tmp$_2 : throwCCE();
          if (equals(toString(minaRest.textContent), '*')) {
            minaRest.className = 'mina';
            minaRest.innerHTML = imagemMina();
          }
        }
      }
      resultadoJogo(false);
    }
     else
      caixaCliked(caixa);
    if (verificaGanhador())
      resultadoJogo(true);
  }
  function verificaGanhador$lambda(x) {
    return x + 1 | 0;
  }
  function verificaGanhador$lambda_0(x) {
    return x + 1 | 0;
  }
  function verificaGanhador() {
    var j = generateSequence(0, verificaGanhador$lambda);
    var i = generateSequence(0, verificaGanhador$lambda_0);
    var tmp$;
    tmp$ = take(j, 6).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0;
      tmp$_0 = take(i, 6).iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        var tmp$_1;
        var caixa = Kotlin.isType(tmp$_1 = getElement(element.toString() + element_0.toString()), HTMLTableCellElement) ? tmp$_1 : throwCCE();
        if (equals(caixa.className, 'caixaFechada') && !equals(toString(caixa.textContent), '*'))
          return false;
      }
    }
    return true;
  }
  function caixaCliked(x) {
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
    var tmp$;
    var caixa = Kotlin.isType(tmp$ = getElement(y + x), HTMLTableCellElement) ? tmp$ : throwCCE();
    var j = toInt(y);
    var i = toInt(x);
    minasExist.add_11rb$(y + x);
    caixa.className = 'clicked num0';
    if ((j - 1 | 0) >= 0 && (i - 1 | 0) >= 0 && equals_0(getElement((j - 1 | 0).toString() + (i - 1 | 0).toString()).textContent, '0') && !minasExist.contains_11rb$((j - 1 | 0).toString() + (i - 1 | 0).toString())) {
      caixaBranco((j - 1 | 0).toString(), (i - 1 | 0).toString());
      abreCelulasRedor(j - 1 | 0, i - 1 | 0);
    }
    if ((j - 1 | 0) >= 0 && equals_0(getElement((j - 1 | 0).toString() + i.toString()).textContent, '0') && !minasExist.contains_11rb$((j - 1 | 0).toString() + i.toString())) {
      caixaBranco((j - 1 | 0).toString(), i.toString());
      abreCelulasRedor(j - 1 | 0, i);
    }
    if ((j - 1 | 0) >= 0 && (i + 1 | 0) <= 5 && equals_0(getElement((j - 1 | 0).toString() + (i + 1 | 0).toString()).textContent, '0') && !minasExist.contains_11rb$((j - 1 | 0).toString() + (i + 1 | 0).toString())) {
      caixaBranco((j - 1 | 0).toString(), (i + 1 | 0).toString());
      abreCelulasRedor(j - 1 | 0, i + 1 | 0);
    }
    if ((i - 1 | 0) >= 0 && equals_0(getElement(j.toString() + (i - 1 | 0).toString()).textContent, '0') && !minasExist.contains_11rb$(j.toString() + (i - 1 | 0).toString())) {
      caixaBranco(j.toString(), (i - 1 | 0).toString());
      abreCelulasRedor(j, i - 1 | 0);
    }
    if ((i + 1 | 0) <= 5 && equals_0(getElement(j.toString() + (i + 1 | 0).toString()).textContent, '0') && !minasExist.contains_11rb$(j.toString() + (i + 1 | 0).toString())) {
      caixaBranco(j.toString(), (i + 1 | 0).toString());
      abreCelulasRedor(j, i + 1 | 0);
    }
    if ((j + 1 | 0) <= 5 && (i - 1 | 0) >= 0 && equals_0(getElement((j + 1 | 0).toString() + (i - 1 | 0).toString()).textContent, '0') && !minasExist.contains_11rb$((j + 1 | 0).toString() + (i - 1 | 0).toString())) {
      caixaBranco((j + 1 | 0).toString(), (i - 1 | 0).toString());
      abreCelulasRedor(j + 1 | 0, i - 1 | 0);
    }
    if ((j + 1 | 0) <= 5 && equals_0(getElement((j + 1 | 0).toString() + i.toString()).textContent, '0') && !minasExist.contains_11rb$((j + 1 | 0).toString() + i.toString())) {
      caixaBranco((j + 1 | 0).toString(), i.toString());
      abreCelulasRedor(j + 1 | 0, i);
    }
    if ((j + 1 | 0) <= 5 && (i + 1 | 0) >= 0 && (i + 1 | 0) <= 5 && equals_0(getElement((j + 1 | 0).toString() + (i + 1 | 0).toString()).textContent, '0') && !minasExist.contains_11rb$((j + 1 | 0).toString() + (i + 1 | 0).toString())) {
      caixaBranco((j + 1 | 0).toString(), (i + 1 | 0).toString());
      abreCelulasRedor(j + 1 | 0, i + 1 | 0);
    }
    abreCelulasRedor(j, i);
  }
  function abreCelulasRedor(j, i) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6;
    if ((j - 1 | 0) >= 0 && (i - 1 | 0) >= 0) {
      caixaCliked(Kotlin.isType(tmp$ = getElement((j - 1 | 0).toString() + (i - 1 | 0).toString()), HTMLTableCellElement) ? tmp$ : throwCCE());
    }
    if ((j - 1 | 0) >= 0) {
      caixaCliked(Kotlin.isType(tmp$_0 = getElement((j - 1 | 0).toString() + i.toString()), HTMLTableCellElement) ? tmp$_0 : throwCCE());
    }
    if ((j - 1 | 0) >= 0 && (i + 1 | 0) <= 5) {
      caixaCliked(Kotlin.isType(tmp$_1 = getElement((j - 1 | 0).toString() + (i + 1 | 0).toString()), HTMLTableCellElement) ? tmp$_1 : throwCCE());
    }
    if ((i - 1 | 0) >= 0) {
      caixaCliked(Kotlin.isType(tmp$_2 = getElement(j.toString() + (i - 1 | 0).toString()), HTMLTableCellElement) ? tmp$_2 : throwCCE());
    }
    if ((i + 1 | 0) <= 5) {
      caixaCliked(Kotlin.isType(tmp$_3 = getElement(j.toString() + (i + 1 | 0).toString()), HTMLTableCellElement) ? tmp$_3 : throwCCE());
    }
    if ((j + 1 | 0) <= 5 && (i - 1 | 0) >= 0) {
      caixaCliked(Kotlin.isType(tmp$_4 = getElement((j + 1 | 0).toString() + (i - 1 | 0).toString()), HTMLTableCellElement) ? tmp$_4 : throwCCE());
    }
    if ((j + 1 | 0) <= 5) {
      caixaCliked(Kotlin.isType(tmp$_5 = getElement((j + 1 | 0).toString() + i.toString()), HTMLTableCellElement) ? tmp$_5 : throwCCE());
    }
    if ((j + 1 | 0) <= 5 && (i + 1 | 0) >= 0 && (i + 1 | 0) <= 5) {
      caixaCliked(Kotlin.isType(tmp$_6 = getElement((j + 1 | 0).toString() + (i + 1 | 0).toString()), HTMLTableCellElement) ? tmp$_6 : throwCCE());
    }
  }
  function criaMinasCampo(numMinas) {
    if (numMinas !== 0) {
      var minaY = Random.Default.nextInt_vux9f0$(0, 5);
      var minaX = Random.Default.nextInt_vux9f0$(0, 5);
      var caixa = getElement(minaY.toString() + minaX.toString());
      if (!equals_0(caixa.textContent, '*')) {
        caixa.innerHTML = '*';
        criaMinasCampo(numMinas - 1 | 0);
      }
       else
        criaMinasCampo(numMinas);
    }
  }
  function varreCampo$lambda(x) {
    return x + 1 | 0;
  }
  function varreCampo$lambda_0(y) {
    return y + 1 | 0;
  }
  function varreCampo() {
    var x = generateSequence(0, varreCampo$lambda);
    var y = generateSequence(0, varreCampo$lambda_0);
    var tmp$;
    tmp$ = take(x, 6).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0;
      tmp$_0 = take(y, 6).iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        var tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8;
        var caixa = getElement(element.toString() + element_0.toString());
        if (!equals_0(caixa.textContent, '*')) {
          if ((element - 1 | 0) >= 0 && (element_0 - 1 | 0) >= 0 && equals_0((tmp$_1 = document.getElementById((element - 1 | 0).toString() + (element_0 - 1 | 0).toString())) != null ? tmp$_1.textContent : null, '*'))
            caixa.innerHTML = (toInt(ensureNotNull(caixa.textContent)) + 1 | 0).toString();
          if ((element - 1 | 0) >= 0 && equals_0((tmp$_2 = document.getElementById((element - 1 | 0).toString() + element_0.toString())) != null ? tmp$_2.textContent : null, '*'))
            caixa.innerHTML = (toInt(ensureNotNull(caixa.textContent)) + 1 | 0).toString();
          if ((element - 1 | 0) >= 0 && (element_0 + 1 | 0) <= 5 && equals_0((tmp$_3 = document.getElementById((element - 1 | 0).toString() + (element_0 + 1 | 0).toString())) != null ? tmp$_3.textContent : null, '*'))
            caixa.innerHTML = (toInt(ensureNotNull(caixa.textContent)) + 1 | 0).toString();
          if ((element_0 - 1 | 0) >= 0 && equals_0((tmp$_4 = document.getElementById(element.toString() + (element_0 - 1 | 0).toString())) != null ? tmp$_4.textContent : null, '*'))
            caixa.innerHTML = (toInt(ensureNotNull(caixa.textContent)) + 1 | 0).toString();
          if ((element_0 + 1 | 0) <= 5 && equals_0((tmp$_5 = document.getElementById(element.toString() + (element_0 + 1 | 0).toString())) != null ? tmp$_5.textContent : null, '*')) {
            caixa.innerHTML = (toInt(ensureNotNull(caixa.textContent)) + 1 | 0).toString();
          }
          if ((element + 1 | 0) <= 5 && (element_0 - 1 | 0) >= 0 && equals_0((tmp$_6 = document.getElementById((element + 1 | 0).toString() + (element_0 - 1 | 0).toString())) != null ? tmp$_6.textContent : null, '*'))
            caixa.innerHTML = (toInt(ensureNotNull(caixa.textContent)) + 1 | 0).toString();
          if ((element + 1 | 0) <= 5 && equals_0((tmp$_7 = document.getElementById((element + 1 | 0).toString() + element_0.toString())) != null ? tmp$_7.textContent : null, '*'))
            caixa.innerHTML = (toInt(ensureNotNull(caixa.textContent)) + 1 | 0).toString();
          if ((element + 1 | 0) <= 5 && (element_0 + 1 | 0) >= 0 && equals_0((tmp$_8 = document.getElementById((element + 1 | 0).toString() + (element_0 + 1 | 0).toString())) != null ? tmp$_8.textContent : null, '*'))
            caixa.innerHTML = (toInt(ensureNotNull(caixa.textContent)) + 1 | 0).toString();
        }
      }
    }
  }
  function informaNumMinas(num) {
    var tmp$;
    var info = Kotlin.isType(tmp$ = getElement('infoJogo'), HTMLDivElement) ? tmp$ : throwCCE();
    info.innerHTML = info.innerHTML + trimIndent('\n' + '        : ' + num + '\n' + '    ');
  }
  function main() {
    var numDeMinas = 8;
    informaNumMinas(numDeMinas);
    criaMinasCampo(numDeMinas);
    varreCampo();
  }
  _.imagemMina = imagemMina;
  _.imagemBandeira = imagemBandeira;
  _.posivelMina = posivelMina;
  _.getElement_61zpoe$ = getElement;
  _.resultadoJogo_6taknv$ = resultadoJogo;
  _.desabilitaClickMouse = desabilitaClickMouse;
  _.abrirCelula = abrirCelula;
  _.verificaGanhador = verificaGanhador;
  _.caixaCliked_pb2y98$ = caixaCliked;
  Object.defineProperty(_, 'minasExist', {
    get: function () {
      return minasExist;
    }
  });
  _.caixaBranco_puj7f4$ = caixaBranco;
  _.abreCelulasRedor_vux9f0$ = abreCelulasRedor;
  _.criaMinasCampo_za3lpa$ = criaMinasCampo;
  _.varreCampo = varreCampo;
  _.informaNumMinas_za3lpa$ = informaNumMinas;
  _.main = main;
  var LinkedHashSet_init = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$;
  minasExist = LinkedHashSet_init();
  main();
  Kotlin.defineModule('CampoMinado', _);
  return _;
}(typeof CampoMinado === 'undefined' ? {} : CampoMinado, kotlin);
