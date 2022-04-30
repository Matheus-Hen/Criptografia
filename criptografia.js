document.getElementById('Seleciona').addEventListener("change", function () {
    var Selec = document.getElementById('Seleciona')
    if (Selec.options[0].selected) {
        var Text1 = document.querySelector('#Texts')
        var Verify = document.querySelector('#Incremento')
        if (Verify) return Verify.remove()
        var NewTextArea = document.createElement('input')
        Text1.append(NewTextArea)
        NewTextArea.id = "Incremento";
        NewTextArea.type = 'text'
        NewTextArea.placeholder = 'Insira o incremento'
    }
    else{
        var Verify = document.querySelector('#Incremento')
        if (Verify) return Verify.remove()
    }

}
)
var cripto = []
var Retorna = []
var NewWorld
var bin = []
document.getElementById('Codificar').addEventListener('click', function () {
    var Selec = document.getElementById('Seleciona')
    if (Selec.options[0].selected) {
        var Mensg = document.getElementById('Text1').value
        var incre = parseInt(document.getElementById('Incremento').value)
        var Mensagem = Mensg.split('')
        if (Mensg != null) {
            for (var i = 0; Mensagem.length > i; i++) {
                cripto[i] = Mensagem[i].charCodeAt(0)
                cripto[i] = cripto[i] + incre
                Retorna[i] = String.fromCharCode(cripto[i])
                console.log(Retorna[i])
            }
        }

    }
    else if (Selec.options[1].selected) {
        var Mensg = document.getElementById('Text1').value
        var Mensagem = Mensg.split('')
        if (Mensg != null) {
            for (var i = 0; Mensagem.length > i; i++) {
                cripto[i] = Mensagem[i].charCodeAt(0)
                bin[i] = cripto[i].toString(2) + cripto[i].toString(2) 
                console.log(bin[i])
            }
        }
    }
})










document.getElementById('Descodificar').addEventListener('click', function () {
    var Selec = document.getElementById('Seleciona')
    if ((Selec.options[0].selected)) {
        var incre = parseInt(document.getElementById('Incremento').value)
        var Mensagem = Mensg.split('')
        console.log(incre);
        if (Mensg != null) {
            for (var i = 0; Mensagem.length > i; i++) {
                cripto[i] = Mensagem[i].charCodeAt(0)
                cripto[i] = cripto[i] - incre
                Retorna[i] = String.fromCharCode(cripto[i])
                console.log(Retorna[i])
            }
            NewWorld = Retorna.join('')
            console.log(NewWorld)
        }
    }
})
