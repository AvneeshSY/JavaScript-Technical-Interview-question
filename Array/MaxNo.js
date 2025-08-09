

const arr=[1,3,5,6,9,7]

let Maxvaluearr=[]

  for(var i=0; i<arr.length; i++){
     if(arr[i] > arr[i+1]){
        Maxvaluearr.push(arr[i])
        

     }

  }
  console.log("The maximum value in the array is:", Maxvaluearr)