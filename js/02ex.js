var paraules=new Map();	
	paraulesEscrites();
 
  function paraulesEscrites() {
	
	 var paraula = prompt("Posa una parula");
	if(paraula!=null && paraula!="") {

		repParaules(paraula);
	
	}else{
		
	     for (let[clave,valor]of paraules){
			//console.log("Parula:",clave, " repeticiones: ", valor);
			 document.write("Palabra: "+clave+" repeticiones: "+ valor+"<br>");
		
		 }

	}
  
	}
  

function repParaules(paraulaRebuda){
	var countClau;
 
	//console.log("00paraula rep:"+paraulaRebuda);
	
	//console.log("map:"+paraules.size);
	if (paraules.size==0){
		console.log("buit");
		paraules.set(paraulaRebuda,1);
	}else{
		//console.log("00paraula rep:"+paraulaRebuda);
		if(paraules.has(paraulaRebuda)){
			console.log("01paraula rep:"+paraulaRebuda);
			countClau= paraules.get(paraulaRebuda);
			console.log("conutClau:"+countClau);
			countClau=countClau+1;
            paraules.set(paraulaRebuda,countClau);
		}else{
			//console.log("02paraula rep:"+paraulaRebuda);
			paraules.set(paraulaRebuda,1);
		}
 		
		  }
		///  console.log("03paraula rep:"+paraulaRebuda);
	      paraulesEscrites();
		}
		
	
