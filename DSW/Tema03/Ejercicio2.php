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
        Programa que muestre en una <table> los seis números ordenados de un sorteo de la
        primitiva (números aleatorios entre [1,49]). Mostrar la fecha y la hora del sorteo.
        </h1>
        <br/>
        <hr/>
            <?php
                    require_once("../Tema03/FuncionesAuxiliares/funcionesAuxiliares");
                    

                    echo "<table>
                            <tr>
                                <td>Minimo</td>
                                <td>Maximo</td>
                                <td>Lista Ordenada</td>
                            </tr>
                            <tr>
                                <td>";
                                ordenamiento(1,49);
                    echo        
                                "</td>
                                <td></td>
                                <td>"
                                
                    echo            "</td>
                            </tr>
                        </table>"
                
            ?>
          
    </body>
</html>