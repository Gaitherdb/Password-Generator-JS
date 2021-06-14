// Assignment Code
var generateBtn = document.querySelector("#generate");

const symbols = "!@#$%^&*_-+=";
const numbers = "0123456789";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";


function generatePassword() {
  var numChar= window.prompt("How many characters would you like your password to contain?");
// if the user selects cancel, the app will end.
  if (!numChar) {
    return;
  }
// if the user chooses to have a password lower than 8 or greater than 128 characters, the app will end.
  if (numChar < 8 || numChar > 128) {
    window.alert("Password length must be at least 8 characters");
    return;
  }

  var conSymb = window.confirm("Press OK to confirm including special characters");
  var conNum = window.confirm("Press OK to confirm including numeric characters");
  var conUpper = window.confirm("Press OK to confirm including uppercase letters");
  var conLower = window.confirm("Press OK to confirm including lowercase letters");
//if the user doesn't select any characters, the app will end.
  if (!conSymb && !conNum && !conUpper && !conLower) {
    window.alert("You must select at least one character type");
    return;
  }
//creates empty variables
  var temp = '';
  var newPW = '';
//if the user confirmed the use of symbols, temp will include all symbols
  if (conSymb) { temp += symbols };
  //if the user confirmed numbers, temp will include all numbers + the previous confirmation
  if (conNum) { temp += numbers };
   //if the user confirmed uppercase letters, temp will include all numbers + the previous confirmation
  if (conUpper) { temp += upperCase };
   //if the user confirmed lowercase letters, temp will include all numbers + the previous confirmation
  if (conLower) { temp += lowerCase };

//temp = all the types of characters selected, and for the number of characters chosen, it takes a random one each time the loop is allowed to go for, and adds it to the var newPW.
  for (var i = 0; i < numChar; i++) {
    newPW += temp[Math.floor(Math.random() * temp.length)];
  }
  return newPW;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


