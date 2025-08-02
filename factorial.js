

const fact=(n)=>{
    if(n==0|| n==1) return 1
    if(n>1){
        return n * fact(n-1)
    }
}

console.log("Fact. of the number is :", fact(5))