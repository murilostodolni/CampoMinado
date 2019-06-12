import org.w3c.dom.*
import org.w3c.dom.events.MouseEvent
import kotlin.browser.document
import kotlin.random.Random

fun imagemMina() = """<img width="30" height="30" src="img/bomba.png"/>"""

fun imagemBandeira() = """<img width="30" height="30" src="img/bandeira.png"/>"""

@JsName("posivelMina")
fun posivelMina(pos: String){
    val x = document.getElementById(pos) as HTMLTableCellElement

    //x.className="mina-clicked"
    x.innerHTML = imagemBandeira()
}

fun gameOver(){
    val info = document.getElementById("infoJogo") as HTMLDivElement
    info.innerHTML = """Perdeu :("""

    desabilitaCliqueMouse()
}

fun venceu(){
    val info = document.getElementById("infoJogo") as HTMLDivElement
    info.innerHTML = """Ganhou :)"""

    desabilitaCliqueMouse()
}

/*Funcao responsavel por bloquear cliques apos ganhar ou perder a partida */
fun desabilitaCliqueMouse(){
    for(i in 1..36){
        val caixa = document.getElementById(i.toString()) as HTMLTableCellElement

        caixa.onclick= {""}
    }
}

@JsName("abrirCelula")
fun abrirCelula(pos: String){
    val x = document.getElementById(pos) as HTMLTableCellElement

    /*dependendo do numero de minas que tiver ao redor,
      vai mudar a classe para colorir os numeros!
     */
    if(x.textContent.toString().equals("0")){
        caixaBranco(pos, numMinas)
    } else if(x.textContent.toString().equals("*")){ //verifica se eh uma mina
        x.className="mina-clicked"
        x.innerHTML = imagemMina()

        for(i in 1..36){
            val minaRest = document.getElementById(i.toString()) as HTMLTableCellElement

            if(minaRest.textContent.toString().equals("*")) {
                minaRest.className = "mina"
                minaRest.innerHTML = imagemMina()
            }
        }

        gameOver()

    } else caixaNumero(x)

    verificaGanhador()
}

/*metodo para verificar se ganhou o jogo (percorre a matriz de 1 a 36,
  se tiver uma casa diferente de '*' já muda para false, ou seja, não ganhou.
  Caso ele percorra as 36 caixas e não mude para false, siginifica que só exitem as
  caixas fechadas com minas no campo
 */
fun verificaGanhador(){
    var isMina = true
    for(i in 1..36){
        val caixa = document.getElementById(i.toString()) as HTMLTableCellElement

        if(caixa.className.equals("caixaFechada") && !caixa.textContent.toString().equals("*")){
            isMina = false
            break
        }
    }

    //TODO da para fazer se for == 37 (nesse caso não precisa usar boolean)
    //envia para a div do html que o jogador ganhou
    if(isMina == true){
        venceu()
    }

}

//funcao para deixar os numeros com cor (CSS)
fun caixaNumero(x: HTMLTableCellElement){
    if(x.textContent.toString().equals("1")) x.className = "clicked num1"
    if(x.textContent.toString().equals("2")) x.className = "clicked num2"
    if(x.textContent.toString().equals("3")) x.className = "clicked num3"
    if(x.textContent.toString().equals("4")) x.className = "clicked num4"
    if(x.textContent.toString().equals("5")) x.className = "clicked num5"
    if(x.textContent.toString().equals("6")) x.className = "clicked num6"
}

/*eh utilizado na funcao recursiva abaixo, para saber quais caixa já foram verificadas,
  dessa forma a funcao não entra em loop infinito!!!
 */
var numMinas = IntArray(36, {0})

/* funcao recursiva, responsavel por abrir as caixas com valor '0', ou seja,
   sem minas ao redor....

   IDEIA: verifica todos as caixas ao redor, se houver caixas com 0, faz a recursividade entrando em casa uma delas,
   quando for voltando da recursividade vai abrindo todas as caixas ao redor da caixa principal naquela recursão.
   OBS: Utilizar um array de int foi a unica maneira de evitar que a recursao entre em um loop infinito entre duas caixas,
   pois ele só entra em determinada caixa se ela não estiver no array, ou seja, não esa amarrada em nenhuma recursão para trás...
*/
fun caixaBranco(i: String, numAnt: IntArray) {
    val caixa = document.getElementById(i) as HTMLTableCellElement

    /* metodo para percorrer matriz e verificar se existem bombas da forma abaixo
        caixa1 | caixa2 | caixa3
        caixa4 |  caixa | caixa5
        caixa6 | caixa7 | caixa8
     */
    val n = i.toInt()

    println(n)

    if(!numMinas.contains(n)) numMinas.set(n, n)

    val caixa1 = document.getElementById((n - 7).toString())
    val caixa2 = document.getElementById((n - 6).toString())
    val caixa3 = document.getElementById((n - 5).toString())
    val caixa4 = document.getElementById((n - 1).toString())
    val caixa5 = document.getElementById((n + 1).toString())
    val caixa6 = document.getElementById((n + 5).toString())
    val caixa7 = document.getElementById((n + 6).toString())
    val caixa8 = document.getElementById((n + 7).toString())

    //deixando a caixa sem informacao (CSS)
    caixa.className = "clicked num0"

        if(n == 1){
            if (caixa5!!.textContent.equals("0") && !numMinas.contains(n + 1)) caixaBranco((n + 1).toString(), numAnt)
            if (caixa7!!.textContent.equals("0") && !numMinas.contains(n + 6)) caixaBranco((n + 6).toString(), numAnt)
            if (caixa8!!.textContent.equals("0") && !numMinas.contains(n + 7)) caixaBranco((n + 7).toString(), numAnt)

            caixaNumero(caixa5 as HTMLTableCellElement)
            caixaNumero(caixa7 as HTMLTableCellElement)
            caixaNumero(caixa8 as HTMLTableCellElement)
        } else if(n == 2 || n == 3 || n == 4 || n == 5){
            if (caixa4!!.textContent.equals("0") && !numMinas.contains(n - 1)) caixaBranco((n - 1).toString(), numAnt)
            if (caixa5!!.textContent.equals("0") && !numMinas.contains(n + 1)) caixaBranco((n + 1).toString(), numAnt)
            if (caixa6!!.textContent.equals("0") && !numMinas.contains(n + 5)) caixaBranco((n + 5).toString(), numAnt)
            if (caixa7!!.textContent.equals("0") && !numMinas.contains(n + 6)) caixaBranco((n + 6).toString(), numAnt)
            if (caixa8!!.textContent.equals("0") && !numMinas.contains(n + 7)) caixaBranco((n + 7).toString(), numAnt)

            caixaNumero(caixa4 as HTMLTableCellElement)
            caixaNumero(caixa5 as HTMLTableCellElement)
            caixaNumero(caixa6 as HTMLTableCellElement)
            caixaNumero(caixa7 as HTMLTableCellElement)
            caixaNumero(caixa8 as HTMLTableCellElement)
        } else if(n == 7 || n == 13 || n == 19 || n == 25){
            if (caixa2!!.textContent.equals("0") && !numMinas.contains(n - 6)) caixaBranco((n - 6).toString(), numAnt)
            if (caixa3!!.textContent.equals("0") && !numMinas.contains(n - 5)) caixaBranco((n - 5).toString(), numAnt)
            if (caixa5!!.textContent.equals("0") && !numMinas.contains(n + 1)) caixaBranco((n + 1).toString(), numAnt)
            if (caixa7!!.textContent.equals("0") && !numMinas.contains(n + 6)) caixaBranco((n + 6).toString(), numAnt)
            if (caixa8!!.textContent.equals("0") && !numMinas.contains(n + 7)) caixaBranco((n + 7).toString(), numAnt)

            caixaNumero(caixa2 as HTMLTableCellElement)
            caixaNumero(caixa3 as HTMLTableCellElement)
            caixaNumero(caixa5 as HTMLTableCellElement)
            caixaNumero(caixa7 as HTMLTableCellElement)
            caixaNumero(caixa8 as HTMLTableCellElement)
        } else if(n == 6){
            if (caixa4!!.textContent.equals("0") && !numMinas.contains(n - 1)) caixaBranco((n - 1).toString(), numAnt)
            if (caixa6!!.textContent.equals("0") && !numMinas.contains(n + 5)) caixaBranco((n + 5).toString(), numAnt)
            if (caixa7!!.textContent.equals("0") && !numMinas.contains(n + 6)) caixaBranco((n + 6).toString(), numAnt)

            caixaNumero(caixa4 as HTMLTableCellElement)
            caixaNumero(caixa6 as HTMLTableCellElement)
            caixaNumero(caixa7 as HTMLTableCellElement)
        } else if(n == 12 || n == 18 || n == 24 || n == 30){
            if (caixa1!!.textContent.equals("0") && !numMinas.contains(n - 7)) caixaBranco((n - 7).toString(), numAnt)
            if (caixa2!!.textContent.equals("0") && !numMinas.contains(n - 6)) caixaBranco((n - 6).toString(), numAnt)
            if (caixa4!!.textContent.equals("0") && !numMinas.contains(n - 1)) caixaBranco((n - 1).toString(), numAnt)
            if (caixa6!!.textContent.equals("0") && !numMinas.contains(n + 5)) caixaBranco((n + 5).toString(), numAnt)
            if (caixa7!!.textContent.equals("0") && !numMinas.contains(n + 5)) caixaBranco((n + 6).toString(), numAnt)

            caixaNumero(caixa1 as HTMLTableCellElement)
            caixaNumero(caixa2 as HTMLTableCellElement)
            caixaNumero(caixa4 as HTMLTableCellElement)
            caixaNumero(caixa6 as HTMLTableCellElement)
            caixaNumero(caixa7 as HTMLTableCellElement)
        } else if(n == 32 || n == 33 || n == 34 || n == 35){
            if (caixa1!!.textContent.equals("0") && !numMinas.contains(n - 7)) caixaBranco((n - 7).toString(), numAnt)
            if (caixa2!!.textContent.equals("0") && !numMinas.contains(n - 6)) caixaBranco((n - 6).toString(), numAnt)
            if (caixa3!!.textContent.equals("0") && !numMinas.contains(n - 5)) caixaBranco((n - 5).toString(), numAnt)
            if (caixa4!!.textContent.equals("0") && !numMinas.contains(n - 1)) caixaBranco((n - 1).toString(), numAnt)
            if (caixa5!!.textContent.equals("0") && !numMinas.contains(n + 1)) caixaBranco((n + 1).toString(), numAnt)

            caixaNumero(caixa1 as HTMLTableCellElement)
            caixaNumero(caixa2 as HTMLTableCellElement)
            caixaNumero(caixa3 as HTMLTableCellElement)
            caixaNumero(caixa4 as HTMLTableCellElement)
            caixaNumero(caixa5 as HTMLTableCellElement)
        } else if(n == 31){
            if (caixa2!!.textContent.equals("0") && !numMinas.contains(n - 6)) caixaBranco((n - 6).toString(), numAnt)
            if (caixa3!!.textContent.equals("0") && !numMinas.contains(n - 5)) caixaBranco((n - 5).toString(), numAnt)
            if (caixa5!!.textContent.equals("0") && !numMinas.contains(n + 1)) caixaBranco((n + 1).toString(), numAnt)

            caixaNumero(caixa2 as HTMLTableCellElement)
            caixaNumero(caixa3 as HTMLTableCellElement)
            caixaNumero(caixa5 as HTMLTableCellElement)
        } else if(n == 36){
            if (caixa1!!.textContent.equals("0") && !numMinas.contains(n - 7)) caixaBranco((n - 7).toString(), numAnt)
            if (caixa2!!.textContent.equals("0") && !numMinas.contains(n - 6)) caixaBranco((n - 6).toString(), numAnt)
            if (caixa4!!.textContent.equals("0") && !numMinas.contains(n - 1)) caixaBranco((n - 1).toString(), numAnt)

            caixaNumero(caixa1 as HTMLTableCellElement)
            caixaNumero(caixa2 as HTMLTableCellElement)
            caixaNumero(caixa4 as HTMLTableCellElement)
        } else {
            if (caixa1!!.textContent.equals("0") && !numMinas.contains(n - 7)) caixaBranco((n - 7).toString(), numAnt)
            if (caixa2!!.textContent.equals("0") && !numMinas.contains(n - 6)) caixaBranco((n - 6).toString(), numAnt)
            if (caixa3!!.textContent.equals("0") && !numMinas.contains(n - 5)) caixaBranco((n - 5).toString(), numAnt)
            if (caixa4!!.textContent.equals("0") && !numMinas.contains(n - 1)) caixaBranco((n - 1).toString(), numAnt)
            if (caixa5!!.textContent.equals("0") && !numMinas.contains(n + 1)) caixaBranco((n + 1).toString(), numAnt)
            if (caixa6!!.textContent.equals("0") && !numMinas.contains(n + 5)) caixaBranco((n + 5).toString(), numAnt)
            if (caixa7!!.textContent.equals("0") && !numMinas.contains(n + 6)) caixaBranco((n + 6).toString(), numAnt)
            if (caixa8!!.textContent.equals("0") && !numMinas.contains(n + 7)) caixaBranco((n + 7).toString(), numAnt)

            caixaNumero(caixa1 as HTMLTableCellElement)
            caixaNumero(caixa2 as HTMLTableCellElement)
            caixaNumero(caixa3 as HTMLTableCellElement)
            caixaNumero(caixa4 as HTMLTableCellElement)
            caixaNumero(caixa5 as HTMLTableCellElement)
            caixaNumero(caixa6 as HTMLTableCellElement)
            caixaNumero(caixa7 as HTMLTableCellElement)
            caixaNumero(caixa8 as HTMLTableCellElement)
        }

}

fun criaMinasCampo(numMinas: Int){
    if(numMinas == 0)
        return
    else {
        val mina = Random.nextInt(1, 36)

        val caixa = document.getElementById(mina.toString())

        //so vai adicinar * caso nao haja mina ali
        if (!caixa?.textContent.equals("*")) {
            caixa!!.innerHTML = "*"
            criaMinasCampo(numMinas - 1)
        } else criaMinasCampo(numMinas)
    }
}

/*
  COMO FUNCIONA A LOGICA DO JOGO:
  1  | 2  | 3  | 4  | 5  | 6
  7  | 8  | 9  | 10 | 11 | 12
  13 | 14 | 15 | 16 | 17 | 18
  19 | 20 | 21 | 22 | 23 | 24
  25 | 26 | 27 | 28 | 29 | 30
  31 | 32 | 33 | 34 | 35 | 36

  essa é a matriz do jogo, para que nao haja problemas na hora que verificar se existem bolas ao redor,
  é preciso divir as caixas, pois existem restricoes diferentes...
  -> 1 verifica apenas 2 (+1), 7 (+6) e 8 (+7)
  -> 7, 13, 19, 25 verificam apenas -6, -5, +1, +6 e +7
  -> 31 verifica apenas -6, -5 e + 1
  -> 6 igual ao 1 (ao contrario)
  -> 36 igual ao 31 (ao contrario)
  -> 12, 18, 24 e 30 igual 7, 13....
  -> o resto é tudo indiferente, ou seja, tem que verificar todas as caixa ao redor (-7, -6, -5, -1, +1, +5, +6 e +7)

 */
fun main() {
    val numDeMinas = 7

    //para criar minas no campo
    criaMinasCampo(numDeMinas)

    //TODO TENTAR FAZER UMA RECURSAO
    //percorre todas as caixas para verificar se existem minas ao redor
    for(i in 1..36){
        //caixa central
        val caixa = document.getElementById(i.toString())

        /* metodo para percorrer matriz e verificar se existem bombas da forma abaixo
            caixa1 | caixa2 | caixa3
            caixa4 |  caixa | caixa5
            caixa6 | caixa7 | caixa8
         */
        val caixa1 = document.getElementById((i - 7).toString())
        val caixa2 = document.getElementById((i - 6).toString())
        val caixa3 = document.getElementById((i - 5).toString())
        val caixa4 = document.getElementById((i - 1).toString())
        val caixa5 = document.getElementById((i + 1).toString())
        val caixa6 = document.getElementById((i + 5).toString())
        val caixa7 = document.getElementById((i + 6).toString())
        val caixa8 = document.getElementById((i + 7).toString())
        var numMinas = 0

        if(!caixa?.textContent.equals("*")) {
            if(i == 1){
                if (caixa5?.textContent.equals("*")) numMinas = numMinas + 1
                if (caixa7?.textContent.equals("*")) numMinas = numMinas + 1
                if (caixa8?.textContent.equals("*")) numMinas = numMinas + 1
            } else if(i == 7 || i == 13 || i == 19 || i == 25){
                if (caixa2?.textContent.equals("*")) numMinas = numMinas + 1
                if (caixa3?.textContent.equals("*")) numMinas = numMinas + 1
                if (caixa5?.textContent.equals("*")) numMinas = numMinas + 1
                if (caixa7?.textContent.equals("*")) numMinas = numMinas + 1
                if (caixa8?.textContent.equals("*")) numMinas = numMinas + 1
            } else if(i == 6){
                if (caixa4?.textContent.equals("*")) numMinas = numMinas + 1
                if (caixa6?.textContent.equals("*")) numMinas = numMinas + 1
                if (caixa7?.textContent.equals("*")) numMinas = numMinas + 1
            } else if(i == 12 || i == 18 || i == 24 || i == 30){
                if (caixa1?.textContent.equals("*")) numMinas = numMinas + 1
                if (caixa2?.textContent.equals("*")) numMinas = numMinas + 1
                if (caixa4?.textContent.equals("*")) numMinas = numMinas + 1
                if (caixa6?.textContent.equals("*")) numMinas = numMinas + 1
                if (caixa7?.textContent.equals("*")) numMinas = numMinas + 1
            } else if(i == 32 || i == 33 || i == 34 || i == 35){
                if (caixa1?.textContent.equals("*")) numMinas = numMinas + 1
                if (caixa2?.textContent.equals("*")) numMinas = numMinas + 1
                if (caixa3?.textContent.equals("*")) numMinas = numMinas + 1
                if (caixa4?.textContent.equals("*")) numMinas = numMinas + 1
                if (caixa5?.textContent.equals("*")) numMinas = numMinas + 1
            } else if(i == 31){
                if (caixa2?.textContent.equals("*")) numMinas = numMinas + 1
                if (caixa3?.textContent.equals("*")) numMinas = numMinas + 1
                if (caixa5?.textContent.equals("*")) numMinas = numMinas + 1
            } else if(i == 36){
                if (caixa1?.textContent.equals("*")) numMinas = numMinas + 1
                if (caixa2?.textContent.equals("*")) numMinas = numMinas + 1
                if (caixa4?.textContent.equals("*")) numMinas = numMinas + 1
            } else {
                if (caixa1?.textContent.equals("*")) numMinas = numMinas + 1
                if (caixa2?.textContent.equals("*")) numMinas = numMinas + 1
                if (caixa3?.textContent.equals("*")) numMinas = numMinas + 1
                if (caixa4?.textContent.equals("*")) numMinas = numMinas + 1
                if (caixa5?.textContent.equals("*")) numMinas = numMinas + 1
                if (caixa6?.textContent.equals("*")) numMinas = numMinas + 1
                if (caixa7?.textContent.equals("*")) numMinas = numMinas + 1
                if (caixa8?.textContent.equals("*")) numMinas = numMinas + 1
            }

            caixa!!.innerHTML = numMinas.toString()
        }
    }
}