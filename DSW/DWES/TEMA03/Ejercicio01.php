<!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>
        Programa que reciba por "GET" número de filas (f) y número de columnas (c) y
        muestre formulario para pedir 2 matrices de fxc y que al enviar los datos muestre la suma de ambas
        (ampliar para el producto de matrices)
        </h1>
        <br/>
        <hr/>
            <?php
                if($_POST){
                    require_once("../Tema03/FuncionesAuxiliares/funcionesAuxiliares");
                    $a=$_POST['a'];$b=$_POST['b'];
                    $c=sumaMatrices($a, $b);

                    echo "<table>
                            <tr>
                                <td>"
                                imprimirMatriz($a);
                    echo        "</td>
                                <td>+</td>
                                <td>";
                                imprimirMatriz($b);
                    echo        
                                "</td>
                                <td>=</td>
                                <td>"
                                imprimirMatriz($c);
                    echo            "</td>
                            </tr>
                        </table>"
                }else if($_GET){
                    require_once("../Tema03/FuncionesAuxiliares/funcionesAuxiliares")
                    $filas=$_POST['filas'];$cols=$_POST['cols'];
                    echo "<form action='' method='POST' enctype='multipart/form-data'";

                    echo "<table>
                            <tr>
                                <td>"
                                imprimirMatriz("a",$filas,$cols);
                    echo        "</td>
                                <td>+</td>
                                <td>";
                                imprimirMatriz("b",$filas,$cols);
                    echo    "   </td>
                            </tr>
                            <tr>
                                <td>
                                    <button type='submit'>Enviar</button>
                                </td>
                                <td>
                                    <button type='reset'>Borrar Formulario</button>
                                </td>
                            </tr>
                        </table>
                        </form>";
                }else{
                    ?>
                    <form action="" method="GET" enctype="multipart/form-data">
                        <table>
                            <tr><td><label for="filas">Filas:</label></td><td><input name="filas" id="filas" type="number" min="1" max="20" size="4"></td></tr>
                            <tr><td><label for="cols">Cols:</label></td><td><input name="cols" id="cols" type="number" min="1" max="20" size="4"></td></tr>                                  
                            <tr><td><button type="submit">Enviar</button></td><td><button type="reset">Borrar Formulario</td></tr>                                  
                        </table>    
                    </form>

                    <?php
                }
            ?>
          
    </body>
</html>