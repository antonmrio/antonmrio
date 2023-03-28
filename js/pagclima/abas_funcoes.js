 function getByClass(nodeParent,tag,nameClass){
	nodeTags=nodeParent.getElementsByTagName(tag);
	j=0;
	classElements=new Array();
	
	for(i=0;i<nodeTags.length;i++){
		if(nodeTags[i].className==nameClass){
			classElements[j]=nodeTags[i];
			j++;
		}
	}
	return classElements;
}



function styleLabels(listArray){
	for(i=0;i<listArray.length;i++){
		listArray[i].style.left='-'+i*8+'px';
		listArray[i].style.zIndex=noliAux.length-i;
	}
}


pestanasStart=function(){

	if(docId('ltxt')){linP=docId('ltxt').innerHTML;}
	if(docId('wtxt')){winP=docId('wtxt').innerHTML;}

	var arrayContents=new Array();
	var arrayPestanas=new Array();
	var arrayContPestanas=new Array();
	var arrayLabels=new Array();
			
	if(docId('lprice')){
			changeWinLinLabel('lin');
	}
	

	arrayLabels=getByClass(document,'div','labels');	

	for(m=0;m<arrayLabels.length;m++){
		noliAux=arrayLabels[m].getElementsByTagName('li');
		showLabelLayer(noliAux[0].id.substring(0,noliAux[0].id.length-1),true); //la primera por defecto
				
		for (i=0;i<noliAux.length;i++){ /*escondo-muestro capas principales segun el ancla del enlace */
			
			arrayContents[i]=docId(noliAux[i].id.substring(0,noliAux[i].id.length-1));
			
			if(!docId('inicio')) leftLabel=8;
			else leftLabel=-1; //index
			
			noliAux[i].style.left=-1*i*leftLabel+'px';
			noliAux[i].style.zIndex=noliAux.length-i;
			
			noliAux[i].onclick=function(){
				labelLayer=this.id.substring(0,this.id.length-1);
				showLabelLayer(labelLayer,true);
				
				if(labelLayer=='info_linux'){
					changeWinLinLabel('lin');
					ancCompTable.href=urlCompTable+'?dc='+dc;
				}else if(labelLayer=='info_windows'){
					changeWinLinLabel('win');
					ancCompTable.href=urlCompTable+'?so=w&dc='+dc;
				}
				
				return false;
			}
		}
		
	//	if(Request.QueryString("p") != 'undefined' && noliAux[0].id=='c1l'){ //caso especial variable ?p=xxx
		//	pest=Request.QueryString("p");
		//	showLabelLayer('c'+pest,true);
		//}

		//index
		if(docId('inicio')){
			var linksCar=new Array();
			for(i=0;i<arrayContents.length;i++){
				carLinks=arrayContents[i].getElementsByTagName('a');
				linksCar=carLinks[carLinks.length-1];
			}
			
			for(i=0;i<arrayContents.length;i++){
				arrayContents[i].style.cursor='pointer';
				arrayContents[i].onclick=function(){
					carLinks=this.getElementsByTagName('a');
					linkCar=carLinks[carLinks.length-1];
					location.href=linkCar;
				}
			}
		}
	
		arrayContPestanas[m]=arrayPestanas;
	}
	
	if(docId('compTable')){
		urlCompTable=docId('compTable').getElementsByTagName('a')[0].href;
		ancCompTable=docId('compTable').getElementsByTagName('a')[0];
	}
	
	dc='';	
	//alert(document.getElementsByTagName('body')[0].id);
	if(docId('host_web_domredir')) dc=0;
	if(docId('host_web_per')) dc=1;
	if(docId('host_web_prof')) dc=2;
	if(docId('host_web_emp')) dc=3;
	if(docId('host_web_sv')) dc=4;
	if(docId('host_web_svecom')) dc=5;
	if(docId('host_web_svisp')) dc=6;
	
	//pestana win preseleccionada a partir de Servidor Virtual
		if(docId('host_web_sv')||docId('host_web_svecom')||docId('host_web_svisp')){
			changeWinLinLabel('win');
			showLabelLayer('info_windows',true);
			
			//cambio el enlace de tarifas a windows
			ancCompTable.href=urlCompTable+'?so=w&dc='+dc;
		}else{
			if(docId('compTable')){ //entra siempre donde se usean pestañas si no
				ancCompTable.href=urlCompTable+'?dc='+dc;
			}
		}

		var arrayDevuelta=new Array();
		arrayDevuelta[0]=arrayContents;
		arrayDevuelta[1]=arrayContPestanas;
		return arrayDevuelta; 
}

function showLabelLayer(lContentName, manageLayer){

	liName=lContentName+'l';
	lContentID=lContentName.substring(0,lContentName.length-1);

	nodeLi=docId(liName);
	nodeUl=nodeLi.parentNode;
	nodeLis=nodeUl.getElementsByTagName('li');
	labelLayers=new Array();
	
	
	//seleccion de etiqueta
	for(i=0;i<nodeLis.length;i++){
		if(nodeLis[i].id!=liName){ nodeLis[i].className='';
		}else{nodeLis[i].className='select';}
	}

	//seleccion de capa asociada
	if(manageLayer){
		for(i=0;i<nodeLis.length;i++){
			labelLayers[i]=docId(nodeLis[i].id.substring(0,nodeLis[i].id.length-1));
				//if(labelLayers[i].id!=lContentName){ labelLayers[i].className='novisible';
				//}else{labelLayers[i].className='labc';}
		}
	}
}




 function docId(id){
  	return document.getElementById(id);
 }
		

//se salta el frame de arsys.cat
cambiaEnlacesCatStart= function(){
	nodoRegCat=document.getElementById('reg_cat');
	nodoEnlaces=nodoRegCat.getElementsByTagName('A');
	for(i=0;i<nodoEnlaces.length;i++){
		hrefEnlace=nodoEnlaces[i].href;
		longEnlace=hrefEnlace.length;
		extension=hrefEnlace.substring(longEnlace-3,longEnlace);
		if(extension=='pdf'){
			nodoEnlaces[i].target='_blank';
		}else{
			nodoEnlaces[i].target='_parent';
		}
	}
}  

//antiguo validaciones.js
var nav4 = window.Event ? true : false;


function exibir(valor){
//alert (valor);
if (valor == "1")
{
document.getElementById('teste').style.display = 'block';
document.getElementById('teste').style.position = 'absolute';
}
else if (valor =="2"){
document.getElementById('teste').style.display ='none';
}
}