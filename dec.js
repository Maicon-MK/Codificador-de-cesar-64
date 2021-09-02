
//Transforma número e letras.
//codificar/descodificar.

var saida = document.getElementById('saida')
var textusere = document.getElementById('textusere')
var numero = document.getElementById('numero')
var crip = document.getElementById('crip')
var descr = document.getElementById('descr')
var selecfunc = document.getElementById('selecfunc')
var botao = document.getElementById('botao')

botao.addEventListener('click', function () {
    var valor = textusere.value


    if (crip.checked) {


        if (selecfunc.value == '0') {

            saida.value = base64(valor)




        }
        else {
            saida.value = codificar(valor)
        }

    }
    else {
        if (selecfunc.value == '0') {

            saida.value = deco64(valor)




        }
        else {
            saida.value = decodificar(valor)
        }
    }
})





function codificar(dados) { //Vai codificar os dados que o usuário passar.
    //Entrada na array com os dados que o usuario forneceu.
    var resultado = ''
    var incremento = +numero.value //Recebe número  que ajuda a codificar.


    for (var i = 0; i < dados.length; i++) {//Estrutra do for e só no meio.

        if (dados[i].charCodeAt() >= 65 && dados[i].charCodeAt() <= 90) {
            console.log(dados[i])
            resultado += String.fromCharCode(((dados[i].charCodeAt() - 65 + incremento) % 26) + 65)


        }
        else if (dados[i].charCodeAt() >= 97 && dados[i].charCodeAt() <= 122) {

            resultado += String.fromCharCode(((dados[i].charCodeAt() - 97 + incremento) % 26) + 97)

        }

        else {
            resultado += dados[i]
        }
    }
    console.log(resultado)
    return resultado

}











function decodificar(dados) { //Saida do usuario
    var resultado = ''
    var incremento = +numero.value //Recebe número  que ajuda a codificar.


    for (var i = 0; i < dados.length; i++) {//Estrutra do for e só no meio.

        if (dados[i].charCodeAt() >= 65 && dados[i].charCodeAt() <= 90) {
            console.log(dados[i])
            resultado += String.fromCharCode(((dados[i].charCodeAt() - 90 - incremento) % 26) + 90)


        }
        else if (dados[i].charCodeAt() >= 97 && dados[i].charCodeAt() <= 122) {

            resultado += String.fromCharCode(((dados[i].charCodeAt() - 122 - incremento) % 26) + 122)

        }

        else {
            resultado += dados[i]
        }
    }
    console.log(resultado)
    return resultado


}



function base64(dados) {
    var cod = btoa(dados)
    return cod
}

function deco64(dados) {
    var deco = atob(dados)
    return deco
}




