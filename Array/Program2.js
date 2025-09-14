// given a three-digit number N, produce a series of 4 positive integers whose sum is N.

function makefourseries(num){
    if(typeof num !== "number" || num <4 ||!Number.isInteger(num)){
        throw new Error("Number should be greater then 4")

    }
    const base= Math.floor(num /4)
    let rem= num%4

    const result=[]
    for(var i=0; i<4;i++){
        if(rem > 0){
            result.push(base+1)
            rem--;
        }
        else{
            result.push(base)
        }
    }
return result
}

console.log(makefourseries(101)); 