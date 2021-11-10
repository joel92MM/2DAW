<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<?php
	function cuadrado(&$x) {
	    $x=$x*$x;
	    return $x;
	}
	$y=5;
	$y=cuadrado($y);
	echo"y: $y";
	?>
</body>
</html>