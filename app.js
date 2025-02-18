//Definir variables
//Definir una array para almacenar los nombres de los amigos
let amigos = [];
//Obtener las referencias de los elementos del HTML
let inputAmigo = document.getElementById("amigo");
let listaAmigos = document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado");
//Funcion para agregar amigos
function agregarAmigo(){
    let nuevoAmigo = inputAmigo.value.trim();
    if(nuevoAmigo){
        amigos.push(nuevoAmigo);
        inputAmigo.value = "";
        mostrarAmigos();
    }else {
        alert("Por favor, ingrese un nombre");
    }
}
//Mostrar la lista de amigos
function mostrarAmigos() {
    listaAmigos.innerHTML = "";
    amigos.forEach(function(amigo){
        let li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}