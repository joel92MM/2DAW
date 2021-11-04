/**
 * Funcion que crea clases 
 */
function clases(){
            /**
        * creamos la clase usuarios con propiedades usuario y contraseña siendo esta privada
        */ 
        class Usuarios{
            usuario;
            #contrasenia;
             //creamos el contructor de la clase
            constructor(usuario, contrasenia){
                this.#contrasenia=contrasenia;
                this.usuario=usuario;
            }
          
              /**
                 * Creamos los nuevos metodos
             */ 

              //metodo privado que modifica la contraseña
            #modificarContrasenia(nueva){
                 this.#contrasenia= nueva;
                 console.log("nueva contraseña: "+this.#contrasenia);
            }
            //creamos el metodo publico que accedera al privado
            cambiarContrasena (valorVieja, valorNueva){
                console.log("antigua contraseña: "+ valorVieja);
                this.#modificarContrasenia(valorNueva);
            }
        }
            //creamos la nueva clase para mostrar al usuario

            var user=new Usuarios;

            //creamos al nuevo usuario
            user.usuario=prompt("nombre del nuevo usuario");
            let vieja=(prompt("introduce la contraseña"));
            console.log("Usuario: "+user.usuario);

            let salir=false;
            //bucle que cambia la contraseña 
            do{
                let preguntar=prompt("¿quieres modificar la contraseña?");
                if(preguntar=="si"){
                    user.cambiarContrasena(vieja,(prompt("contraseña nueva")));
                    break;
                }else{
                    salir=true;
                }
    
               }while(!salir);

    
}          
    
        
    
