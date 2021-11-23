
var datos= document.querySelector('#contenido');

function traer(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then (respuesta => respuesta.json())
    //traemos los datos con la instruccion siguiente
    .then (datos =>{
        //console.log(datos);
        datosTabla(datos);
    })
}
/**
 * Funcion que muestra los datos de una tabla
 * @param {*} datos variable con array
 */
function datosTabla(datos){
    contenido.innerHTML ="";
    for (let valores of datos) {
        console.log(valores);

        contenido.innerHTML+=`

        <tr>
            <th>${ valores.id}</th>
            <td>${ valores.name}</td>
            <td>${ valores.email}</td>
            <td>${ valores.username}</td>
        </tr>
    `
    }
}

  