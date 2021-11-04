 let n1=0,n2=0,n3=0;
 let listaNumeros=[];
 function menorMayor(){

    comprobarNumero();

    alert("Primer numero: "+n1+"\nSegundo numero: "+n2+"\nTercer numero: "+n3);

    listaNumeros.push(n1,n2,n3);
    listaNumeros.sort();
    
    let minimo=Math.min(listaNumeros);
    let maximo=Math.max(listaNumeros);

    for (let i = 0; i < listaNumeros.length; i++) {
        alert(listaNumeros[i]+"\n");
        
    }
     function comprobarNumero(){
         let comprobacion=false;
         
         do {

            n1=parseInt(prompt("Introduzca el primer numero"));
            n2=parseInt(prompt("Introduzca el segundo numero"));
            n3=parseInt(prompt("Introduzca el tercer numero"));

            if(Number.isInteger(n1)&& Number.isInteger(n2)&&Number.isInteger(n3)){
                return comprobacion=true;
            }else{
                alert("Error al introducir los numeros");
            }
             
         } while (!comprobacion);
     }

     function generarAleatorios(mini,maxi){
         return Math.floor(Math.random);
     }
   
 }
 menorMayor();