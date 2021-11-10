<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="refresh" content="1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 05</title>
    <style>
        table{
            display: inline-block;
            background-color: lightblue;
            margin: 10px;
        }
    </style>
</head>
<body>
    <?php
    require_once("../config.php");
    require_once("../Utilidades/funcionesAuxiliares.php");
    mostrarFechaActual();
    mostrarHoraActual();
    echo "<hr/>", __DIR__;
    ?>
</body>
</html>