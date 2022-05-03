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
    else {
        var Verify = document.querySelector('#Incremento')
        if (Verify) return Verify.remove()
    }

}
)

document.getElementById('Codificar').addEventListener('click', function () {
    document.getElementById('CriptoButton').style.display = 'block'
    document.getElementById('CriptoButton').innerText = "Codificar Mensagem!"
})

document.getElementById('Descodificar').addEventListener('click', function () {
    document.getElementById('CriptoButton').style.display = 'block'
    document.getElementById('CriptoButton').innerText = "Descodificar Mensagem!"
})


document.querySelector('#CriptoButton').addEventListener('click', function () {
    var RadioButton = document.getElementById('Codificar')
    if (RadioButton.checked) Codificar()
    else return Descodificar()
})

function Codificar() {
    var Selec = document.getElementById('Seleciona')
    if (Selec.options[0].selected) {
        var NewWord
        var cripto = []
        var Retorna = []
        var Verifica = []
        var quantosFoi = []
        var falta = []
        var Mensg = document.getElementById('Text1').value
        var incre;
        var Verify = document.getElementById('Incremento').value
        if (Verify == '') {
            incre = 3;
            document.getElementById('Incremento').value = 3
        }
        else incre = parseInt(document.getElementById('Incremento').value)
        var Mensagem = Mensg.split('')
        if (Mensg != '') {
            for (var i = 0; Mensagem.length > i; i++) {
                cripto[i] = Mensagem[i].charCodeAt(0)
                Verifica[i] = Mensagem[i].charCodeAt(0)
                cripto[i] = cripto[i] + incre
                if (cripto[i] >= 91 && Verifica[i] >= 65 && Verifica[i] <= 90) {
                    quantosFoi[i] = 91 - Verifica[i]
                    falta[i] = incre - quantosFoi[i]
                    cripto[i] = 65 + falta[i]
                }
                if (cripto[i] >= 123 && Verifica[i] >= 97 && Verifica[i] <= 122) {
                    quantosFoi[i] = 123 - Verifica[i]
                    falta[i] = incre - quantosFoi[i]
                    cripto[i] = 97 + falta[i]
                }
                Retorna[i] = String.fromCharCode(cripto[i])
            }
            NewWord = Retorna.join('')
            document.querySelector('#Resultado').value = ' '
            document.querySelector('#Resultado').value = NewWord
            console.log(NewWord)
        }
        else alert("Digite algo para criptografar")

    }
    else if (Selec.options[1].selected) {
        var Mensg = document.getElementById('Text1').value
        if (Mensg != '') {
            return document.getElementById('Resultado').innerText = b64EncodeUnicode(Mensg);
        }
        else return document.getElementById('Resultado').innerText = "Digite algo para criptografar"
    }
    else alert('Seleciona alguma das opções antes de codificar')
}

function Descodificar() {
    var Selec = document.getElementById('Seleciona')
    if ((Selec.options[0].selected)) {
        var NewWord
        var cripto = []
        var Retorna = []
        var Verifica = []
        var quantosFoi = []
        var falta = []
        var Mensg = document.getElementById('Text1').value
        var incre = document.getElementById('Incremento').value
        var Mensagem = Mensg.split('')
        if (Mensg != '') {
            for (var i = 0; Mensagem.length > i; i++) {
                cripto[i] = Mensagem[i].charCodeAt(0)
                Verifica[i] = Mensagem[i].charCodeAt(0)
                cripto[i] = cripto[i] - incre
                if (cripto[i] <= 64 && Verifica[i] >= 65 && Verifica[i] <= 90) {
                    quantosFoi[i] = Verifica[i] - 64
                    falta[i] = incre - quantosFoi[i]
                    cripto[i] = 90 - falta[i]
                }
                if (cripto[i] <= 96 && Verifica[i] >= 97 && Verifica[i] <= 122) {
                    quantosFoi[i] = Verifica[i] - 96
                    falta[i] = incre - quantosFoi[i]
                    cripto[i] = 122 - falta[i]
                }
                Retorna[i] = String.fromCharCode(cripto[i])
            }
            NewWord = Retorna.join('')
            document.getElementById('Resultado').value = ''
            return document.getElementById('Resultado').value = NewWord
        }

    }
    else if (Selec.options[1].selected) {
        var Mensg = document.getElementById('Text1').value
        if (Mensg != '') {
            return document.getElementById('Resultado').innerText = UnicodeDecodeB64(Mensg);
        }
        else return document.getElementById('Resultado').innerText = "Digite algo para criptografar"
    }
    else alert('Seleciona alguma das opções antes de descodificar')
}


function b64EncodeUnicode(str) {
    return btoa(encodeURIComponent(str));
};

function UnicodeDecodeB64(str) {
    return decodeURIComponent(atob(str));
};
