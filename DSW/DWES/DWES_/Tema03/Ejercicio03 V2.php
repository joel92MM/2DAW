<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Ejercicio 03</title>
</head>
<body>
	<?php
	require_once("../config.php");
	$num=rand(10000,99999);
	$numStr=strval($num);
	for($i=0;$i<strlen($numStr);$i++){
		echo "<img src='",ROOT_PATH,"../img/imgNumeros/",$numStr[$i],".png'/>";
	}
	

	?>
</body>

</html>