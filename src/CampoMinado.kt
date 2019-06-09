import org.w3c.dom.*
import kotlin.browser.document
import kotlin.random.Random

@JsName("abrirCelula")
fun abrirCelula(pos: String){
    var x = document.getElementById(pos)

    if(x!!.textContent.toString().equals("*")) x.innerHTML = """<img class="mina" src="img/mina.png"/>"""

    if(x!!.textContent.toString().equals("1")) x!!.className = "clicked1"
    if(x!!.textContent.toString().equals("2")) x!!.className = "clicked2"
    if(x!!.textContent.toString().equals("3")) x!!.className = "clicked3"
    if(x!!.textContent.toString().equals("4")) x!!.className = "clicked4"
    if(x!!.textContent.toString().equals("5")) x!!.className = "clicked5"
    if(x!!.textContent.toString().equals("6")) x!!.className = "clicked6"


}

fun main() {

    //para criar minar no campo
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