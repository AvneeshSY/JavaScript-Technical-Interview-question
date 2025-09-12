

for(var i=1; i<=10; i++){
    let ptrn=" ".repeat(10-i)
    for(var j=1;j<=i;j++){
        if(j==1 || j==i || i==10){
        ptrn +=[j]+" "
        }else{
            ptrn +="  "
        }
        
    }
    console.log(ptrn)

}