//Anagram Check!!
//Given two strings check if second string is an anagram of the first

// An anagram is a word or phrase formed by rearranging the letters of a different word 
// or phrase, typically using all the original letters exactly once

//O(N) solution
const isValidAnagram = (string1, string2) => {
  let mapObj = {};
  let isAnagram = true;
  if (string1.length !== string2.length) return false;

  string1.split("").forEach((element) => {
    if (mapObj[element] !== undefined && mapObj[element] >= 1) {
      mapObj[element] = mapObj[element] + 1;
    } else {
      mapObj[element] = 1;
    }
  });

  string2.split("").forEach((element) => {
    if (mapObj[element] !== undefined) {
      mapObj[element] = mapObj[element] - 1;
    }
  });
  for (let elem in mapObj) {
    if (mapObj[elem] > 0) {
      isAnagram = false;
      break;
    }
  }
  return isAnagram;
};

console.log( "Is Cinema anagram for Iceman? ", isValidAnagram('cinema' , 'iceman')); 
console.log( "Is car anagram for rat? ", isValidAnagram('car' , 'rat')); 
console.log( "Is awesome anagram for awesom? ", isValidAnagram('awesome' , 'awesom')); 
console.log( "Is qwerty anagram for qeywrt? ", isValidAnagram('qwerty' , 'qeywrt')); 
 