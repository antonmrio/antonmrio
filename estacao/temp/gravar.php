<?php
session_start();
?>
<!DOCTYPE html>
<html>
<?php
  
  if(!isset({$_SESSION["uname"]})||!isset({$_SESSION["psw"]})){
  	echo "<script>window.location='pagina.php'</script>";
  	exit;
  }
?>
  <head>
    <meta charset="utf-8" />
    <title>Basic JSON Editor Example</title>
	    <!-- Foundation CSS framework (Bootstrap and jQueryUI also supported) -->
    <link rel='stylesheet' href='css/foundation.min.css'>
    <!-- Font Awesome icons (Bootstrap, Foundation, and jQueryUI also supported) -->
    <link rel='stylesheet' href='css/font-awesome.css'>
	
    <script src="js/jsoneditor.js"></script>
	<script src="js/jquery-1.11.3.min.js"></script>
  </head>
  <body>
    <h1>Basic JSON Editor Example</h1>
    
    <div id='editor_holder'></div>
    <button id='submit'>Submit (console.log)</button>
    
    <script>
      // Initialize the editor with a JSON schema
      var editor = new JSONEditor(document.getElementById('editor_holder'),{
        schema: {
          type: "object",
          title: "Comet",
          properties: {
			horarioLocalLeitura: {"title": "Horário local da leitura",type: "string",pattern:"^([0-2][0-9]|(3)[0-1])[a-z][a-z][a-z][0-9][0-9][0-9][0-9]\/[0-2][0-9]\:[0-6][0-9]h$"},
            pressaoAtmosferica: {"title": "Pressão Atmosférica",type: "string",pattern:"^(([0-9][0-9][0-9][0-9])\.([0-9]))|(////)$"},
			temperaturaAr: {"title": "Temperatura do Ar",type: "string","pattern":"^(([0-9][0-9])\.([0-9]))|(////)$"},
			temperaturaMax: {"title": "Temperatura Máxima",type: "string","pattern":"^(([0-9][0-9])\.([0-9]))|(////)$"},
			temperaturaMin: {"title": "Temperatura Mínima",type: "string","pattern":"^(([0-9][0-9])\.([0-9]))|(////)$"},
			umidadeRelativaAr: {"title": "Umidade Relativa do Ar",type: "string","maxLength": 2},
			umidadeMin: {"title": "Umidade Mínima",type: "string","maxLength": 2},
			chuvaAcumulada24h: {"title": "Chuva Acumulada em 24h",type: "string",pattern:"^(([0-9]|[1-9][0-9]|1[0-9][0-9])\.([0-9]))|(////)$"},
			chuvaAcumuladaSemana: {"title": "Chuva Acumulada na Semana",type: "string",pattern:"^(([0-9]|[1-9][0-9]|1[0-9][0-9])\.([0-9]))|(////)$"},
			chuvaAcumuladaMes: {"title": "Chuva Acumulada no Mês",type: "string",pattern:"^(([0-9]|[1-9][0-9]|1[0-9][0-9])\.([0-9]))|(////)$"},
			ventoIntensidade: {"title": "intensidade do vento",type: "string"},
			ventoDirecao: {
			"title": "Direção do vento",
			type: "string",
			 enum: [
                "E: este/leste",
				"N: norte",
				"O: oeste",
				"S: sul",
				"NE: nordeste",
				"NO: noroeste",
				"SE: sudeste",
				"SO: sudoeste",
				"ENE: lés-nordeste",
				"ESE: lés-sudeste",
				"SSE: sul-sudeste",
				"NNE: nor-nordeste",
				"NNO: nor-noroeste",
				"SSO: sul-sudoeste",
				"OSO: oés-sudoeste",
				"ONO: oés-noroeste"
              ]
			}
            
          }
        }
      });
	  
      
      // Hook up the submit button to log to the console
      document.getElementById('submit').addEventListener('click',function() {
        // Get the value from the editor
        console.log(editor.getValue());
		
		
				$.ajax({
					url     : 'grava.php',
					method  : 'post',
					data    : { 'dados': editor.getValue() },
					success : function( response ) {
						alert( response );
					}
				});
		
      });
    </script>
  </body>
</html>