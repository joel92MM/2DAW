//Funcion que crea objetos
        function crearObjeto(){

            let nombre, apellidos,sexo, direccion;
            let edad=0;

            // esta expresion define que puede haber una o mas números.
            let regex = /^[0-9]+/; 

            let es_cadena=false;
            let es_numero=false;
           
            //Compruebo que el dato introducido no sea un dato vacio y tampoco numerico 
            do {
                nombre=prompt("Introduzca su nombre");
                if(nombre==""){
                    return alert("Debe agregar un nombre!");
                }else if(!regex.test(nombre)){
                    es_cadena=true;
                }                
            } while (!es_cadena);

             
            apellidos=prompt("Introduzca sus apellidos");
            sexo=prompt("Introduzca su sexo");
            direccion=prompt("Introduzca su direccion");

            //Compruebo que el dato introducido mediante una expresion regular no es cadena y tampoco un numero negativo
            do {
                edad=parseInt(prompt("Introduzca su edad"));
                if(regex.test(edad)){
                    es_numero=true;
                }
            } while (!es_numero);

            /**
             * Creamos un objeto  
             */

            const persona = new Map();

            /**
             * creamos los atributos de persona  y se lo asignamos al objeto
             */
            persona.set('nombre',nombre);
            persona.set('apellidos',apellidos);
            persona.set('edad',edad);
            persona.set('sexo',sexo)
            persona.set('direccion',direccion);

            /**
             * Mostramos los atributos de el objeto
             */
            for (let [key,value] of persona) {
                console.log(key + '- >'+ value);
                
            }

        }
