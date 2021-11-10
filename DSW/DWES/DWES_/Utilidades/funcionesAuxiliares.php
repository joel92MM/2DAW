<?php
    //Suma dos matrices bidimensionales
    function sumaMatrices($a, $b) {
        if(count($a) != count($b) || count($a[0]) != count($b[0])){
            return false;
        }
        for($i=0;$i<count($a);$i++){
            for ($j=0;$j<($a[0]);$j++) {
                $r[$i][$j]=$a[$i][$j]+$b[$i][$j];
            }
        }
        return $r;
    }
    
    //$a es una matriz bidimensional
    function imprimirMatriz($a) {
        echo "<table border='1'\n>";
        for($i=0;$i<count($a);$i++){
            echo "      <tr>\n";
            for($j=0;$j<count($a);$j++){
                echo "<td style='padding: 3px;' text-align: 'right'>", $a[$i][$j],"</td>";
            }
            echo "      </tr>\n";
        }
        echo "</table>";
    }
    
    //Imprimir tabla de matrices
    function imprimeTablaMatriz($nombre,$filas,$cols) {
        echo "<table border='1'>\n";
        for ($i=0;$i<$filas;$i++) {
            echo"\n<tr>";
            for ($j=0;$j <$cols;$j++) {
                $valor=$i*$cols+$j;
                echo"<td><input type='number' name='$nombre"."[$i][]' value='$valor' maxlength='4' size='4' /> </td>";
            }
            echo "</tr>\n";
        }
        echo "</table>";
    }

    //Mostrar imágenes de los números
    function _mostrarImgNum($num,$width=0.25){
        $relativePath="/img/imgNumeros/".$num.".png";
        $urlFile=ROOT_PATH.$relativePath;// /PHP/DWES/img/imgNumeros/1.png
        $realFile=__DIR__."/..$relativePath";// /home/daw/PHP/utilidades/../img/imgNumeros/1.png
        //echo "realFile: $realFile<br/>";
        $newWidth=intval(getimagesize($realFile)[0]*$width);
        echo "<img src='$urlFile' width='$newWidth'/>";
    }

    //Mostrar imágenes de los números
    function mostrarImgNum($num, $width=0.25){
        $num=strval($num);
        for($i=0;$i<strlen($num);$i++){
            _mostrarImgNum($num[$i]);
        }
    }

    //Mostrar fecha y hora
    function nombrePorDeterminar($claves, $fecha=null){
        date_default_timezone_set('Atlantic/Canary');
        if($fecha==null){
            $fecha=getdate();
        }
        echo "<table>
                <tr>";
        foreach($claves as $c){
            echo "  <td>";
            if($fecha[$c]<10){
                mostrarImgNum(0);
            }
            mostrarImgNum($fecha[$c]);
            echo "  </td>";
        }
        echo "  </tr>
               </table>";
    }

    //Mostrar hora actual
    function mostrarHoraActual($fecha=null){
        nombrePorDeterminar(["hours","minutes","seconds"],$fecha);
    }

    //Mostrar fecha actual
    function mostrarFechaActual($fecha=null){
        nombrePorDeterminar(["mday","mon","year"],$fecha);
    }

    //Función Tabla a HTML
    function tablaToHtml($array,$mostrarIndices=false){
        echo "<table border='1'>\n";
        foreach($array as $indice=>$valor){
            echo "<tr>";
            if($mostrarIndices){
                echo "<td>$indice</td>";
            }
            echo "<td>$valor</td>";
            echo "</tr>";
        }
        echo "</table>\n";
    }


    /**
     * Array de números aleatorios comprendidos entre $min, $max
     * de $cantidad de elementos
     * @param int $min del número
     * @param int $max del número
     * @param int $cantidad de números
     * @return array de los números aleatorios entre $min, $max
     */
    function arrayNumAleatorios(int $min,int $max,int $cantidad, bool $ordenado=false):array{
        $resultado=[];
        while(count($resultado)<$cantidad){
            $nuevo=rand($min,$max);
            if(!in_array($nuevo,$resultado)){
                array_push($resultado,$nuevo);
            }
        }
        if($ordenado){
            sort($resultado);
        }
        return $resultado;
    }
?>