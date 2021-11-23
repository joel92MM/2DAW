<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Ejercicio 01</title>
<link href="ejercicio1.css" rel="stylesheet" type="text/css"/>
</head>
<body>
	<?php
	if($_POST){
	    require_once("../Utilidades/funcionesAuxiliares.php");
	    $a=$_POST['a'];$b=$_POST['b'];
	    $c=sumaMatrices($a, $b);
	    echo"<table>
                <tr>
                    <td>";
	    imprimirMatriz($a);
	    echo "     </td>
                    <td>+</td>
                    <td>";
	    imprimirMatriz($b);
	    echo "     </td>
                    <td>=/td>
                    <td>";
	    imprimirMatriz($c);
	    echo "     </td>
                </tr>
            </table>";
	}else if ($_GET){
	    require_once("../Utilidades/funcionesAuxiliares.php");
	$filas=$_GET['filas']; $cols=$_GET['cols'];
	echo "<form action='' method='POST' enctype='multipart/form-data'>
          <table>
            <tr>
                <td>";
	               imprimeTablaMatriz("a", $filas, $cols);
	       echo"</td>
                <td>";
	               imprimeTablaMatriz("b", $filas, $cols);
	       echo"</td>
                </tr>
                <tr><td><button type'submit'>Enviar</button></td><td><button type='reset'>Borrar formulario</button></td></tr>
                </table>
            </form>";
	}else{
	   ?>
	<form action="" method="GET" enctype="multipart/form-data">
	<table>
	<tr><td><label for="filas">Filas:</label></td><td><input name="filas" id="filas" type="number" min="1" max="20" size="4"/></td></tr>
	<tr><td><label for="Cols">Cols:</label></td><td><input name="cols" id="cols" type="number" min="1" max="20" size="4"/></td></tr>
	<tr><td><button type="submit">Enviar</button></td><td><button type="reset">Borrar formulario</button></tr>
	</table>
	</form>
	<?php 
	}
	?>
</body>
</html>