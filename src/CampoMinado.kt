import org.w3c.dom.*
import org.w3c.dom.events.MouseEvent
import kotlin.browser.document
import kotlin.random.Random

fun imagemMina() = """<img width="30" height="30" src="img/bomba.png"/>"""

fun imagemBandeira() = """<img width="30" height="30" src="img/bandeira.png"/>"""

//TODO tentar fazer bandeira
@JsName("posivelMina")
fun posivelMina(pos: String){
    val x = document.getElementById(pos) as HTMLTableCellElement

    //x.className="mina-clicked"
    x.innerHTML = imagemBandeira()
}

fun resultadoJogo(result: Boolean){
    val info = document.getElementById("resultJogo") as HTMLDivElement

    if(result){
        info.innerHTML = """Ganhou :)
        <p>
    """.trimMargin()
    } else {
        info.innerHTML = """Perdeu :(
        <p>
    """.trimMargin()
    }
    info.innerHTML += "<a href=\"campo-minado.html\"><button onclick=\"campo-minado.html\">Jogar Novamente</button></a>"

    desabilitaCliqueMouse()
}

/*Funcao responsavel por bloquear cliques apos ganhar ou perder a partida */
fun desabilitaCliqueMouse(){
    for(j in 0..5){
        for(i in 0..5){
            val caixa = document.getElementById(j.toString() + i.toString()) as HTMLTableCellElement
            caixa.onclick= {""}
        }
    }
}

@JsName("abrirCelula")
fun abrirCelula(pos: String){
    val x = document.getElementById(pos) as HTMLTableCellElement

    /*dependendo do numero de minas que tiver ao redor,
      vai mudar a classe para colorir os numeros!
     */
    if(x.textContent.toString().equals("0")) caixaBranco(pos.get(0).toString(), pos.get(1).toString())

    else if(x.textContent.toString().equals("*")){ //verifica se eh uma mina
        x.className="mina-clicked"
        x.innerHTML = imagemMina()

        for(j in 0..5){
            for(i in 0..5){
                val minaRest = document.getElementById(j.toString() + i.toString()) as HTMLTableCellElement

                if(minaRest.textContent.toString().equals("*")) {
                    minaRest.className = "mina"
                    minaRest.innerHTML = imagemMina()
                }
            }
        }

        resultadoJogo(false)

    } else caixaNumero(x)

    verificaGanhador()
}

/*metodo para verificar se ganhou o jogo (percorre toda a matriz (desenho acima da main),
  se tiver uma caixa com a classe "caixaFechada" e seja diferente de mina ('*') já muda para false, ou seja, não ganhou.
  Caso ele percorra toda a matriz e não mude para false, significa que só exitem as
  caixas fechadas com minas no campo
 */
fun verificaGanhador(){
    var isMina = true
    for(j in 0..5){
        for(i in 0..5){
            val caixa = document.getElementById(j.toString() + i.toString()) as HTMLTableCellElement

            if(caixa.className.equals("caixaFechada") && !caixa.textContent.toString().equals("*")){
                isMina = false
                break
            }
        }
    }

    //TODO da para fazer se for == 37 (nesse caso não precisa usar boolean)
    //envia para a div do html que o jogador ganhou
    if(isMina == true){
        resultadoJogo(true)
    }

}

//funcao para deixar os numeros com cor (CSS)
fun caixaNumero(x: HTMLTableCellElement){
    if(x.textContent.toString().equals("1")) x.className = "clicked num1"
    else if(x.textContent.toString().equals("2")) x.className = "clicked num2"
    else if(x.textContent.toString().equals("3")) x.className = "clicked num3"
    else if(x.textContent.toString().equals("4")) x.className = "clicked num4"
    else if(x.textContent.toString().equals("5")) x.className = "clicked num5"
    else if(x.textContent.toString().equals("6")) x.className = "clicked num6"
}

/*eh utilizado na funcao recursiva abaixo, para saber quais caixa já foram verificadas,
  dessa forma a funcao não entra em loop infinito!!!
 */
var minasExist = mutableListOf<String>()

/* funcao recursiva, responsavel por abrir as caixas com valor '0', ou seja,
   sem minas ao redor....

   IDEIA: verifica todos as caixas ao redor, se houver caixas com 0, faz a recursividade entrando em cada uma delas,
   quando for voltando da recursividade vai abrindo todas as caixas ao redor da caixa principal naquela recursao.
   OBS: Utilizar um array de int foi a unica maneira de evitar que a recursao entre em um loop infinito entre duas caixas,
   pois ele só entra em determinada caixa se ela não estiver no array, ou seja, não volta para uma recursao que ja foi feita.
*/
fun caixaBranco(y: String, x: String) {

    val caixa = document.getElementById(y + x) as HTMLTableCellElement
    val j = y.toInt()
    val i = x.toInt()

    if(!minasExist.contains(y + x)) minasExist.add(y + x) //se o num nao ainda nao tiver na lista, adiciona

    caixa.className = "clicked num0" //deixando a caixa sem informacao (CSS)

    if ((j - 1) >= 0 && (i - 1) >= 0 &&
            document.getElementById((j - 1).toString() + (i - 1).toString())?.textContent.equals("0") &&
            !minasExist.contains((j - 1).toString() + (i - 1).toString())) {

        caixaBranco((j - 1).toString(), (i - 1).toString())
        abreCelulasRedor(j - 1, i - 1)
    }
    if ((j - 1) >= 0 &&
            document.getElementById((j - 1).toString() + i.toString())?.textContent.equals("0") &&
            !minasExist.contains((j - 1).toString() + i.toString())) {

        caixaBranco((j - 1).toString(), i.toString())
        abreCelulasRedor(j - 1, i)
    }
    if ((j - 1) >= 0 && (i + 1) <= 5 &&
            document.getElementById((j - 1).toString() + (i + 1).toString())?.textContent.equals("0") &&
            !minasExist.contains((j - 1).toString() + (i + 1).toString())) {

        caixaBranco((j - 1).toString(), (i + 1).toString())
        abreCelulasRedor(j - 1, i + 1)
    }
    if ((i - 1) >= 0 &&
            document.getElementById(j.toString() + (i - 1).toString())?.textContent.equals("0") &&
            !minasExist.contains(j.toString() + (i - 1).toString())) {

        caixaBranco(j.toString(), (i - 1).toString())
        abreCelulasRedor(j, i - 1)
    }
    if ((i + 1) <= 5 && document.getElementById(j.toString() + (i + 1).toString())?.textContent.equals("0") &&
            !minasExist.contains(j.toString() + (i + 1).toString())) {

        caixaBranco(j.toString(), (i + 1).toString())
       abreCelulasRedor(j, i + 1)
    }
    if ((j + 1) <= 5 && (i - 1) >= 0 &&
            document.getElementById((j + 1).toString() + (i - 1).toString())?.textContent.equals("0") &&
            !minasExist.contains((j + 1).toString() + (i - 1).toString())) {

        caixaBranco((j + 1).toString(), (i - 1).toString())
        abreCelulasRedor(j + 1, i - 1)
    }
    if ((j + 1) <= 5 &&
            document.getElementById((j + 1).toString() + i.toString())?.textContent.equals("0") &&
            !minasExist.contains((j + 1).toString() + i.toString())) {

        caixaBranco((j + 1).toString(), i.toString())
        abreCelulasRedor(j + 1, i)
    }
    if ((j + 1) <= 5 && (i + 1) >= 0 &&
            document.getElementById((j + 1).toString() + (i + 1).toString())?.textContent.equals("0") &&
            !minasExist.contains((j + 1).toString() + (i + 1).toString())) {

        caixaBranco((j + 1).toString(), (i + 1).toString())
        abreCelulasRedor(j + 1, i + 1)
    }
    abreCelulasRedor(j, i)
}

fun abreCelulasRedor(j: Int, i: Int){
    if ((j - 1) >= 0 && (i - 1) >= 0) caixaNumero(document.getElementById((j-1).toString() + (i-1).toString()) as HTMLTableCellElement)
    if ((j - 1) >= 0) caixaNumero(document.getElementById((j-1).toString() + i.toString()) as HTMLTableCellElement)
    if ((j - 1) >= 0 && (i + 1) <= 5) caixaNumero(document.getElementById((j-1).toString() + (i+1).toString()) as HTMLTableCellElement)
    if ((i - 1) >= 0) caixaNumero(document.getElementById(j.toString() + (i-1).toString()) as HTMLTableCellElement)
    if ((i + 1) <= 5) caixaNumero(document.getElementById(j.toString() + (i+1).toString()) as HTMLTableCellElement)
    if ((j + 1) <= 5 && (i - 1) >= 0) caixaNumero(document.getElementById((j+1).toString() + (i-1).toString()) as HTMLTableCellElement)
    if ((j + 1) <= 5) caixaNumero(document.getElementById((j+1).toString() + i.toString()) as HTMLTableCellElement)
    if ((j + 1) <= 5 && (i + 1) >= 0 && (i + 1) <= 5) caixaNumero(document.getElementById((j+1).toString() + (i+1).toString()) as HTMLTableCellElement)
}

fun criaMinasCampo(numMinas: Int){
    if(numMinas == 0)
        return
    else {
        val minay = Random.nextInt(0, 5)
        val minax = Random.nextInt(0, 5)

        val caixa = document.getElementById(minay.toString() + minax.toString())

        //so vai adicinar * caso nao haja mina ali
        if (!caixa?.textContent.equals("*")) {
            caixa!!.innerHTML = "*"
            criaMinasCampo(numMinas - 1)
        } else criaMinasCampo(numMinas)
    }
}

fun varreCampo(){
    //TODO TENTAR FAZER UMA RECURSAO
    //percorre todas as caixas para verificar se existem minas ao redor
    for(j in 0..5){
        for(i in 0..5){
            val caixa = document.getElementById(j.toString() + i.toString())

            //se for uma mina ('*'), verifica se esta dentro da matriz (j && i >= 0 e j && i<= 5)
            if(!caixa?.textContent.equals("*")) {
                if ((j - 1) >= 0 && (i - 1) >= 0 &&
                        document.getElementById((j - 1).toString() + (i - 1).toString())?.textContent.equals("*"))
                    caixa!!.innerHTML = ((caixa.textContent)!!.toInt() + 1).toString()

                if ((j - 1) >= 0 &&
                        document.getElementById((j - 1).toString() + (i).toString())?.textContent.equals("*"))
                    caixa!!.innerHTML = ((caixa.textContent)!!.toInt() + 1).toString()

                if ((j - 1) >= 0 && (i + 1) <= 5 &&
                        document.getElementById((j - 1).toString() + (i + 1).toString())?.textContent.equals("*"))
                    caixa!!.innerHTML = ((caixa.textContent)!!.toInt() + 1).toString()

                if ((i - 1) >= 0 &&
                        document.getElementById((j).toString() + (i - 1).toString())?.textContent.equals("*"))
                    caixa!!.innerHTML = ((caixa.textContent)!!.toInt() + 1).toString()

                if ((i + 1) <= 5 && document.getElementById((j).toString() + (i + 1).toString())?.textContent.equals("*")) {
                    caixa!!.innerHTML = ((caixa.textContent)!!.toInt() + 1).toString()
                }
                if ((j + 1) <= 5 && (i - 1) >= 0 &&
                        document.getElementById((j + 1).toString() + (i - 1).toString())?.textContent.equals("*"))
                    caixa!!.innerHTML = ((caixa.textContent)!!.toInt() + 1).toString()

                if ((j + 1) <= 5 &&
                        document.getElementById((j + 1).toString() + (i).toString())?.textContent.equals("*"))
                    caixa!!.innerHTML = ((caixa.textContent)!!.toInt() + 1).toString()

                if ((j + 1) <= 5 && (i + 1) >= 0 &&
                        document.getElementById((j + 1).toString() + (i + 1).toString())?.textContent.equals("*"))
                    caixa!!.innerHTML = ((caixa.textContent)!!.toInt() + 1).toString()
            }
        }
    }
}

fun informaNumMinas(num: Int){
    val info = document.getElementById("infoJogo") as HTMLDivElement
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
    val numDeMinas = 7

    //mostra quantas minas existem no campo
    informaNumMinas(numDeMinas)

    criaMinasCampo(numDeMinas) //para criar minas aleatorias no campo

    varreCampo() //varre caixa por caixa para ver quantas minas existem ao redor
}