import org.w3c.dom.*
import kotlin.browser.document
import kotlin.random.Random

fun imagemMina() = """<img width="30" height="30" src="img/bomba.png"/>"""

fun imagemBandeira() = """<img width="30" height="30" src="img/bandeira.png"/>"""

//TODO tentar colocar foto bandeira
@JsName("posivelMina")
fun posivelMina(pos: String){
    val x = getElement(pos) as HTMLTableCellElement

    x.className = "bandeira"
}

//fun para nao precisar ficar fazendo document.getElementById(id) toda vez
fun getElement(id: String): HTMLElement{
    return document.getElementById(id) as HTMLElement
}

fun resultadoJogo(result: Boolean){
    val info = getElement("resultJogo") as HTMLDivElement

    if(result){
        info.innerHTML = """PARABÉNS!!! Você ganhouuuu :)
        <p>
    """.trimMargin()
    } else {
        info.innerHTML = """Perdeuuuuuuuuuuuuuuuuu :(
        <p>
    """.trimMargin()
    }
    info.innerHTML += "<a href=\"campo-minado.html\"><button onclick=\"campo-minado.html\">Jogar Novamente</button></a>"

    desabilitaClickMouse()
}

/*Funcao responsavel por bloquear cliques apos ganhar ou perder a partida */
fun desabilitaClickMouse(){
    val j = generateSequence(0, {x -> x+1})
    val i = generateSequence(0, {x -> x+1})
    j.take(6).forEach { x -> i.take(6).forEach {  y ->
        val caixa = getElement(x.toString() + y.toString()) as HTMLTableCellElement;
        caixa.onclick= {""};
    } }
}

/* se a caixa estiver fechada, vai colocar uma bandeira, se for uma bandeira, vai abrir a caixa! */
@JsName("abrirCelula")
fun abrirCelula(pos: String){
    val caixa = getElement(pos) as HTMLTableCellElement

    /* dependendo do numero de minas que tiver ao redor, vai mudar a classe para colorir os numeros! */
    if (caixa.textContent.toString().equals("0")) caixaBranco(pos.get(0).toString(), pos.get(1).toString())
    else if (caixa.textContent.toString().equals("*")) { //verifica se eh uma mina
        caixa.className = "mina-clicked"
        caixa.innerHTML = imagemMina()

        val j = generateSequence(0, {x -> x+1})
        val i = generateSequence(0, {x -> x+1})
        j.take(6).forEach { x -> i.take(6).forEach { y ->
            val minaRest = document.getElementById(x.toString() + y.toString()) as HTMLTableCellElement

            if (minaRest.textContent.toString().equals("*")) {
                minaRest.className = "mina"
                minaRest.innerHTML = imagemMina()
            }
        } }
        resultadoJogo(false)
    } else caixaCliked(caixa)

    if(verificaGanhador()) resultadoJogo(true) //se retornar true eh pq ganhou
}

/*metodo para verificar se ganhou o jogo (percorre toda a matriz (desenho acima da main),
  se tiver uma caixa com a classe "caixaFechada" e seja diferente de mina ('*') já muda para false, ou seja, não ganhou.
  Caso ele percorra toda a matriz e não mude para false, significa que só exitem as
  caixas fechadas com minas no campo */
fun verificaGanhador(): Boolean{
    val j = generateSequence(0, {x -> x+1})
    val i = generateSequence(0, {x -> x+1})
    j.take(6).forEach { x -> i.take(6).forEach {  y ->
        val caixa = getElement(x.toString() + y.toString()) as HTMLTableCellElement

        if(caixa.className.equals("caixaFechada") && !caixa.textContent.toString().equals("*")) return false
    } }
    return true
}

//funcao para deixar os numeros com cor (CSS)
fun caixaCliked(x: HTMLTableCellElement){
    if(x.textContent.toString().equals("1")) x.className = "clicked num1"
    else if(x.textContent.toString().equals("2")) x.className = "clicked num2"
    else if(x.textContent.toString().equals("3")) x.className = "clicked num3"
    else if(x.textContent.toString().equals("4")) x.className = "clicked num4"
    else if(x.textContent.toString().equals("5")) x.className = "clicked num5"
    else if(x.textContent.toString().equals("6")) x.className = "clicked num6"
}

/*eh utilizado na funcao recursiva abaixo, para saber quais caixa já foram verificadas,
  dessa forma a funcao não entra em loop infinito!!! */
val minasExist = mutableSetOf<String>()

/* funcao recursiva, responsavel por abrir as caixas com valor '0', ou seja, sem minas ao redor....

   IDEIA: verifica todos as caixas ao redor, se houver caixas com 0, faz a recursividade entrando em cada uma delas,
   quando for voltando da recursividade vai abrindo todas as caixas ao redor da caixa principal naquela recursao.
   OBS: Utilizar um array de int foi a unica maneira de evitar que a recursao entre em um loop infinito entre duas caixas,
   pois ele só entra em determinada caixa se ela não estiver no array, ou seja, não volta para uma recursao que ja foi feita */
fun caixaBranco(y: String, x: String) {

    val caixa = getElement(y + x) as HTMLTableCellElement
    val j = y.toInt()
    val i = x.toInt()

    minasExist.add(y + x) //adiciona a posicao da caixa, como tratasse de um set, nao aceita repeticao

    caixa.className = "clicked num0" //deixando a caixa sem informacao (CSS)

    if ((j - 1) >= 0 && (i - 1) >= 0 && getElement((j - 1).toString() + (i - 1).toString()).textContent.equals("0") &&
            !minasExist.contains((j - 1).toString() + (i - 1).toString())) {

        caixaBranco((j - 1).toString(), (i - 1).toString())
        abreCelulasRedor(j - 1, i - 1)
    }
    if ((j - 1) >= 0 && getElement((j - 1).toString() + i.toString()).textContent.equals("0") &&
            !minasExist.contains((j - 1).toString() + i.toString())) {

        caixaBranco((j - 1).toString(), i.toString())
        abreCelulasRedor(j - 1, i)
    }
    if ((j - 1) >= 0 && (i + 1) <= 5 && getElement((j - 1).toString() + (i + 1).toString()).textContent.equals("0") &&
            !minasExist.contains((j - 1).toString() + (i + 1).toString())) {

        caixaBranco((j - 1).toString(), (i + 1).toString())
        abreCelulasRedor(j - 1, i + 1)
    }
    if ((i - 1) >= 0 && getElement(j.toString() + (i - 1).toString()).textContent.equals("0") &&
            !minasExist.contains(j.toString() + (i - 1).toString())) {

        caixaBranco(j.toString(), (i - 1).toString())
        abreCelulasRedor(j, i - 1)
    }
    if ((i + 1) <= 5 && getElement(j.toString() + (i + 1).toString()).textContent.equals("0") &&
            !minasExist.contains(j.toString() + (i + 1).toString())) {

        caixaBranco(j.toString(), (i + 1).toString())
        abreCelulasRedor(j, i + 1)
    }
    if ((j + 1) <= 5 && (i - 1) >= 0 && getElement((j + 1).toString() + (i - 1).toString()).textContent.equals("0") &&
            !minasExist.contains((j + 1).toString() + (i - 1).toString())) {

        caixaBranco((j + 1).toString(), (i - 1).toString())
        abreCelulasRedor(j + 1, i - 1)
    }
    if ((j + 1) <= 5 && getElement((j + 1).toString() + i.toString()).textContent.equals("0") &&
            !minasExist.contains((j + 1).toString() + i.toString())) {

        caixaBranco((j + 1).toString(), i.toString())
        abreCelulasRedor(j + 1, i)
    }
    if ((j + 1) <= 5 && (i + 1) >= 0 && (i + 1) <= 5 && getElement((j + 1).toString() + (i + 1).toString()).textContent.equals("0") &&
            !minasExist.contains((j + 1).toString() + (i + 1).toString())) {

        caixaBranco((j + 1).toString(), (i + 1).toString())
        abreCelulasRedor(j + 1, i + 1)
    }
    abreCelulasRedor(j, i)
}

//verifica se a posicao nao esta fora da matrix antes de abrir caixas ao redor
fun abreCelulasRedor(j: Int, i: Int){
    if ((j - 1) >= 0 && (i - 1) >= 0) caixaCliked(getElement((j-1).toString() + (i-1).toString()) as HTMLTableCellElement)
    if ((j - 1) >= 0) caixaCliked(getElement((j-1).toString() + i.toString()) as HTMLTableCellElement)
    if ((j - 1) >= 0 && (i + 1) <= 5) caixaCliked(getElement((j-1).toString() + (i+1).toString()) as HTMLTableCellElement)
    if ((i - 1) >= 0) caixaCliked(getElement(j.toString() + (i-1).toString()) as HTMLTableCellElement)
    if ((i + 1) <= 5) caixaCliked(getElement(j.toString() + (i+1).toString()) as HTMLTableCellElement)
    if ((j + 1) <= 5 && (i - 1) >= 0) caixaCliked(getElement((j+1).toString() + (i-1).toString()) as HTMLTableCellElement)
    if ((j + 1) <= 5) caixaCliked(getElement((j+1).toString() + i.toString()) as HTMLTableCellElement)
    if ((j + 1) <= 5 && (i + 1) >= 0 && (i + 1) <= 5) caixaCliked(getElement((j+1).toString() + (i+1).toString()) as HTMLTableCellElement)
}

fun criaMinasCampo(numMinas: Int){
    if(numMinas != 0) {
        val minaY = Random.nextInt(0, 5)
        val minaX = Random.nextInt(0, 5)

        val caixa = getElement(minaY.toString() + minaX.toString())

        //so vai adicinar * caso ainda não haja mina naquela posicao
        if (!caixa.textContent.equals("*")) {
            caixa.innerHTML = "*"
            criaMinasCampo(numMinas - 1)
        } else criaMinasCampo(numMinas)
    }
}

fun varreCampo(){
    val x = generateSequence(0, {x -> x+1})
    val y = generateSequence(0, {y -> y+1})
    x.take(6).forEach { j -> y.take(6).forEach {  i ->
        val caixa = getElement(j.toString() + i.toString())

        //se for uma mina ('*'), verifica se esta dentro da matriz (j && i >= 0 e j && i<= 5)
        if(!caixa.textContent.equals("*")) {
            if ((j - 1) >= 0 && (i - 1) >= 0 &&
                    document.getElementById((j - 1).toString() + (i - 1).toString())?.textContent.equals("*"))
                caixa.innerHTML = ((caixa.textContent)!!.toInt() + 1).toString()

            if ((j - 1) >= 0 &&
                    document.getElementById((j - 1).toString() + (i).toString())?.textContent.equals("*"))
                caixa.innerHTML = ((caixa.textContent)!!.toInt() + 1).toString()

            if ((j - 1) >= 0 && (i + 1) <= 5 &&
                    document.getElementById((j - 1).toString() + (i + 1).toString())?.textContent.equals("*"))
                caixa.innerHTML = ((caixa.textContent)!!.toInt() + 1).toString()

            if ((i - 1) >= 0 &&
                    document.getElementById((j).toString() + (i - 1).toString())?.textContent.equals("*"))
                caixa.innerHTML = ((caixa.textContent)!!.toInt() + 1).toString()

            if ((i + 1) <= 5 && document.getElementById((j).toString() + (i + 1).toString())?.textContent.equals("*")) {
                caixa.innerHTML = ((caixa.textContent)!!.toInt() + 1).toString()
            }
            if ((j + 1) <= 5 && (i - 1) >= 0 &&
                    document.getElementById((j + 1).toString() + (i - 1).toString())?.textContent.equals("*"))
                caixa.innerHTML = ((caixa.textContent)!!.toInt() + 1).toString()

            if ((j + 1) <= 5 &&
                    document.getElementById((j + 1).toString() + (i).toString())?.textContent.equals("*"))
                caixa.innerHTML = ((caixa.textContent)!!.toInt() + 1).toString()

            if ((j + 1) <= 5 && (i + 1) >= 0 &&
                    document.getElementById((j + 1).toString() + (i + 1).toString())?.textContent.equals("*"))
                caixa.innerHTML = ((caixa.textContent)!!.toInt() + 1).toString()
        }
    } }
}

fun informaNumMinas(num: Int){
    val info = getElement("infoJogo") as HTMLDivElement
    info.innerHTML += """
        : ${num}
    """.trimIndent()
}

/*
  COMO FUNCIONA A LOGICA DO JOGO:
  yx | yx | yx | yx | yx | yx
  00 | 01 | 02 | 03 | 04 | 05
  10 | 11 | 12 | 13 | 14 | 15
  20 | 21 | 22 | 23 | 24 | 25
  30 | 31 | 32 | 33 | 34 | 35
  40 | 41 | 42 | 43 | 44 | 45
  50 | 51 | 52 | 53 | 54 | 55

  essa é a matriz do jogo, para que nao haja problemas na hora que verificar se existem bolas ao redor,
  é preciso verificar se:
  -> y >= 0 e y <= 5
  -> x >= 0 e x <= 5
 */
fun main() {
    val numDeMinas = 8

    informaNumMinas(numDeMinas) //mostra quantas minas existem no campo

    criaMinasCampo(numDeMinas) //para criar minas aleatorias no campo

    varreCampo() //varre caixa por caixa para ver quantas minas existem ao redor
}