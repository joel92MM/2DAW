 //declaracion de las variables
 let numero1, numero2;
 let mayor=0, menor=0;;
 let impar=[];
 //creamos la funcion
 function impares(a,b){
      //comprobaremos cual numero es mayor
      if(a>b){
          mayor=a;
          menor=b;
      }else{
          mayor=b;
          menor=a;
      }
      //Mostraremos el mayor y el menor por consola
      console.log("Mayor: "+mayor+", Menor: "+ menor);

      //procedemos a buscar los numeros impares y agregarlos a la lista
      for (let i = menor; i <= mayor; i++) {
          if(i%2!=0){
              impar.push(i);
          }
      }
      //retornamos el resultado
      return impar
 }
 //pedimos los numeros por teclado
 numero1=parseInt(prompt("Introduzca el primer numero"));
 numero2=parseInt(prompt("Introduzca el segundo numero"));

 //llamamos a la funcion, pasandole los parametros, finalmente mostrara el resultado por consola
 console.log(impares(numero1,numero2));