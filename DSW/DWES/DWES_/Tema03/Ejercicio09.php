<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 09</title>
</head>
<body>
    <?php
    require_once("../config.php");
    $lista="";
    $num=0;
    if($_POST && isset($_POST['num'])){
        $num=$_POST['num'];
        if($num==-1){
            $listaFinal=explode(" ", trim($_POST['lista']));
            echo "<table>\n";
            $suma=0;
            foreach($listaFinal as $i=>$valor){
                echo "<tr><td>",intval($i)+1,"</td><td>",$valor,"</td></tr>";
                $suma+=intval($valor);
            }
            echo "<tr><td>Total:</td><td>$suma</td></tr>";
            echo "</table>\n";
            exit(0);
        }else{
            $lista=$_POST['lista'].$num." ";
        }
    }
    if($num!=-1){
        ?>
        <form action="" method="post" enctype="multipart/form-data">
        <table>
            <tr>
                <td>
                    <label for="num">Número:</label>
                </td>
                <td>
                    <input type="number" id="num" name="num"/>
                </td>
                <input type="hidden" name="lista" id="lista" value="<?=$lista;?>"/>
            </tr>
            <tr>
                <td>
                    <button type="submit">Enviar</button>
                </td>
                <td>
                    <button type="reset">Borrar formulario</button>
                </td>
            </tr>
        </table>
    </form>
    <?php
    }
    ?>
</body>
</html>