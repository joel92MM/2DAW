
  //-----------------------FUNCIONES QUE VALIDAN EXPRESIONES REGULARES-----------------------------------------------//


/**
 * Funcion que valida un nombre , recibiendo la variable como parametro
 * @param {*} nombre recibe el nombre para validarlo
 */
function exprNombre(nombre,id_campo){
   
   //Se guarda la expresion regular en una variable
   var exprNombre=/^([\w]+){4,30}([\s]?)([\w]?){4,30}$/;
  
   //Validamos el nombre mediante la expresion regular 
   if(exprNombre.test(nombre)!=false){
       document.getElementById(id_campo).style.backgroundColor="red";
       alert("Nombre correcto")
   }else{
      document.getElementById(id_campo).style.backgroundColor="black";
      alert("Nombre incorrecto");
   }

  }


  /**
    * Funcion que valida un codigo postal , recibiendo la variable como parametro
   * @param {*} postal recibe el codigo postal para validarlo
   */
   function exprPostal(postal){
      //Se guarda la expresion regular en una variable
      var exprCodigo=/^((\d){5,5})$/;

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
      var exprFecha=/^(\d){2,2}[/](\d){2,2}[/](\d){4,4}$/;

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
   var exprApellido=/^([\w][\s]?){5,30}$/;
   
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
         var exprMovil=/^(\+34|0034|34)?[ -]*(6|7)[ -]*([0-9][ -]*){8}$/;

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
      
      /**
      * Funcion que valida una ipv4, recibiend la variable como parametro
       * @param {*} ipv4 a validar
       */
      function ipv4Expr(ipv4){
         var exprIpv4=/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;

         if(exprIpv4.test(ipv4)!=true){
            alert("Ipv4 incorrecto")
         }
         alert("Ipv4 valido");
      }

       /**
      * Funcion que valida una ipv6, recibiend la variable como parametro
       * @param {*} ipv6 a validar
       */
      function ipv6Expr(ipv6){
         var exprIpv6=/((^\s*((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s*$)|(^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$))/;

         if(exprIpv6.test(ipv6)!=true){
            alert("Ipv6 incorrecto")
         }
         alert("Ipv6 valido");
      }

