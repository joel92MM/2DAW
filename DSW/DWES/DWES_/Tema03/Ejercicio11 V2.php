<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 11</title>
</head>
<body>
    <?php
    require_once("../config.php");
    require_once(PROJECT_PATH."/Utilidades/funcionesAuxiliares.php");
    $valoresCartas=[4,11,0,10,0,0,0,0,0,0,2,3];
    $cartasAleatorias=arrayNumAleatorios(1,48,10);
    $puntuacion=0;
    foreach($cartasAleatorias as $carta){
        if($carta<=12){
            $palo="bastos";
        }else if($carta<=24){
            $palo="copas";
        }else if($carta<=36){
            $palo="espadas";
        }else{
            $palo="oros";
        }
        $numeroCarta=$carta%12;
        $puntuacion+=$valoresCartas[$numeroCarta];
        if($numeroCarta==0){
            $numeroCarta=12;
        }
        $imageSrcUrl=ROOT_PATH."/img/barajaEspa/$palo/${palo}${numeroCarta}.png";
        echo "<img src='$imageSrcUrl'/>";
    }
    echo "<span style='color= blue; font-size= 18pt;'>Puntuación: $puntuacion</span>";
    ?>
</body>
</html>