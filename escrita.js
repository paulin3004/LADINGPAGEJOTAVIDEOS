var paragrafo = document.getElementById('apresentation')
var texto = paragrafo.innerHTML.split('')
var index = 0

console.log(texto.length)

function escrever(){
    paragrafo.innerHTML = paragrafo.innerHTML.replace('|','')
    if(texto.length > index){
        if(index == 0){
            paragrafo.innerHTML = texto[index]
        }else{
            paragrafo.innerHTML += texto[index]
        }
        index++
        paragrafo.innerHTML += '|'
        setTimeout(escrever, 30)
    }
}
escrever()

