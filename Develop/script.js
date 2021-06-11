// Assignment Code
var generateBtn = document.querySelector("#generate");

const symbols = "!@#$%^&*_-+=";
const numbers = "0123456789";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";


function generatePassword() {
  var numChar= window.prompt("How many characters would you like your password to contain?");

  if (!numChar) {
    return;
  }

  if (numChar < 8 || numChar > 128) {
    window.alert("Password length must be at least 8 characters");
    return;
  }

  var conSymb = window.confirm("Press OK to confirm including special characters");
  var conNum = window.confirm("Press OK to confirm including numeric characters");
  var conUpper = window.confirm("Press OK to confirm including uppercase letters");
  var conLower = window.confirm("Press OK to confirm including lowercase letters");

  if (!conSymb && !conNum && !conUpper && !conLower) {
    window.alert("You must select at least one character type");
    return;
  }

  var temp = '';
  var newPW = '';

  if (conSymb) { temp += symbols };
  if (conNum) { temp += numbers };
  if (conUpper) { temp += upperCase };
  if (conLower) { temp += lowerCase };


  for (var i = 0; i < numChar; i++) {
    newPW += temp[Math.floor(Math.random() * temp.length)];
  }
  return newPW;
  // var index = Math.floor(Math.random() * options.length);
  // var computerChoice = options[index];
  // Check if questions are true,  add all valid strings together, randomize them, .join (" ")
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


