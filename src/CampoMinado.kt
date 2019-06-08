import org.w3c.dom.*
import kotlin.browser.document
import kotlin.random.Random

fun descobrir(pos: String){
    var x = document.getElementById(pos) as HTMLTableCellElement

    println(x.textContent)
}

@JsName("abrirCelula")
fun abrirCelula(pos: String){
    var x = document.getElementById(pos) as HTMLTableCellElement

    println(x.textContent)
}

//val tabela = document.getElementById("table") as HTMLElement

fun main() {

    for(j in 1..36){
        val caixa = document.getElementById(j.toString())

        caixa!!.innerHTML = "0"
    }

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

    for(i in 1..36){
        val caixa = document.getElementById(i.toString())
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