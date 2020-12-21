// LC 49 Medium Group Anagrams
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// Example 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Example 2:
// Input: strs = [""]
// Output: [[""]]

// Solution Approach:
// For each item in the array sort it and check if that value is present in the map or not
// If it's present in map, append the string into the value array
// If not add the sorted string as key and the original string as the value.
// At the end add all the map values in the final array.

// HashMap from example 1:
// ate :  eat -> tea -> ate
// ant :  tan -> nat
// abt :  bat

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const mp = new Map();
  strs.forEach((str) => {
    let sortedStr = str.split("").sort().join("");
    if (!mp.has(sortedStr)) {
      mp.set(sortedStr, [str]);
    } else {
      let strsArr = mp.get(sortedStr);
      strsArr.push(str);
      mp.set(sortedStr, strsArr);
    }
  });

  let finalArr = [];
  for (anagramArr of mp.values()) {
    finalArr.push(anagramArr);
  }
  return finalArr;
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))