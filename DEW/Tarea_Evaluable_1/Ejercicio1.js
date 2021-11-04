 /**
  * Funcion que genera una ip dada por el usuario
  * @param {*} direcciones 
  */
 function generarIP(){
     //declaracion de variables
     let preguntaIP;
     let salir=false;
     let ip="";
     //hacemos un bucle do-while
    do {
       //Muestra de la estructura de IPv4 al usuario
        alert("Tipo A: 0.0.0.0 - 126.255.255.255\nTipo B: 127.0.0.0 - 191.255.255.255\nTipo C: 192.0.0.0 - 223.255.255.255 "
        +"\nTipo C: 240.0.0.0 - 255.255.255.255");

        //preguntamos al usuario, guardando el dato en la variable,y luego lo pasamos
        //a mayusculas
        preguntaIP=prompt("¿Que clase de IP, desearias?");
        preguntaIP=preguntaIP.toLowerCase();

        /**
         * Segun la opcion del usuario desplegamos un menu de opciones posibles, con sus resultados
         * en funcion de lo que eliga el usuario se mostrara uno o otra opcion
         */
         switch (preguntaIP) {
            case 'a': 
            ip+=generarNumeros(0,126)+obtenerPartesIP();
                 break;
            case 'b':
            ip+=generarNumeros(127,191)+obtenerPartesIP();
                break;
            case 'c':
            ip+=generarNumeros(192,223)+obtenerPartesIP();
                break;  
            case 'd':
            ip+=generarNumeros(224,239)+obtenerPartesIP();
                break;
            case 'e':
            ip+=generarNumeros(240,255)+obtenerPartesIP();
                break;
            case 's':
                salir=true; 
                break;     
             default:
            alert("Letra incorrecta");
            break;
         }
        console.log(ip);
        ip="";
    } while (!salir);
     
    /**
     * Funcion que genera numeros aleatorios de un rango minimo al maximo
     * @param {*} minimo numero minimo
     * @param {*} maximo numero maximo
     * @returns genera numeros aleatorios
     */
    function generarNumeros(minimo,maximo){
        return Math.floor(Math.random()*(maximo-minimo))+maximo;
    }
    
    /**
     * Funcion que devuelve valores de la ip, excepto el primer valor
     * @returns 
     */
    function obtenerPartesIP(){
        let genera="."+generarNumeros(0,255)+ "."+generarNumeros(0,255)+ "."+generarNumeros(0,255);
        return genera;
    }
 }
 //llamamos a la funcion, pasandole la variable del usuario, y finalmente mostrnado el resultado por consola
 console.log((generarIP()));