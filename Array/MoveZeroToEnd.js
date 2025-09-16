
let arr=[0,5,6,85,1,2,0,0,2,3,]
let result=[]

function moveZero(){

    for(let i=0; i<arr.length;i++){
        if(arr[i] !==0){
            result.push(arr[i])
        }
    }
    

    for(let j=result.length ;j<arr.length;j++){
        result.push(0)
    }

    console.log(result)
}

console.log(moveZero(arr))