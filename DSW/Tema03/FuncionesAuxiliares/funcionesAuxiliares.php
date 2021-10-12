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
    funct

    //funcion que imprime el numero de filas y de columnas
?>