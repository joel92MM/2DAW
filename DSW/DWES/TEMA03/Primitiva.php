<!DOCTYPE html>
<html>
    <head>
    	<meta charset="UTF-8">
    	<title></title>
    </head>
    <body>
    	<?php
    	   function primitiva() {
    	       $res=[];
    	       while (count($res)<6) {
    	           $numero=rand(1,49);
    	           if(!in_array($numero,$res)){
    	               array_push($res,$numero);
    	           }
    	       }
    	       sort($res);
    	       return $res;
    	       
    	   }
    	   print_r(primitiva());
    	?>
    </body>
</html>

