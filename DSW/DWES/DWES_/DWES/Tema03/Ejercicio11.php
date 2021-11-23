<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 11 - JORGE ESCOBAR VIÑUALES</title>
</head>
<body>
  <?php
  require_once("../config.php");
  //Array de la puntuación de las cartas
  $puntuacionCartas=array('as'=> 1, 'dos'=>2, 'tres'=>3, 'cuatro'=>4, 'cinco'=>5,'seis'=>6, 'siete'=>7, 'sota'=> 10, 'caballo'=>11, 'rey'=>12);
  //Array del palo de las cartas
  $paloCartas=array('bastos', 'copas', 'espadas', 'oros');
  //Array de las figuras de las cartas
  $figuraCartas=array('as', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'sota', 'caballo', 'rey');

  //Número de cartas tiradas
  $cartasTiradas="";
  //Contador de las cartas tiradas
  $contCartasTiradas=0;
  //Total de puntos obtenidos
  $totalPuntos=0;
  
  do {
    //Random del palo de las cartas
    $palo=$paloCartas[rand(0, 3)];
    //Bucle for que lo recorre 10 veces
    for($i=0;$i=10;$i++){
      //Si el palo de la carta es bastos
      if($paloCartas == 'bastos'){
        //Genera un random de la figura de la carta de bastos
        $figuraCartas = $puntuacion[rand(0,9)];
        //Lo muestra en imagen
        echo "<img src='../img/barajaEspa/bastos",$puntuacion[$i],".png'/>";
        //Si el palo de la carta es copas
      }else if($paloCartas == 'copas'){
        //Genera un random de la figura de la carta de copas
        $figuraCartas = $puntuacion[rand(0,9)];
        //Lo muestra en imagen
        echo "<img src='../img/barajaEspa/copas",$puntuacion[$i],".png'/>";
        //Si el palo de la carta es espadas
      }else if($paloCartas == 'espadas'){
        //Genera un random de la figura de la carta de espadas
        $figuraCartas = $puntuacion[rand(0,9)];
        //Lo muestra en imagen
        echo "<img src='../img/barajaEspa/espadas",$puntuacion[$i],".png'/>";
        //Si el palo de la carta es oros
      } else if($paloCartas == 'oros'){
        //Genera un random de la figura de la carta de oros
        $figuraCartas = $puntuacion[rand(0,9)];
        //Lo muestra en imagen
        echo "<img src='../img/barajaEspa/oros",$puntuacion[$i],".png'/>";
      }
    }
    //Hasta que el contador de las cartas tiradas llegue a 10
  }while($contCartasTiradas=10);
  
  ?>
</body>
</html>