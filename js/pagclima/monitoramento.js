$(document).ready(function() {
    //Cartas Sup e Alt
    $(".box1").colorbox({iframe: true,innerWidth: 1160,innerHeight: 900,onOpen: function() {}});
    $(".box2").colorbox({iframe: true,innerWidth: 760,innerHeight: 600,onOpen: function() {}});
    $(".box3").colorbox({iframe: true,innerWidth: 760,innerHeight: 630,onOpen: function() {}});
    $(".box4").colorbox({iframe: true,innerWidth: 500,innerHeight: 355,onOpen: function() {}});

// Dados diários Brasil e AMS

$("#mon_br").change(function(event) {

	var campo= $('#mon_br select[name="campo"]').val();
	var mes= $('#mon_br select[name="mes"]').val();
	var ano= $('#mon_br select[name="ano"]').val();
	var imageName="http://meteoro.cefet-rj.br/clima/"+ano+mes+"/"+campo+ano+mes+".png";
	$(".figuras").html("<img src="+imageName+">");
});   

// Dados diários Brasil e AMS

$("#mon_cidades").change(function(event) {

        var cidades= $('#mon_cidades select[name="cidades"]').val();
        var mes= $('#mon_cidades select[name="mes"]').val();
        var ano= $('#mon_cidades select[name="ano"]').val();
        var imageName="http://meteoro.cefet-rj.br/clima/"+ano+mes+"/serie_"+ano+mes+"-"+cidades+".png";
        $(".figuras").html("<img src="+imageName+">");
});

// Dados mensais Brasil, AMS e Global

$("#dad_men").change(function(event) {
		var mm = new Array("xx","01","02","03","04","05","06","07","08","09","10","11","12");
		var meses = new Array("xx","jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez");
	var regiao= $('#dad_men input[name="regiao"]').val();    	   	
	var campo= $('#dad_men select[name="campo"]').val();
	var mes= $('#dad_men select[name="mes"]').val();
	var ano= $('#dad_men select[name="ano"]').val();
	if(regiao == "brasil"){  
		var imageName="http://img0.cptec.inpe.br/~rclima/historicos/mensal/brasil/"+meses[mes]+"/"+campo+mm[mes]+ano+".gif";
	}
	else if(regiao == "AMS"){  
		var imageName="http://img0.cptec.inpe.br/~rclima/historicos/mensal/america_do_sul/"+meses[mes]+"/"+campo+mm[mes]+ano+".gif";
	}
	else{
		var imageName="http://img0.cptec.inpe.br/~rclima/historicos/mensal/global/"+campo+mes+ano+".gif";
	}
	$(".figuras").html("<img src="+imageName+">");
});

// Climatologias mensal Brasil Sazonal

$("#clim_men").change(function(event) { 
	var campo= $('#clim_men select[name="campo"]').val();
	var mes= $('#clim_men select[name="mes"]').val();
	var imageName="http://img0.cptec.inpe.br/~rclima/climatologias/mensal/brasil/"+campo+mes+".gif";
	$(".figuras").html("<img src="+imageName+">");
});



// Climatologias Trimestral Brasil Sazonal

$("#clim_tri").change(function(event) { 
	var campo= $('#clim_tri select[name="campo"]').val();
	var mes= $('#clim_tri select[name="mes"]').val();
	var imageName="http://img0.cptec.inpe.br/~rclima/climatologias/sazonal/brasil/"+campo+mes+".gif";
	$(".figuras").html("<img src="+imageName+">");
});

// Climatologias Brasil e Global

$("#climatologia").change(function(event) { 
	var regiao= $('#climatologia input[name="regiao"]').val();
	var campo= $('#climatologia select[name="campo"]').val();
	var mes= $('#climatologia select[name="mes"]').val();
	if(regiao == "brasil"){
		var imageName="http://img0.cptec.inpe.br/~rclima/climatologias/mensal/brasil/"+campo+mes+".gif";
	}else{
		var imageName="http://img0.cptec.inpe.br/~rclima/climatologias/mensal/global/"+campo+mes+".gif";
	}	
	$(".figuras").html("<img src="+imageName+">");
});

// Dados anuais Global

$("#dados_anuais").change(function(event) {
	var campo= $('#dados_anuais select[name="campo"]').val();
	var ano= $('#dados_anuais select[name="ano"]').val();    	
	var imageName="http://img0.cptec.inpe.br/~rclima/historicos/anual/osc3060/"+campo+ano+".gif";
	$(".figuras").html("<img src="+imageName+">");
});


// Somente para exibição de Links diretos

$(".imgchange").change(function(event) {
	imageName = $(this).val();
	$(".figuras").html("<img src="+imageName+">");
});

});

// Somente para exibição de Links com multiplas imagens 
function imgmult(){
	img ="<div class='sub3'>"+imgs[0]+"</div>";
	link = "http://img0.cptec.inpe.br/~rclima/";
	for(var i = 1; i<imgs.length;i++){ 
		imsmult = "<img src="+link+imgs[i]+">"; img = img+imsmult;}
		$(".figuras").html(img);
	}
	function imgmultosc(){
		link = "http://img0.cptec.inpe.br/~rclima/";
		img = "<div class='sub3'>"+imgs[0]+"</div><img src="+link+imgs[1]+"><div class='sub3'>"+imgs[2]+"</div><img src="+link+imgs[3]+"><br>Fonte de Dados: NCEP<br>C&aacute;lculo da Anomalia: CPTEC ";
		$(".figuras").html(img);
	}









	var ano_atual = new Date().getFullYear();

	var brchuvat=new Array(ano_atual,1961);
	var tempmin=new Array(ano_atual,1961);
	var tempmax=new Array(ano_atual,1961);
	var urel=new Array(2000,1961);
	var ndx=new Array(2000,1961);
	var abrchuvat=new Array(ano_atual,1961);
	var atmed=new Array(2000,1961);
	var atmin=new Array(ano_atual,1961);
	var atmax=new Array(ano_atual,1961);
	var aurel=new Array(2000,1961);

	function muda_ano(valor){
		var cond = valor;
		variavel=eval(cond)


		if (cond != 0) {
			qtdlen = variavel[0]-variavel[1]+1;
			num_anual = qtdlen;
			document.dad_men.ano.length = num_anual;


			for(a=0;a<num_anual;a++){
				aa = variavel[0]; 
				cc =  aa - a;
				number = "n"+cc;
				document.dad_men.ano.options[a].value=number.substr(3,4);
				document.dad_men.ano.options[a].text=cc;
			}

		}
		dados_mensais();
	}

