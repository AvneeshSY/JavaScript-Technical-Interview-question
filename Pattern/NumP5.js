

for(var i=1 ; i<= 5; i++){
    let ptrn=""
    for(var j=1 ; j<=5;j++){
        if(i==1 || i==5 || j==1 || j==5){
               ptrn +=[j]+" "
        }
        else{
          ptrn +="  "  
        }
       
    }
    console.log(ptrn)
}