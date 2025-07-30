

// Reverse the string like Hello to olleH



//  const ReverseStr=(str)=>{

//     return str.split('').reverse().join('');
   
// }
// console.log("This Reverse String is :"+ReverseStr("Avneesh"))
// console.log("This Reverse String is :"+ReverseStr("Hello"))



var str = "Avneesh"
var reversedStr ="";
for (var i= str.length-1; i>=0; i--){
    reversedStr += str[i]
}
console.log("This is the reversed string:"+reversedStr)

