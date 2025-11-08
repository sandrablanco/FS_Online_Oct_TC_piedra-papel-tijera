const opciones = ["piedra","papel","tijera"];
let puntosUsuario = 0;
let puntosOrdenador = 0;

//cogemos elementos del DOM
const botones = document.querySelectorAll(".boton-jugada");
const resultados = document.getElementById("resultados");
const marcadorUsuario = document.getElementById("contador-usuario");
const marcadorOrdenador = document.getElementById ("contador-ordenador");

//asignamos el evento de clic a cada boton
//hasta aqui el usuario sabemos si ha cogido piedra, papel o tijera
// hasta aqui el ordenador ha elegido piedra, papel o tijera
// comparamos los resultados
for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener("click", function() {
        let jugadaUsuario = botones[i].dataset.jugada;
        console.log("has hecho click en", jugadaUsuario);        
        let jugadaOrdenador = opciones[Math.floor(Math.random() * opciones.length)];
        console.log("el ordenador ha elegido", jugadaOrdenador);

        if (jugadaUsuario === jugadaOrdenador) {
            console.log("empate");
        } 
        else if (
            (jugadaUsuario === "piedra" && jugadaOrdenador === "tijera") ||
            (jugadaUsuario === "papel" && jugadaOrdenador === "piedra") ||
            (jugadaUsuario === "tijera" && jugadaOrdenador === "papel")
        ) {
            console.log("gana usuario");
            puntosUsuario ++;
        } 
        else {
            console.log("gana ordenador");
            puntosOrdenador ++;
        }
        console.log("Usuario tiene " + puntosUsuario + " ordenador tiene " + puntosOrdenador);
        resultados.textContent = `Has elegido ${jugadaUsuario} y el ordenador ha elegido ${jugadaOrdenador}`;
        marcadorUsuario.textContent = ` tus puntos + ${puntosUsuario}`;
        marcadorOrdenador.textContent = `puntos ordenador + ${puntosOrdenador}`;
    }); 
}


