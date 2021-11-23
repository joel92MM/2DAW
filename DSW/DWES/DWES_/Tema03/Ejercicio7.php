<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 07</title>
</head>
<body>
    <?php
    require_once("../config.php");
    //if($_POST || $_FILES){
        function generaFila($linea,$separador=";"){
            static $tipoCelda="th";
            //$linea=substr($linea,0,strlen($linea)-1); //quita el salto de linea del final
            $campos=explode($separador,$linea);
            echo "<tr>";
            foreach($campos as $campo){
                echo "<$tipoCelda>$campo</$tipoCelda>\n";
            }
            echo "</tr>";
            if($tipoCelda=="th"){
                $tipoCelda="td";
            }
        }

        function txtcsvToHtmlTable($cadena){
            //$lineas=explode("\n",$cadena);
            $lineas=preg_split("/[\r]?[\n]/",$cadena);
            echo "<table>\n";
            foreach($lineas as $linea){
                generaFila($linea);
            }
            echo "</table>\n";
        }

        function filecsvToHtmlTable($file){
            $lineas=file_get_contents($file);
            txtcsvToHtmlTable($lineas);
        }

        function _filecsvToHtmlTable($cadena){
            $lineas=explode("\n",$cadena);
            echo "<table>\n";
            foreach($lineas as $linea){
                generaFila($linea);
            }
            echo "</table>\n";
        }
    
        function csvToHtmlTable($file){
            $handle=fopen($file, "r");
            echo "<table>\n";
            while($linea=fgets($handle)){
                generaFila($linea);
            }
            echo "</table>\n";
        }
    //}else{
        ?>
        <div class="form">
            <form action="" method="post" enctype="multipart/form-data">
            <textarea name="csv"></textarea>
            <button type="submit">Enviar</button>
            </form>
        </div>
        <?php
        //}
        ?>
</body>
</html>