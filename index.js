function isPalindrome(word) {
  // Write your algorithm here
  // declare a variable rev and set it to the reverse of the string
  let rev = word.split('').reverse().join('');
  // if word equals rev return true
  if(word === rev) return true;
  // otherwise return false
  else return false;
}

/* 
  Add your pseudocode here
*/
// log to the console the result of calling isPalindrome
// console.log(isPalindrome('mom'));
// console.log(isPalindrome('rabit'));

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
