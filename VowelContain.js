// const VowelContain = (str) => {
//   const vowels = ['a', 'e', 'i', 'o', 'u'];
//   str = str.toLowerCase(); 
//     let newstr=""
//   for (let char of str) {
//     if (vowels.includes(char)) {
//       return true;
//     }
//   }
//   return false;
// };

// const str = "I am Avneesh Singh Yadav";
// console.log("Does the string contain vowels " + VowelContain(str));



// vowel count and cosonant count

let str = "Hello Avneesh";

str = str.toLowerCase();
let vowels = "aeiou";
let vowelCount = 0, consonantCount = 0;

for (let i = 0; i < str.length; i++) {
    let ch = str[i];

    if (ch === " ") {  
        continue;
    }

    if (vowels.includes(ch)) { 
        vowelCount++;
        // console.log("Vowel: " + ch);
    } else {
        consonantCount++;
        // console.log("Consonant: " + ch);
    }
}

console.log("Total vowels: " + vowelCount);
console.log("Total consonants: " + consonantCount);
