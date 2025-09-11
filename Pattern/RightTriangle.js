


// for(var i=0; i<5; i++){
//     console.log(" ".repeat(5-i)+"*".repeat(i))
// }

for(var i=1; i<=5; i++){
    let ptrn= "  ".repeat(5-i)
    for(var j=1; j<=i; j++){
        ptrn +="* "
    }
    console.log(ptrn)
}

