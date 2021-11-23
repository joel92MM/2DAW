//Extraemos los valores de id formulario y un array de los inputs de este
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const DOM={
	select: {
		vehiculo: document.getElementById("vehiculo")
	}
};


//Definimos las expresiones regulares a validar
const expresiones ={
	nombre:/^([\w]+){4,30}([\s]?)([\w]?){4,30}$/,
	apellido:/^([\w][\s]?){5,30}$/,
	fecha:/^(\d){2,2}[/](\d){2,2}[/](\d){4,4}$/,
	dni: /^\d{8}[a-zA-Z]$/,
	postal:/^((\d){5,5})$/,
	movil:/^(\+34|0034|34)?[ -]*(6|7)[ -]*([0-9][ -]*){8}$/,
	fijo:/^((\d)[\s]?){2,9}$/,
	email:/^([\w]+[\\.-]?@[\w]+[\\.][\w]{2,3})$/,
	matricula:/^(\d){4,4}[\s-]?(\w){3,3}$/,
	twitter:/^[@][\w\d-]+$/,
	instagram:/^[@][\w\d-]+$/,
	ipv4:/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/,
	ipv6:/((^\s*((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s*$)|(^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$))/
};


//aqui validamos cada campo del formulario
const validarFormulario = (e) => {
	switch (e.target.name) {
		case "in_name":
			//Validamos el nombre mediante la expresion regular 
			console.log(e.target.value);
			if(expresiones.nombre.test(e.target.value)!=false){
				document.getElementById(e.target.id).style.backgroundColor="green";
				document.querySelector('#mensajeError .nombre_error').style.display="none";
			}else{
			  document.getElementById(e.target.id).style.backgroundColor="red";
			   document.querySelector('#mensajeError .nombre_error').style.display="block";
			}
		break;
		case "in_surname":
			//Validamos el apellido mediante la expresion regular 
			if(expresiones.apellido.test(e.target.value)!=false){
				document.getElementById(e.target.id).style.backgroundColor="green";
				document.querySelector('#mensajeError .apellido_error').style.display="none";

			}else{
				document.getElementById(e.target.id).style.backgroundColor="red";
				document.querySelector('#mensajeError .apellido_error').style.display="block";
			}
		break;
		case "fecha":
			//Validamos la fecha mediante la expresion regular 
			if(expresiones.postal.test(e.target.value)!=false){
				document.getElementById(e.target.id).style.backgroundColor="green";
				document.querySelector('#mensajeError .fecha_error').style.display="none";

			}else{
				document.getElementById(e.target.id).style.backgroundColor="red";
				document.querySelector('#mensajeError .fecha_error').style.display="block";
			}
		break;
		case "in_dni":
			  //declaracion de variables
			  var numero;
			  var letr;
			  var cadenaletra;
			 
			  //se guardda la expresion regular en una variabl
			//Validamos el apellido mediante la expresion regular 
			console.log(e.target.value);
			if(expresiones.dni.test(e.target.value)!=false){
				//guardamos en una variable el numero del dni
				numero = e.target.value.substr(0,e.target.value.length-1);
				//guardamos en una variable la letra del dni
				letr = e.target.value.substr(e.target.value.length-1,1);
				letr=letr.toUpperCase();
				//dividimos el numero entre 23 y el resto lo guardamos en la variable numero que sera la posicion
				numero = numero % 23;
				cadenaletra='TRWAGMYFPDXBNJZSQVHLCKET';
				cadenaletra=cadenaletra.substring(numero,numero+1);
				document.getElementById(e.target.id).style.backgroundColor="green";
				document.querySelector('#mensajeError .dni_error').style.display="none";

			}else{
				document.getElementById(e.target.id).style.backgroundColor="red";
				document.querySelector('#mensajeError .dni_error').style.display="block";
			}
		break;
		case "correoNuevo":
			//Validamos el codigo postal mediante la expresion regular 
			if(expresiones.postal.test(e.target.value)!=false){
				document.getElementById(e.target.id).style.backgroundColor="green";
				document.querySelector('#mensajeError .postal_error').style.display="none";

			}else{
				document.getElementById(e.target.id).style.backgroundColor="red";
				document.querySelector('#mensajeError .postal_error').style.display="inline-block";
			}
		break;
		case "movil":
			//Validamos el telefono movil mediante la expresion regular 
			if(expresiones.movil.test(e.target.value)!=false){
				document.getElementById(e.target.id).style.backgroundColor="green";
				document.querySelector('#mensajeError .movil_error').style.display="none";

			}else{
				document.getElementById(e.target.id).style.backgroundColor="red";
				document.querySelector('#mensajeError .movil_error').style.display="inline-block";
			}
		break;
		case "fijo":
			//Validamos el telefono fijo mediante la expresion regular 
			if(expresiones.fijo.test(e.target.value)!=false){
				document.getElementById(e.target.id).style.backgroundColor="green";
				document.querySelector('#mensajeError .fijo_error').style.display="none";

			}else{
				document.getElementById(e.target.id).style.backgroundColor="red";
				document.querySelector('#mensajeError .fijo_error').style.display="inline-block";
			}
		break;
		case "email":
			//Validamos el email mediante la expresion regular 
			if(expresiones.email.test(e.target.value)!=false){
				document.getElementById(e.target.id).style.backgroundColor="green";
				document.querySelector('#mensajeError .email_error').style.display="none";

			}else{
				document.getElementById(e.target.id).style.backgroundColor="red";
				document.querySelector('#mensajeError .email_error').style.display="inline-block";
			}
		break;
		case "twitter":
			//Validamos twitter mediante la expresion regular 
			if(expresiones.twitter.test(e.target.value)!=false || e.target.value==""){
				document.getElementById(e.target.id).style.backgroundColor="green";
				document.querySelector('#mensajeError .twitter_error').style.display="none";

			}else{
				document.getElementById(e.target.id).style.backgroundColor="red";
				document.querySelector('#mensajeError .twitter_error').style.display="inline-block";
			}
		break;
		case "instagram":
			//Validamos  instagram mediante la expresion regular 
			if(expresiones.instagram.test(e.target.value)!=false || e.target.value==""){
				document.getElementById(e.target.id).style.backgroundColor="green";
				document.querySelector('#mensajeError .instagram_error').style.display="none";

			}else{
				document.getElementById(e.target.id).style.backgroundColor="red";
				document.querySelector('#mensajeError .instagram_error').style.display="inline-block";
			}
		break;
		
		case "eprIp":
			//Validamos la expresion regular mediante la expresion regular 
			if(expresiones.ipv4.test(e.target.value)!=false){
				document.getElementById(e.target.id).style.backgroundColor="green";
				document.querySelector('#mensajeError .ipv6_error').style.display="none";


			}else if(expresiones.ipv6.test(e.target.value)!=false){
				document.getElementById(e.target.id).style.backgroundColor="green";
				document.querySelector('#mensajeError .ipv4_error').style.display="none";
			}
			else {
				document.getElementById(e.target.id).style.backgroundColor="red";
				document.querySelector('#mensajeError .ipv4_error').style.display="inline-block";
			}
		break;
		
	}
}



//bucle que accede a los input
inputs.forEach((input) => {
	//evento que comprueba que el usuario a tecleado
	input.addEventListener('keyup', validarFormulario);
	//evento que ejecuta la funcion anterior es decir cimprueba los campos
	input.addEventListener('blur', validarFormulario);
});

// evento que cuando el usuario presione el boton ejecuta una funcion de tipo flecha
formulario.addEventListener('submit', (e) => {
	
	e.preventDefault();

});

/**
 * Funcion que crea un elemento input al seleccionar un nuevo codigo postal
 */
 function crearInput() {
	var input = document.createElement("input");
	input.style.display.color="black";
	input.setAttribute("name","correoNuevo");
	input.setAttribute("id","correoNuevo");
	input.placeholder="codigo postal nuevo";

	var div= document.getElementById("input");
	
	div.appendChild(input);
  }

/**
 * Funcion que crea un elemento segun valor
 */
  function opcion(){
		if (DOM.inputs.select.vehiculo.value == "Si") {
			document.getElementById("grupo_vehiculo").insertAdjacentElement("afterend", creaCampo("matricula","Matricula"))
			document.getElementById("grupo_vehiculo").insertAdjacentElement("afterend", creaCampo("marca","Marca"))
			document.getElementById("matricula").setAttribute("placeholder", "Inserta la matricula");
		} else if (document.getElementById("grupo_vehiculo") != null && document.getElementById("grupo_marca") != null) {
			document.getElementById("grupo_matricula").remove();
			document.getElementById("grupo_marca").remove();
		}
} 
/**
 * Funcion que crea un campo dado unos argumentos
 * @param {*} id del campo 
 * @param {*} nombre del campo
 * @returns 
 */
	function creaCampo(id,nombre){
		let div= document.createElement("div");
		div.setAttribute("id","campoMarca");

		let label = document.createElement("label");
		label.setAttribute("for", idCampo);
		label.innerHTML = nombreVisible;

		let input = document.createElement("input");
		input.setAttribute("type", "text");
		input.setAttribute("id", idCampo);
		input.setAttribute("class", "inputMarca");
		input.setAttribute("maxlength", "20");

		div.appendChild(label);
		div.appendChild(input);

		return div;
	}