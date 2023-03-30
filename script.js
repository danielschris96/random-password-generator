// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordLength = 20;
var availableCharacters = [];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "?"]
var uppercasePrompt = false;
var lowercasePrompt = false;
var numbersPrompt = false;
var specialCharactersPrompt = false;
var randomPassword = "";

function generatePassword() {
  passwordLength = 20;
  availableCharacters = [];
  uppercasePrompt = false;
  lowercasePrompt = false;
  numbersPrompt = false;
  specialCharactersPrompt = false;
  randomPassword = "";
  passwordLength = prompt("How many characters do you want your password to be? (Min: 8, Max: 128)");
  if ((7 > passwordLength) || (129 < passwordLength)) {alert("Character length must be 8 or more and 128 or less")
  return;
  }
  else {
    // console.log("Password will be " + length + " characters long");
    uppercasePrompt = confirm("Do you want to include uppercase letters?\nOK= Yes\nCancel= No");
    lowercasePrompt = confirm("Do you want to include lowercase letters?\nOK= Yes\nCancel= No");
    numbersPrompt = confirm("Do you want to include numbers?\nOK= Yes\nCancel= No");
    specialCharactersPrompt = confirm("Do you want to include special characters?\nOK= Yes\nCancel= No");

      if (!uppercasePrompt && !lowercasePrompt && !numbersPrompt && !specialCharactersPrompt) {
    alert("Atleast one character type is required");
    }
  else {
    if (uppercasePrompt) {
      availableCharacters.push(...uppercase);
    }
    if (lowercasePrompt) {
      availableCharacters.push(...lowercase);
    }
    if (numbersPrompt) {
      availableCharacters.push(...numbers)
    }
    if (specialCharactersPrompt) {
      availableCharacters.push(...specialCharacters);
    }
   passwordRandomizer()
  }
  }
}

function passwordRandomizer() {
  for (let i = 0; i < passwordLength; i++) {
    randomPosition = (Math.floor(Math.random() * availableCharacters.length));
    randomPassword = randomPassword + availableCharacters[randomPosition];
  }
}


// Write password to the #password input
function writePassword() {
  generatePassword();
  var password = randomPassword
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

