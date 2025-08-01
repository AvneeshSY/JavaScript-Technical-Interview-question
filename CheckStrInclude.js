

let str="I am Avneeesh sing yadav";
const CheckStrInclude=(str,subStr)=>{
    return str.toLowerCase().includes(subStr.toLowerCase())?true : false
}


console.log("Is the string include avneesh: "+CheckStrInclude("I am Avneesh sing yadav","avneesh"))