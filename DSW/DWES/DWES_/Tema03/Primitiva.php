<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<?php
	function primitiva() {
	    $res=[];
	    while(count($res)<6) {
	        $n=rand(1,49);
	        if (!in_array($n, $res)){
	            array_push($res, $n);
	        }
	    }
	    sort($res);
	    return $res;
	}
	$sorteo=primitiva();
	echo "<table>
            <tr>";
	foreach($sorteo as $valor) {
	    echo "<td>$valor</td>";
	}
	echo "  </tr>
           </table>";
	print_r(primitiva());
	?>
</body>
</html>