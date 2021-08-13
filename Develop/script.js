// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  console.log("Hey we clicked the generate button and now are running our writePassword function")

  var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  var number = '1234567890';
  var specialChar = '!@#$%^&*()_-=+[]}{;:<>?,`~|';

  var length = parseInt(window.prompt("Please choose the amount of characters you would like in your password between 8 and 120."))
  var littleLetters = window.confirm("Click OK if you would like lowercase letters in your password.");
  var bigLetters = window.confirm("Click OK if you would like uppercase letters in your password.");
  var nums = window.confirm("Click OK if you would like numbers in your password.");
  var specialCharacters = window.confirm("Click OK if you would like to use special characters in your password.");

  var allChoices = "";


  console.log("LITTLE LETTERS",littleLetters)
  console.log("Password Length", length)

if(littleLetters === true){
  allChoices += lowerCase
}

if(bigLetters === true){
  allChoices += upperCase
}

if(nums === true){
  allChoices += number
}

if(specialCharacters === true){
  allChoices += specialChar
}

console.log("ALL CHOICES", allChoices)

var characters = "";

for(var i = 0; i < length; i++){
  
  var randomizer = Math.floor(allChoices.length * Math.random())

characters += allChoices.charAt(randomizer)

}

  document.querySelector("#password").textContent = characters;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
