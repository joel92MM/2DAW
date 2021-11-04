//funcion que pinta los nodos pares
function pintarNodos(){
    var identificador=document.getElementById("lista");
    var elementos= identificador.getElementsByTagName("li");
    //bucle que recorre los nodos li
    for (let i = 0; i < elementos.length; i++) {
        //condicion que cambia el color de fondo a los li pares
        if(i%2==0){
            elementos[i].style.backgroundColor="red";
            elementos[i].style.color="white";
        }
        
    }

}