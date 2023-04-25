//count the number of Characters in the given String and return the value
const countCharacters = (str) => {
  let c= 0;
  [...str].forEach(element => {
    c += 1
  });
  return c
}
//count the number of vowels in the given String and return the value
const countVowels = (str) => {
  c = 0;
  vowels = ['A','a','E','e','I','i','O','o','U','u'];
  [...str].forEach(element => {
    if(vowels.includes(element)){
      c += 1;
    }
  })
  return c;
 
} 

//Check the existence of the given String in the Specified String and return the value
const checkExistenceOfStr = (str, checkStr) => {
  l = checkStr.length

  for (let index = 0; index < str.length - l; index++) {
    if(str.substring(index, index+l) == checkStr){
      return true;
    }
  }
  return false;
}

//replace a word and return the value
const replaceWord = (str, wordToBeReplaced, replaceWord) => {
  return str.replace(wordToBeReplaced, replaceWord);
}

//convert the specified string into Title Case and return the value
const titleCaseConversion = (str) => {
  return str.toUpperCase();
}

// find the largest word (in terms of length) in the specified string and return the value
const findLongestWord = (str) => {
  arr = str.split(" ");
  ml=0;
  lwi= 0;
  for (let index = 0; index < arr.length; index++) {
    if(ml < arr[index].length){
      lwi=index;
    }
  }
  return arr[lwi];
}


module.exports = {
  countCharacters,
  countVowels,
  checkExistenceOfStr,
  replaceWord,
  titleCaseConversion,
  findLongestWord
}