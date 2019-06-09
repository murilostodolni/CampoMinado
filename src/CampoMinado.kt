import org.w3c.dom.*
import kotlin.browser.document
import kotlin.random.Random

@JsName("abrirCelula")
fun abrirCelula(pos: String){
    val x = document.getElementById(pos) as HTMLTableCellElement

    //se for uma mina, altera a classe para mina e manda a foto da mina para o html
    if(x.textContent.toString().equals("*")){
        x.className="mina"
        x.innerHTML = """<img width="50" height="50" src="img/bomba.png"/>"""
    }

    /*dependendo do numero de minas que tiver ao redor,
      vai mudar a classe para colorir os numeros!
     */
    if(x.textContent.toString().equals("0")) caixaBranco(pos, numMinas) else caixaNumero(x)


}

fun caixaNumero(x: HTMLTableCellElement){
    //if(x.textContent.toString().equals("0")) x.className = "clicked0"
    if(x.textContent.toString().equals("1")) x.className = "clicked1"
    if(x.textContent.toString().equals("2")) x.className = "clicked2"
    if(x.textContent.toString().equals("3")) x.className = "clicked3"
    if(x.textContent.toString().equals("4")) x.className = "clicked4"
    if(x.textContent.toString().equals("5")) x.className = "clicked5"
    if(x.textContent.toString().equals("6")) x.className = "clicked6"
}

var numMinas = IntArray(36, {0})

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

    caixa.className = "clicked0"

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

fun main() {

    //para criar minas no campo
    var k = 0
    while(k < 10){
        val mina = Random.nextInt(1,36)

        val caixa = document.getElementById(mina.toString())

        //so vai adicinar * caso nao haja mina ali
        if(!caixa?.textContent.equals("*")){
            caixa!!.innerHTML = "*"
            k = k + 1
        }
    }

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