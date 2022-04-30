Seleciona()

function Seleciona(){
    var Choose = document.getElementById('Seleciona')
    if(Choose.value === 'CifraDeCesar') return Cifra()
    else if(Choose.value === 'Base64') return Base64() 
}

function Cifra(){
    var Form = document.querySelector('#Formul')
    var NewTextArea = document.createElement('input')
    Form.append(NewTextArea)
    NewTextArea.type = 'text'
    NewTextArea.placeholder = 'Insira o incremento'
}
