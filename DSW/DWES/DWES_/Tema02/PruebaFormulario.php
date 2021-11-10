<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<?php if($_POST){
	    $num=$_POST['num'];
	    echo "El número enviado es: $num y el doble es: ", 2*$num;
    } else {?>
	<form action="" method="post" enctype="multipart/form-data">
	<label for="num">Número:</label>
	<input type="number" name="num" id="num"/>
	<button type="submit">Enviar</button>
	</form>
<?php }?>
</body>
</html>