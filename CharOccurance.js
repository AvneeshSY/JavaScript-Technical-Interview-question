
const charOccurance =(str)=>{
    let charCount =0
    // for(let i=0; i<str.length; i++)
    //     if(str[i]){
    //         charCount++                  //19
    //     }
    //     return charCount;


    str.split("").forEach((char)=>{
        if(char!==" " &&  isNaN(char)){
                   charCount++          //also remove the spce character
        }
    })
     return charCount;
}

console.log("The number of the character in the string is: "+charOccurance("Avneesh Singh Yadav456"))