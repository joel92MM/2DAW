
   //Recibe como parametros el patron, y comprueba si el valor esta vacio o nulo
   function test_patron(patron, valor) {
    if (valor !== '' && valor !== null) {
        return (patron.test(valor));
    }
    return false;
}

// Recibe como parámetros la cadena con el error, el patrón y la cadena a comprobar
function ver_error(patron, valor, id_campo) {
    var devolver=test_patron(patron, valor);
    
    console.log(id_campo);
    if (devolver) {
        id_campo.style.backgroundColor='green';
    } else {
        id_campo.style.backgroundColor='red';
    }
}

function iniciar() {
 
}

window.onload = iniciar;

function test_input() {
    var input_id = this.id;
    var input_valor = this.value;
    // Patrones
    var nombre_test = /^([\w]+){2,6}$/;
    var apellido_test= /^[\w]*/;

    



    switch (input_id) {
       
        case 'nombre':
            ver_error(nombre_test, input_valor,input_id);
            break;
        case 'apellido':
            ver_error(apellido_test, input_valor,input_id);
            break;
     
    }    
}