const newItem = document.getElementById("newItem")
const lista = document.getElementById("lista")
const deleteInput = document.getElementById("delete")
var contador = 0

if(localStorage.getItem("contador") != null){
    contador = parseInt(localStorage.getItem("contador"))
}

function enviar(){
    if(newItem.value == ""){
        alert("Digite uma tarefa")
        return
    }
    contador++
    localStorage.setItem("contador", contador)
    localStorage.setItem(`tarefa`+contador, newItem.value)
    newItem.value = ""
    newItem.focus()
}

function mostrar(){
    lista.innerHTML = ""

    for(let i = 1; i <= contador; i++){
        if(localStorage.getItem(`tarefa${i}`) != null){
            var item = document.createElement("li")
            item.innerHTML = i + " - " + localStorage.getItem(`tarefa${i}`)
            lista.appendChild(item)
        }
    }
}

function deletar(){
    try {
        localStorage.removeItem(`tarefa${deleteInput.value}`)
        mostrar()
    } catch (error) {
        alert("Insira um número válido")
    }
}

function habilitar(){
    if(document.getElementById("habilitar").checked == true){
        document.getElementById("deletarTudo").disabled = false 
    } else{
        document.getElementById("deletarTudo").disabled = true
    }
}