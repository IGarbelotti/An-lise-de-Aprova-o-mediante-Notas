var n = document.getElementById("nota")
var f = document.getElementById("faltas")
var r = document.getElementById("resultado")

function verificar(){
var nValor = n.value 
var fValor = f.value

if(nValor>=6 && fValor<10){
    r.innerText = "Parabéns você foi Aprovado(a)!"
    r.style.cssText = 
    'color: black;' +
    'background: #3CB371;' +
    'border: 1px solid black;' 

}
else if(nValor>=5 && fValor<10){
    r.innerText = "Você está de Recuperação!"
    r.style.cssText = 
    'color: black;' +
    'background: #FF7F50;' +
    'border: 1px solid black;' 
}
else{
    r.innerText = "Reprovado(a). Poxa, não foi dessa vez!!"
    r.style.cssText = 
    'color: black;' +
    'background: #B22222;' +
    'border: 1px solid black;' 
}
//r.innerText = "nota: " + nValor + " e faltas: " + fValor
}