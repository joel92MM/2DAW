
        document.getElementById("verTodas").addEventListener("click", verTodas);
        document.getElementById("crearCookie").addEventListener("click", crearCookie);
        document.getElementById("modificarCookie").addEventListener("click", modificar);
        
        document.getElementById("borrarCookie").addEventListener("click", deleteCookie);
        document.getElementById("actualizar").addEventListener("click",actualizar);


        
        
         /***************************************************************
         * Con esta función creamos una cookie con una fecha de caducidad
         ***************************************************************/
        function setCookie(cookieName,cookieValue,daysToExpire)
        {
          var date = new Date();
          //tenemos que sumar a 'date' los MILISEGUNDOS que son los dias que quedemos que caduque
          date.setTime(date.getTime()+(daysToExpire*24*60*60*1000)); 
          document.cookie = cookieName + "=" + cookieValue + "; expires=" + date.toGMTString();
        }
        /*****************************************************
         * Con esta función obtenermos el valor de una cookie 
         *****************************************************/
        function getCookie(cookieName)
        {
          var name = cookieName + "=";
          //Creamos un array con las cookies
          var allCookieArray = document.cookie.split(';');
          //recorremos el array
          for(var i=0; i<allCookieArray.length; i++)
          {
            //elimino espacios iniciales en blanco de la cookie
            //y nos queda nombre=valor
            var temp = allCookieArray[i].trim();
            //infexok nos retorna la posición de "name" dentro de temp
            //temp-> la cookie de la iteración
            if (temp.indexOf(name)==0){
                //en el caso que index devuelva 0 quiere decir que esta
                // es la cookie y queremos devolver su valor que va desde
                //  desde  name.length  a  temp.length
                //por ejemplo: nombre2=Cookie2
                //name.length(7)  a  temp.length(13)
                return temp.substring(name.length,temp.length);
            }
            
       	  }
          return "";
        }
        /*****************************************************
         * Con esta función borramos una cookie 
         *****************************************************/
       
        function deleteCookie(){
          var cname=prompt("Introduce el campo de la cookie");
          var valor=prompt("Introduce el valor de la cookie");
          
          document.cookie = cname+"="+valor+"; Path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;";

        }
        /*****************************************************
         * Con esta vemos todas las cookies 
         *****************************************************/
        function verTodas(){
          var todas=("cookies: ["+document.cookie+"]");
          document.getElementById("muestra").innerHTML=todas;

        }

       

        /**
         * Funcion que crea una nueva cookie
        */
        function crearCookie(e, cname,valor){
          const dias = new Date();
          dias.setTime(dias.getTime()+("21/11/2021"*24*60*60*1000));
          var expira ="expira = "+ dias.toUTCString();
 
          if(!e) e= window.event;
            cname=prompt("Introduce el campo de la cookie");
            valor=prompt("Introduce el valor de la cookie");
          if(e.target.id=="crearCookie"){
            document.cookie=cname+"=" + valor + ";" + expira + ";path=/";
          }else{
            alert("No se ha podido crear la cookie");
          } 
          return document.cookie;
        }


  
        /**Funcion que comprueba si la cookie existe **/
        function comprobarCookie(){
          var usuario= getCookie("username");
          if(usuario != ""){
            alert("Bienvenido de nuevo"+ usuario);
          }else{
            usuario=prompt("Por favor introduce tu nombre de usuario");
            if(usuario != usuario!=null){
              //almacena la coookie de username nombre usuario y que dura 30 dias
              setCookie("username",usuario,30);
            }
          }
        }
        /**Funcion que actuliza la pagina*/
        function actualizar(){
          location.reload();
        }
        /**Funcion que modifica una cookie*/
        function modificar(){
          const dias = new Date();
          dias.setTime(dias.getTime()+("21/11/2021"*24*60*60*1000));
          var expira ="expira = "+ dias.toUTCString();

          var cname=prompt("Introduce el valor del campo");
          var valor=prompt("Introduce el valor antiguo de la cookie");
          var nuevo=prompt("Introduce le nuevo valor");
          valor= nuevo;

          document.cookie=cname+"=" + valor + ";" + expira + ";path=/";
        }
        
