function exprNombre(nombre){

   var exprNombre=/^[A-Za-z]*/;
  
   if(exprNombre.test(nombre)==false){
       alert("Nombre incorrecto")
   }else{
      alert("Nombre correcto");
   }
  }
  
  function nifExpr(dni) {
      var numero
      var letr
      var letra
      var expresion_regular_dni
     
      expresion_regular_dni = /^\d{8}[a-zA-Z]$/;
     
      if(expresion_regular_dni.test (dni) == true){
         numero = dni.substr(0,dni.length-1);
         letr = dni.substr(dni.length-1,1);
         numero = numero % 23;
         letra='TRWAGMYFPDXBNJZSQVHLCKET';
         letra=letra.substring(numero,numero+1);
        if (letra!=letr.toUpperCase()) {
           alert('Dni erroneo, la letra del NIF no se corresponde');
         }else{
           alert('Dni correcto');
         }
      }else{
         alert('Dni erroneo, formato no válido');
       }
    }

    function movilExpr(movil){
         var exprMovil=/\+34|0034|34)?[ -]*(6|7)[ -]*([0-9][ -]*){8}/;
    }