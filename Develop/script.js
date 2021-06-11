// Assignment Code
var generateBtn = document.querySelector("#generate");
const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";
var allChar = alpha + lowerChars + numbers + symbols;

function generatePassword(){
var numchar = window.prompt("How many characters would you like your password to contain?");

if (!numchar) {
  return;
}

if (numchar < 8 || numchar > 128) {
  window.alert("Password length must be at least 8 characters");
  return;
}

var conSymb = window.confirm("Press OK to confirm including special characters");
var conNum = window.confirm("Press OK to confirm including numeric characters");
var conUpper = window.confirm("Press OK to confirm including uppercase letters");
var conLower = window.confirm("Press OK to confirm including lowercase letters");

if (!conSymb && !conNum && !conUpper && !conLower){
  window.alert("You must select at least one character type");
}
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


