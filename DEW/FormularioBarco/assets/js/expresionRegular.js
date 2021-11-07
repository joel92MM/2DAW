

/**
 * Funcion que valida un nombre , recibiendo la variable como parametro
 * @param {*} nombre recibe el nombre para validarlo
 */
function exprNombre(){
   //Se guarda la expresion regular en una variable
   var exprNombre=/^(([\w]([\s]?)+){4,9})$/;

   var nombretxt=document.getElementById("in_name");
  
   //Validamos el nombre mediante la expresion regular 
   if(exprNombre.test(nombretxt)==false){
       alert("Nombre incorrecto")
   }else{
      alert("Nombre correcto");
   }

  }
//-----------------------------------------------------------------------------------------------------------------------//

 


     