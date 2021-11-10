t<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <style>
        .blanco{background-color: white;}
        .negro{background-color: black;}
        .seleccionada{background-color: purple;}
    </style>
    <script>
        recargar(){
            document.location = $i
        }
    </script>
</head>
<body>
    <?php
    require_once("../config.php");
    /**
     * 
     
        function inicioDiagonalPrincipal(int $x, int $y):array {
            $min= $x<$y ? $x :$y;
            return [$x-$min,$y-$min];
        }*/

        /**
         * Funcion que devuekve un array
         */
        function inicioDiagonalPrincipal(int $x, int $y):array {
            while ($x>0 && $y>0){
                $y--;
                $x--;
            }
            return [$x,$y];
        }

        function inicioDiagonalSecundaria(int $x, int $y):array {
            while ($x<7 && $y>0){
                $x++;
                $x--;
            }
            return [$x,$y];
        }


        function estaDiagonalCelda(array $original,array $celda, float $pendiente=1):bool {
            return $original[0]-$celda[0]==$pendiente*($original[1]-$celda[1]);
        }
        fu

        function idToCoord(String $id, int $filas): array{
            $letras= preg_split("/[0-9]+",$id,-1, PREG_SPLIT_NO_EMPTY)[0];
            $digitos= preg_split("/[a-z]+",$id,-1, PREG_SPLIT_NO_EMPTY)[0];
            $y=$filas-intval($digitos);
            $x=ord($letras)-ord('a');

            return [$x,$y];
        }
        function coordToId(array $coor, $filas=8):string{
            return chr(ord('a')+$coor[0]).strval($coor[1]+$filas);

        }

        function estaEnLinea (array $original, array $celda){
            return abs($original[0]-$celda[0])==abs($original[1]-$celda[1]);
        }

        function dibujarTablero( int $filas, int $cols, String $id=null):void{
            $color="blanco";
            echo "<table> border='1' \n";
                for ($i=0; $i < $filas; $i++) { //y
                    echo "<tr>";
                    echo "<th>",$filas-$i,"</th>";
                    for ($j=0; $j < $cols; $j++) { //x
                        $idCeldaActual=idToCoord([$j,$i]);
                        echo "<td> id='$idCeldaActual' onclick='recargar(this.id);' class='";

                        if($id!=null && ([$x,$y]=idToCoord($id)) && estaEnLinea([$x,$y][$j,$i])){
                            echo "seleccionada";
                        }elseif($i+$j%2==0){
                            echo 'blanco';
                        }else{
                            echo 'negro';
                        }
                        echo "></td>";
                    }
                    echo "</tr>";
                }
                echo "<tr><th></th>";
                for ($j=0; $j < $cols; $j++) { 
                    echo "<th>",chr(ord('a')+$j),"</th>";
                }
                echo "</tr>";
               
            echo "</table>\n";
        }
        $filas=$cols=8;
        if($_GET && isset($_GET['id'])){
            dibujarTablero($filas,$cols,$_GET['id']);
        }else{
            dibujarTablero($filas,$cols);
        }
    ?>
</body>
</html>

