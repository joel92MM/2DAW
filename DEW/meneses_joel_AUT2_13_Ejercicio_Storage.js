 //Comprobar si el navegador soporta webstorage
 if (typeof(Storage) !== "undefined"){
    //Saludo al usuario
    bienvenida();
    
    //Contador
    contador();
    
    //Botones incrementar, decrementar y logout
    document.getElementById("incrementar").addEventListener("click",incrementar);
    document.getElementById("decrementar").addEventListener("click",decrementar);
    document.getElementById("logout").addEventListener("click",logout);
}else{
    alert("El navegador no soporta WebStorage");
}
/**
 * 
 * Funcion que comprueba si un usuario es nuevo o es un usuario existente
 * */
function bienvenida(){
    if(localStorage.getItem("usuario")!=null){
        alert("¡Otra vez por aquí, "+localStorage.getItem("usuario")+" Como le va?");
    }else{
        var nombre = prompt("Veo que todavia no se como te llamas, dime un nombre: ");
        localStorage.setItem("usuario",nombre);
        alert("Hola Bienvenida/o "+localStorage.getItem("usuario")+" a nuestra web contador");
    }
}
/**
 * Funcion que pone el contador a 0
 * */
function contador(){
    if (!sessionStorage.getItem("cuenta")){
        sessionStorage.setItem("cuenta","0"); 
    }
    document.getElementById("cuenta").innerHTML = "Contador: "+sessionStorage.getItem("cuenta");
}
/**Funcion que incrementa el numero de veces que el usuario visita la misma pagina*/
function incrementar(){
    sessionStorage.setItem("cuenta",Number(sessionStorage.getItem("cuenta"))+1);
    document.getElementById("cuenta").innerHTML = "Contador: "+sessionStorage.getItem("cuenta")+ " veces";
}

/**Funcion que decrementa el numero de veces que el usuario visita la misma pagina*/ 
function decrementar(){
    sessionStorage.setItem("cuenta",Number(sessionStorage.getItem("cuenta"))-1);
    document.getElementById("cuenta").innerHTML = "Contador: "+sessionStorage.getItem("cuenta")+ " veces";
}
/**
 * Funcion que cierra la sesion al usuario
*/
function logout(){
    alert("Se ha cerrado la sesión de "+localStorage.getItem("usuario"));
    localStorage.removeItem("usuario");
}