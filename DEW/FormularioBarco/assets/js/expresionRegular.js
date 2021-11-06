/**
 * Funcion que valida un nombre , recibiendo la variable como parametro
 * @param {*} nombre recibe el nombre para validarlo
 */
function exprNombre(nombre){
   //Se guarda la expresion regular en una variable
   var exprNombre=/^[A-Za-z]*/;
  
   //Validamos el nombre mediante la expresion regular 
   if(exprNombre.test(nombre)==false){
       alert("Nombre incorrecto")
   }else{
      alert("Nombre correcto");
   }

  }


  /**
    * Funcion que valida un codigo postal , recibiendo la variable como parametro
   * @param {*} postal recibe el codigo postal para validarlo
   */
   function exprPostal(postal){
      //Se guarda la expresion regular en una variable
      var exprCodigo=/((\d){5,5})/;

   //Validamos el codigo postal mediante la expresion regular 
      if(exprCodigo.test(postal)==false){
         alert("Codigo postal incorrecto")
     }else{
        alert("COdigo postal correcto");
     }
   }

    /**
    * Funcion que valida una fecha , recibiendo la variable como parametro
   * @param {*} fecha recibe la fecha para validarlo
   */
   function exprFecha(fecha){
      //Se guarda la expresion regular en una variable
      var exprFecha=/(\d){2,2}[/](\d){2,2}[/](\d){4,4}/;

      //Validamos la fecha mediante la expresion regular 
      if(exprFecha.test(fecha)==false){
         alert("Fecha incorrecta, vuelve a introducirla")
     }else{
        alert("Fecha correcta");
     }
   }

/**
 * Funcion que valida apellido , recibiendo la variable como parametro
 * @param {*} apellido recibe el apellido para validarlo
 */
  function exprApellido(apellido){

   //Se guarda la expresion regular en una variable
   var exprApellido=/^[A-Za-z]*/;
   
   //Validamos el apellido mediante la expresion regular 
   if(exprApellido.test(apellido)==false){
       alert("Apellidos incorrecto")
   }else{
      alert("Apellido correcto");
   }
   
  }


  /**
 * Funcion que valida un dni , recibiendo la variable como parametro
 * @param {*} dni recibe el dni para validarlo
 */
  function nifExpr(dni) {
     //declaracion de variables
      var numero
      var letr
      var cadenaletra
      var expresion_regular_dni
     
      //se guardda la expresion regular en una variable
      expresion_regular_dni = /^\d{8}[a-zA-Z]$/;

      //Validamos el apellido mediante la expresion regular 
      if(expresion_regular_dni.test (dni) == true){
         //guardamos en una variable el numero del dni
         numero = dni.substr(0,dni.length-1);
         //guardamos en una variable la letra del dni
         letr = dni.substr(dni.length-1,1);
         //dividimos el numero entre 23 y el resto lo guardamos en la variable numero que sera la posicion
         numero = numero % 23;
         cadenaletra='TRWAGMYFPDXBNJZSQVHLCKET';
         cadenaletra=cadenaletra.substring(numero,numero+1);
        if (cadenaletra!=letr.toUpperCase()) {
           alert('Dni erroneo, la letra del NIF no se corresponde');
         }else{
           alert('Dni correcto');
         }
      }else{
         alert('Dni erroneo, formato no válido');
       }
    }

    /**
     * Funcion que valida un numero de movil, recibiendo la variable como parametro
     * @param {*} movil recibe el movil a validar
     */
    function movilExpr(movil){
          //Se guarda la expresion regular en una variable
         var exprMovil=/\+34|0034|34)?[ -]*(6|7)[ -]*([0-9][ -]*){8}/;

         //Validamos el movil mediante la expresion regular 
         if(exprMovil.test(movil)==false){
               alert("Movil incorrecto")
         }else{
            alert("Movil correcto");
         }
    }

    /**
     * Funcion que valida un email, recibiend la variable como parametro
     * @param {*} email recibe el email a validar
     */
    function emailExpr(email){

       //Se guarda la expresion regular en una variable
       var exprEmail=/^([\w]+[\\.-]?@[\w]+[\\.][\w]{2,3})$/;

      //Validamos el email mediante la expresion regular 
       if(exprEmail.test(email)!=true){
          alert("Email incorrecto")
       }
       alert("Email valido");
    }


 /**
     * Funcion que valida una matricula, recibiend la variable como parametro
     * @param {*} matricula recibe el matricula a validar
     */
    function matriculaExpr(matricula){

       //Se guarda la expresion regular en una variable
       var exprMatricula=/^(\d){4,4}[\s-]?(\w){3,3}$/;

      //Validamos la matricula mediante la expresion regular 
       if(exprMatricula.test(matricula)!=true){
          alert("Matricula incorrecto")
       }
       alert("Matricula valido");
    }

     /**
     * Funcion que valida una red social, recibiend la variable como parametro
     * @param {*} social recibe la red social a validar
     */
      function socialExpr(social){

         //Se guarda la expresion regular en una variable
         var exprSocial=/^[@][\w\d-]+$/;
  
        //Validamos la red social mediante la expresion regular 
         if(exprSocial.test(social)!=true){
            alert("Red social incorrecto")
         }
         alert("Red social valido");
      }
