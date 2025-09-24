// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Arrays
let amigos = [];
let elegidos = [];


function clean() {
  amigos = [];
  elegidos = [];
  document.getElementById("resultado").innerHTML = "";
  listaAmigos();
}

function agregarAmigo() {
    //Si el usuario no agrega un nombre
  let amigoNuevo = document.getElementById("amigo").value;
  if (amigoNuevo === "") {
    alert("Es necesario insertar un nombre");
  } else {
    amigos.push(amigoNuevo);
    
    document.querySelector("#amigo").value = "";
  }
  listaAmigos();
}

function listaAmigos() {
  let lista = document.querySelector("#listaAmigos");
  lista.innerHTML = "";
  for (let i = 0; i < amigos.length; i++) {
    let amigoHTM = document.createElement("li");
    amigoHTM.innerHTML = amigos[i];
    lista.appendChild(amigoHTM);
  }
  
}

function sortearAmigo() {
  
  //revisar minimo 2 amigos
  if (amigos.length < 2) {
    alert("Necesitas al menos 2 amigos para sortear"); 
    return;
  }
  //sorteo
  let indice = Math.floor(Math.random() * amigos.length);
  console.log(indice);
  //ya se sorteo a todos
  
  if (elegidos.length == amigos.length) {
    alert("Ya no hay mas amigos para sortear");
    clean();
    return;
  }
  // Sortea los nombres aleatoriamente, no permite que se repiitan
  if (elegidos.includes(amigos[indice])) {
    console.log("Repetido: " + amigos[indice]);
    return sortearAmigo();
  } else {
    document.getElementById("resultado").innerHTML = "Tu amigo secreto es: " + amigos[indice];
    elegidos.push(amigos[indice]);
    console.log("elegidos " + elegidos.length);
  console.log("amigos " + amigos.length);
    return "Tu amigo secreto es: " + amigos[indice];
  }
  
}