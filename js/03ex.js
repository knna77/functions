var coses=["cadira","taula","got"];
filtro(coses,callback);
 function filtro(array,funcion) {
     count=0;
for (var element of array){
   console.log("00  "+funcion(element));
   array.splice(count,1,funcion(element));
   console.log("1  "+element);
   console.log("2  "+count);
   count++;

}
   console.log(coses.toString);	
 }
 function callback(x){
  x+="->Callbback";
  return x;
 }
