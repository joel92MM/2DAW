<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 12 - JORGE ESCOBAR VIÑUALES</title>
</head>
<body>
    <?php
    require_once("../config.php");
    $blanco=" ";
    $negro="███";

    //Se hace una tabla de ajedrez
    echo "<h1>Tablero de Ajedrez<h1>";
    echo "<table border = '1'>";
    for ($a=1; $a<=4;$a++) {
        echo "<tr>";
        for ($i=1;$i<=4;$i++) { 
            echo "<td>$blanco</td>";
            echo "<td>$negro</td>";
        }
        echo "</tr>";
        for ($i=1;$i<=4;$i++) { 
            echo "<td>$negro</td>";
            echo "<td>$blanco</td>";
        }
    }
    echo "</table>";
    ?>
</body>
</html>