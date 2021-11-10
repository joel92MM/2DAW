<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 06</title>
</head>
<body>
    <?php
    require_once("../config.php");
    require_once("../Utilidades/funcionesAuxiliares.php");
    function abrirFichero($filePath,$modo="r+"){
        /*
        if ( !($resultado=fopen($filePath,$modo)) ){
            exit(1);
        }
        return $resultado;
        */

        $resultado=fopen($filePath,$modo);
        if($resultado){
            return $resultado;
        }else{
            echo "<span style='color=red; font-size:big;'>No se ha podido abrir el fichero.</span>";
            exit(1);
        }
    }
    $contador=0;
    $fcontador=DATA_PATH."/contador.txt";
    if(file_exists($fcontador)){
        $file=abrirFichero($fcontador);
        $contador=intval(fgets($file));
        fseek($file,0);
    }else{
        $file=abrirFichero($fcontador,"w+");
    }
    $contador++;
    fwrite($file,strval($contador));
    fclose($file);
    mostrarImgNum($contador);
    ?>
</body>
</html>