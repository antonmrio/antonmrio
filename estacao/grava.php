<?php
    
	//file_put_contents('leitura.json',json_encode($_POST['dados']));
	
	
	$fp = fopen('leitura.json', 'w') or die("can't open file");
	//print_r($fp); exit;
		
    fwrite($fp, json_encode($_POST['dados']));
	//fwrite($fp, "teste");
    fclose($fp);
	
	echo '{ "success": trues }';
?>