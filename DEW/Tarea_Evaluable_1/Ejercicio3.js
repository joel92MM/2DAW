        function aleatorios(){
            let cadena=[];
            salir=false;
            do {
                numeros=parseInt(prompt("Introduzca el numeros, >50 para salir o >1"));
                if(numeros<1 || numeros>50){
                    salir=true;
                }else{
                    cadena.push(numeros);
                }     
            } while (!salir);
            cadena=cadena.reverse();
            return cadena;  
        }
        console.log(aleatorios());