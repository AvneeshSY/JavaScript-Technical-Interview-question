function countCharacters(str) {
  const charCount = {};

  for (let char of str) {
    if (char !== ' ') {
      char = char.toLowerCase(); 
      charCount[char] = (charCount[char] || 0) + 1;
    }
  }

  return charCount;
}

// Example usage:
const result = countCharacters("Avneesh Singh Yadav");
console.log(result);
