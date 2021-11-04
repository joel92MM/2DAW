let nombre;
let puntos=0;
var opciones=["piedra","papel","tijera"]

function preguntarNombre(){
    nombre=prompt("Introduzca su nombre");
    return nombre;
}
function numeroRandom(){
    let salir=false;

    do {
        let nombreJuego=prompt("Introduzca un nombre");

        for (let i = 0; i < opciones.length; i++) {
            if(nombreJuego==opciones[i]){
                return opciones[i];
                salir=true;
            }
            
        }
    } while (!salir);
   
}
console.log(preguntarNombre());
console.log(numeroRandom());