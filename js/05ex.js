	
		var coses=["cadira","taula","got"];
        filtro(coses,factorialRecur);
         function filtro(array,funcion) {
             count=0;
       for (var element of array){
           console.log("00  "+funcion(element));
           array.splice(count,1,funcion(element));
           //console.log("1  "+element);
           //console.log("2  "+count);
           count++;
       
       }
           document.write(coses.toString());	
         }
         function factorialRecur (n) { 
           if (n == 0){ 
               return 1; 
           }
           return n * factorialRecur(n-1); 
       }
        
       
       