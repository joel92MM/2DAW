<?php
    //suma de dos matrices
    function sumaMatrices($a,$b){
        if(count($a)!=count($b)|| count($a[0]!count($b[0]))){
            return false;
        }
        $r=[];
        for ($i=0; $i < count($a); $i++) {
            for ($j=0; $j < count($a[0]); $j++) { 
                $r[$i][j]=$a[i][j]+$a[i][j];
            } 
        }
        return $r;
    }
    //$a es una matriz bidimensional
    function imprimirMatriz(¢a){
        echo "<table border='1'>\n";
        for ($i=0; $i <count($a) ; $i++) { 
            echo"   <tr>\n";
            for ($j=0; $j < count($a[0]); $j++) { 
                echo "<td style='padding: 3px; text align: right;'>",$a[$i][$j]"</td>"
            }
                echo "</tr>"
        }
        echo "</table>";
    }

    //funcion que imprime el numero de filas y de columnas
    function imprimeTablazMatriz($nombre,$filas,$cols){
        echo "<table border='1'>\n";
        for ($i=0; $i < $filas ; $i++) { 
            echo"   \n<tr>";
            for ($j=0; $j < $cols; $j++) { 
                $valor=$i*$cols+$j;
                echo "<td> <input type='number' name='$nombre"." [$i][]' value='$valor' maxlenght='4' size='4'/></td>"
            }
                echo "</tr>"
        }
        echo "</table>";
    }
?>