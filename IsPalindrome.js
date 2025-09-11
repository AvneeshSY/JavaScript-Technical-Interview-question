

//  const isPalindome =(str,secStr)=>{
//    return str.split("").reverse().join("")==str

//  }


//  console.log("This is the output:"+ isPalindome("mum"))

  const str= "mumsdf"
  
    let newstr=""

    for(var i=str.length-1; i>=0 ;i--){
       newstr +=str[i]

    }
    if(newstr ==str){
      console.log("The string is a palindrome")
    }else{
      console.log("The string is not a palindrome")
    }
    
  