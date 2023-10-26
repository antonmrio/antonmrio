<?php
  session_start();
?>
<html lang="pt-BR">
<head>
<link rel="stylesheet" type="text/css" href="css/radarStyle.css">
<link rel="stylesheet" type="text/css" href="css/styles.css">
<script src="https://kit.fontawesome.com/363b317c51.js"></script>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
<meta charset="UTF-8">
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" >
<meta http-equiv="Cache-Control" content="no-cache, no-store" >
<meta http-equiv="Pragma" content="no-cache, no-store" >
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv='X-UA-Compatible' content='IE=edge,chrome=1' />
<link rel='stylesheet' type='text/css' href='../css2.css' />
<script src="https://cdnjs.cloudflare.com/ajax/libs/numeric/1.2.6/numeric.min.js"></script>
 <!-- Plotly.js -->
 <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>

<title>Laboratório de Análises e Previsões Ambientais - CoordMet / CEFET-RJ</title>
<script src="https://code.jquery.com/jquery-1.7.1.min.js"></script>
<script src="js/jquery.js"></script>
<script type="js/radar.js"></script>

<script>
var xmlhttp = new XMLHttpRequest();
console.log(xmlhttp);
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);

    console.log(myObj);
  for (var k in myObj){
    if (typeof myObj[k] !== 'function') {
      console.log(k);
      document.getElementById(k).innerHTML = myObj[k];
      if (k == 'ventoIntensidade'){document.getElementById('ventoIntensidade2').innerHTML = (myObj[k] * 3.6).toFixed(1);

      }
      if (k == 'temperaturaAr'){document.getElementById('temperaturaAr').value = 1;

      }
      console.log("Key is " + k + ", value is" + myObj[k]);
    }
  }
  }

};
xmlhttp.open("GET", "leitura.json", true);
xmlhttp.send();
</script>



<style>
</style>

</head>

<body id='body'>
<div id="id01" class="modal">
  
  <form class="modal-content animate" action="login.php" method="POST">
    <div class="imgcontainer">
      <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">&times;</span>
      
    </div>

    <div class="contain">
      <label for="uname"><b>Username</b></label>
      <input type="text" placeholder="Enter Username" name="uname" required>

      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required>
        
      <button id="hmm" type="submit">Login</button><br>
      <label id="hmm">
        <input type="checkbox" checked="checked" name="remember"> Remember me
      </label>
    </div>

    <div class="contain" style="background-color:#f1f1f1">
      <button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Cancel</button>
      <span class="psw">Forgot <a href="#">password?</a></span>
    </div>
  </form>
</div>

<script>
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
</script>

<!-- inicio topo-->

<div id='imgtop'>
    <img src='../56.jpg' align='center' height='200' width='100%'>
</div>
<div id='cssmenu'>
<ul>
   <li><a href='../index.html'><span>Home</span></a></li>
   <li><a href='../previsao.html'><span>Previsão do Tempo</span></a></li>
   <li><a href='../clima.html'><span>Previsão de Clima</span></a></li>
   <li><a href='../satelites.html'><span>Satélites</span></a></li>
   <li><a href='../descarga.html'><span>Descarga Atmosférica</span></a></li>
   <li class='active'><a href='pagina1.html'><span>Estação Meteorológica</span></a></li>
</ul>
</div>

<br>
<div class="principal" style="">
  <div class="titulo" style="animation: mymove 2s;">
    <hr class="new5">
        <center><div class="buuu" style="background-color: rgba(255, 255, 255, 0.85);width: 58%;justify-content: center;"><h1 >Estação Meteorológica Convencional</h1>Lat:-22,91º - Long: -43,22º<br>Data e hora local da observação:<span id='horarioLocalLeitura'></span></div></center>
    <hr class="new5">
  </div>
  
  
  <div class="container-fluid">
  <div class="row main" style="background: url('imagens/ceu-limpo.png');background-attachment: fixed; background-size: cover; ">
    <div class="col-md ba">
      <center>
        <span id='temperaturaAr'>
        </span> <b id='temperaturaAr'></b><b class="grau" style="opacity: 0.7;">ºC</b> <i id="icon" class="fas fa-cloud-sun fa-6x" style="opacity: 0.7;"></i> <h6>Sensação Térmica </h6>
      </center>
      <br>
      <p>
        <ul class="list-group">
          <li class="list-group-item">Temperatura Mín: <span style='color:blue' id='temperaturaMin'></span>ºC</li>
          <li class="list-group-item">Temperatura Máx: <span style='color:red' id='temperaturaMax'></span> ºC</li>
          <li class="list-group-item">Umidade Relativa do ar: <span id='umidadeRelativaAr'></span> %</li>
          <li class="list-group-item">Umidade Mín: <span style='color:blue'  id='umidadeMin'></span> % </li>
          <li class="list-group-item">Radiação: W/m2</li>
        </ul>

        <br>
    </div>
    <div class="vl"></div>
    <div class="col-md ba">
     <div id="myDiv" style="position: relative; width: 85%; height: 85%; margin-top:-60px; margin-left: 30px;"><!-- Plotly chart will be drawn inside this DIV --></div>
      <p>
        <ul class="list-group" style="margin-top:-40px;">
        <center><h3 style="color: white;">Vento</h3></center> 
        <li class="list-group-item">Intensidade: <span id='ventoIntensidade2'></span> km/h (<span id='ventoIntensidade'></span> m/s)</li>
        <li class="list-group-item">Direção grau: <span id='ventoDirecao'></span> </li>
        <li class="list-group-item">Pressão atmosférica: <span id='pressaoAtmosferica'></span> hPa</li>
      </ul>
      </p>
    </div>
    <div class="vl"></div>
    <div class="col-md ba" id="rain">
      <center><i style="opacity: 0.7;" class="fas fa-umbrella fa-6x"></i></center>
      <br>
      <br>
      <p>
        <ul>
          <h3 style="color: white;">Chuva</h3>
          <li class="list-group-item">Chuva Acumulada 24h: <span id='chuvaAcumulada24h'></span></li>
          <li class="list-group-item">Chuva Acumulada na semana: <span id='chuvaAcumuladaSemana'></span> mm</li>
          <li class="list-group-item">Chuva Acumulada no mês: <span id='chuvaAcumuladaMes'></span> mm</li>
        </ul>
      </p>
    </div>
  </div>
  </div>
  <!--div class="graficos grid-container">
    <div class="grid-item">Arquivo Editavel 1</div>
        <div class="grid-item">Grafico pressão atmosferica Data: dd/mm/aa</div>
        <div class="grid-item">Arquivo Editavel 2</div>
        <div class="grid-item">Grafico Temperatura Data: dd/mm/aa</div>
        <div class="grid-item">Arquivo Editavel 3</div>
        <div class="grid-item">Grafico Umidade Relativa Data: dd/mm/aa</div>
  </div>
</div-->

<br>
<div id="rodape">
  <p>Desenvolvido pelo Laboratório de Análises e Previsões Ambientais - CoordMet / CEFET-RJ.</p>
<a href='politica.html'>Política de Uso</a> | <a href='quemsomos.html'>Quem Somos.</a>

    <a target="_blank" id="login" onclick="document.getElementById('id01').style.display='block'"><span>Login</span></a>


</div>

</body>
</html>

<script type="text/javascript">
var trace1 = {
r: [0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
theta:['Leste', 'LNE', 'N-E', 'NNE', 'Norte', 'NNO', 'N-O', 'ONO', 'Oeste', 'OSO', 'S-O', 'SSO', 'Sul', 'SSE', 'S-E','LSE'],
t: ['North', 'N-E', 'East', 'S-E', 'South', 'S-W', 'West', 'N-W'],
marker: {color: 'green'},
type: 'barpolar'
};

var data = [trace1];

var layout = {
font: {size: 14, color: 'rgb(0,0,0)'},
legend: {font: {size: 16}},
radialaxis: {ticksuffix: '%'},
orientation: 0,
paper_bgcolor:'rgba(0,0,0,0)'
};

Plotly.newPlot('myDiv', data, layout,{displayModeBar: false});
</script>