 //Declaramos la funcion con parametros
 function contar(frase) {
    //declaramos las variables
    let palabra=frase;
    let contadorA = 0, contadorB = 0, contadorC = 0,contadorD = 0;
    //Transformamos cualquier mayuscula a minuscula
    palabra=palabra.toLocaleLowerCase();
    //imprimimos la frase por teclado
    console.log(palabra);
    //Recorremos la cadena, para comprobar si contiene las letras y las guardamos en su contador correspondiente
    for(i=0; i<palabra.length; i++) {
        
        if(palabra[i] == "a" || palabra[i]=='á') {
            contadorA++
        }else if (palabra[i] == "b") {
            contadorB++
        }else if(palabra[i]=="c"){
            contadorC++;
        }else if(palabra[i]=="d"){
            contadorD++;
        }
    }
    //guardamos el resultado en una variable
    let resultado=" a: "+ contadorA+" b: "+ contadorB+" c: "+ contadorC+" d: "+ contadorD;
    //retornamos la frase anterior, para mostrarsela al resultado
    return resultado;
    }
    //pedimos la frase por teclado al usuario
    let frase=prompt("Introduzca una frase");
    //llamamos a la funcion pasandole la frase introducida por teclado, para que devuelva el resultado
    console.log(contar(frase)) 
