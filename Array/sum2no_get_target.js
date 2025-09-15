// Find 2 numbers in array that add up to target


let arr=[5,8,6,1,3]

function twosum(arr,target){
    for(var i=0; i<arr.length;i++){
        for(var j=i+1; j<arr.length; j++){
            if(arr[i]+arr[j]==target){
                return [arr[i],arr[j]]
            }
        }
    }
}

console.log(twosum(arr,4))