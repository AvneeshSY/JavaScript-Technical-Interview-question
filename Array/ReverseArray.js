

 const arr= [1,2,9,3,4,5]

    // let newArr=[]
    // for(var i=arr.length-1; i>=0 ;i--){
    //     newArr.push(arr[i])
    // }
    // console.log("The reversed array is :"+ newArr) 




    //  Arrange in ascending order
    for(let i=0 ;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){

            if(arr[i]>arr[j]){
                let temp=arr[i]
                arr[i]=arr[j]
                arr[j]=temp

            }
        }
    
    }
     console.log(arr)