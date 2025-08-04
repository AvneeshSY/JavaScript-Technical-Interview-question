const VowelContain = (str) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  str = str.toLowerCase(); 
    let newstr=""
  for (let char of str) {
    if (vowels.includes(char)) {
      return true;
    }
  }
  return false;
};

const str = "I am Avneesh Singh Yadav";
console.log("Does the string contain vowels " + VowelContain(str));
