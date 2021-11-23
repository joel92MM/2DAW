<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 04</title>
</head>
<body>
    <?php
    require_once("../config.php");
    require_once("../Utilidades/funcionesAuxiliares.php");
    function primitiva() {
        $res=[];
        while(count($res)<6) {
            $n=rand(1,49);
	        if (!in_array($n, $res)){
	            array_push($res, $n);
	        }
	    }
	    sort($res);
	    return $res;
	}
	$sorteo=primitiva();
	echo "\t<table cellpading='5' border='1'>\n\t\t<tr>";
	foreach($sorteo as $valor) {
        echo "<td>";
        if($valor<10){
            mostrarImgNum(strval($valor));
            echo "<img src='",ROOT_PATH,"/img/imgNumeros/$valor.png'/>";
        }else{
            $svalor=strval($valor);
            mostrarImgNum($valor[0]);
            mostrarImgNum($valor[1]);
            //echo "<img src='",ROOT_PATH,"/img/imgNumeros/$svalor[0].png'/>";
            //echo "<img src='",ROOT_PATH,"/img/imgNumeros/$svalor[1].png'/>";
        }
	    echo "</td>";
	}
	echo "  </tr>\n\t</table>";
    ?>
</body>
</html>