<?php
    //suma dos matrices bidimensionales
    function sumaMatrices($a,$b) {
        if (count($a)!=count($b) || count($a[0])!=count($b[0])) {
            return false;
        }
        $r=[];
        for($i=0;$i<count($a);$i++) {
            for($j=0;$j<count($a[0]);$j++) {
                $r[$i][$j]=$a[$i][$j]+$b[$i][$j];
            }
        }
        return $r;
    }
    
    //$a es una matriz bidimensional
    function imprimirMatriz($a) {
        echo "<table border='1'>\n";
        for($i=0;$i<count($a);$i++) {
            echo "  <tr>\n";
            for($j=0;$j<count($a[0]);$j++) {
                echo "<td style='padding: 3px; text-align: right'>",$a[$i][$j],"</td>\n";
            }
            echo "</tr>\n";
        }
        echo "</table>";
    }
    
    function imprimeTablaMatriz($nombre,$filas,$cols) {
        echo "  <table border='1'>\n";
        for($i=0;$i<$filas;$i++) {
            echo "<tr>\n";
            for($j=0;$j<$cols;$j++) {
                $valor = $i*$cols+$j;
                echo "<td><input type='number' name='$nombre"."[$i][]' value='$valor' maxlength='4' size='4'/></td>";
            }
            echo "</tr>\n";
        }
        echo "</table>";
    }
    
    function _mostrarImgNum($num, $width=0.25) {
        $relativePath = "/imagenes/numeros/".$num.".png";
        $urlFile = ROOT_PATH.$relativePath;
        $realFile = __DIR__."/..$relativePath";
        $newWidth = intval(getimagesize($realFile)[0]*$width);
        echo "<img src='$urlFile' width='$newWidth'/>";
    }
    
    function mostrarImgNum($num, $width=0.25) {
        $num = strval("$num");
        for ($i = 0; $i < strlen($num); $i++) {
            _mostrarImgNum($num[$i]);
        }
    }
    
    function mostrar($claves, $fecha = null) {
        date_default_timezone_set('Atlantic/Canary');
        if (fecha == null) {
            $fecha = getdate();
        }
        echo "<table>
                <tr>";
        foreach ($claves as $c) {
            echo "  <td>";
            if ($fecha[$c] < 10) {
                mostrarImgNum(0);
            }
            mostrarImgNum($fecha[$c]);
            echo "  </td>";
        }
        echo "  </tr>
            </table>";
    }

    function mostrarHoraActual() {
        mostrar(["hours", "minutes", "seconds"]);
    }
    
    function mostrarFechaActual() {
        mostrar(["mday", "mon", "year"]);
    }
    
    function mostrarImg($nombre, $ruta, $width=0.25) {
        $relativePath = "/imagenes/".$ruta."/".$nombre.".png";
        $urlFile = ROOT_PATH.$relativePath;
        $realFile = __DIR__."/..$relativePath";
        $newWidth = intval(getimagesize($realFile)[0]*$width);
        return "<img src='$urlFile' width='$newWidth'/>";
    }
    
    function abrirFichero($filePath, $modo = "r+") {
        /*if (!($resultado = fopen($filePath, $modo))) {
         exit(1);
         }
         return $resultado;*/
        
        $resultado = fopen($filePath, $modo);
        if ($resultado) {
            return $resultado;
        }
        echo "<span style='color: red; font-size: big;'>No se ha podido abrir el fichero.</span>";
        exit(1);
    }
    
    function lecturaContador() {
        $contador = 0;
        $fcontador = DATA_PATH."/contador.txt";
        
        if (file_exists($fcontador)) {
            $file = abrirFichero($fcontador);
            $contador = intval(fgets($file));
            fseek($file, 0);
        } else {
            $file = abrirFichero($contador, "w+");
        }
        $contador++;
        fwrite($file, strval($contador));
        fclose($file);
        return $contador;
    }

?>