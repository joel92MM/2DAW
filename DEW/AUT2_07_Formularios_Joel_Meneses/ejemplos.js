
      //##SELECT##


     //Funcion que seleccina por defecto un valor de la lista  
     function myFunction() {
        document.getElementById("naranja").selected = "true";
      }

      //Funcion que indica el indice de cada valor de la lista 
      function indice() {
        var indice;
        indice=document.getElementById("mySelect").selectedIndex;
        document.getElementById("indices").innerHTML = indice;
      }

      //funcion que devuelve el numero de elementos de la lista
      function numeroElementos(){
        var elementos;
        elementos= document.getElementById("mySelect").length;
        document.getElementById("elementos").innerHTML = elementos;
      }

      //Cambia el numero de opciones visibles de la lista
      function numeroOpciones(){
        document.getElementById("mySelect").size = "4";
      }

      //Devuelve el valor del identificador del formulario
      function idForm(){
        var x=document.getElementById("mySelect").form.id;
        document.getElementById("parr").innerHTML = x;
      }

      //##OPTION##

      //Funcion que cambia el valor de la etiqueta
      function cambiarEtiqueta() {
        document.getElementById("platano").label = "newLabel";
        document.getElementById("texti").innerHTML = "El valor de la etiqueta  es cambiado  por platano a 'newLabel'.";
      }
      //Selecciona la opcion por defecto
      function opcionDefecto() {
        var x = document.getElementById("mySelect").selectedIndex;
        var y = document.getElementsByTagName("option");
        alert("Es " + y[x].text + " la opcion por defecto? " + y[x].defaultSelected);
      }