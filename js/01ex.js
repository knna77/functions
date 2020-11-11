paraulesEscrites();
  function paraulesEscrites() {
	var paraules=new Map();	
	

	var paraula="--";
	//console.log ("paraula: ",paraula)
  while (paraula != null && paraula!="") {
	 
	paraula = prompt("Posa una parula");
	paraules.set(paraula);
		
  }
  paraules.delete("");

 var paraulesOrd =new Map([...paraules.entries()].sort());
  var paraulesRev=new Map([...paraulesOrd].reverse());
  
	for  (let[clave,valor]of paraulesRev){
	     document.write(clave+"<br>");
		console.log(clave);
		
  }
 

}