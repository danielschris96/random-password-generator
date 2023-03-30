// declared variables for later use. Put characters into arrays for later randomizer function
var generateBtn = document.querySelector("#generate");
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "?"]

function generatePassword() {
  // sets variables to default values in case of generating a second password without reloading page
  passwordLength = 20;
  availableCharacters = [];
  uppercasePrompt = false;
  lowercasePrompt = false;
  numbersPrompt = false;
  specialCharactersPrompt = false;
  randomPassword = "";
  // if input is not a number 8-128, user will get an alert and process will end
  passwordLength = prompt("How many characters do you want your password to be? (Min: 8, Max: 128)");
  if (isNaN(passwordLength)) {alert("Input must be a number");
  return;
  }
  if ((7 > passwordLength) || (129 < passwordLength)) {alert("Character length must be 8 or more and 128 or less")
  return;
  }
  else {
    uppercasePrompt = confirm("Do you want to include uppercase letters?\nOK= Yes\nCancel= No");
    lowercasePrompt = confirm("Do you want to include lowercase letters?\nOK= Yes\nCancel= No");
    numbersPrompt = confirm("Do you want to include numbers?\nOK= Yes\nCancel= No");
    specialCharactersPrompt = confirm("Do you want to include special characters?\nOK= Yes\nCancel= No");

    // if all criteria is denied, user will be alerted and function will end
      if (!uppercasePrompt && !lowercasePrompt && !numbersPrompt && !specialCharactersPrompt) {
    alert("Atleast one character type is required");
    }
  else {
    // each true criteria pushes its array to availableCharacters
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
    // a random index in the avialableCharacters array is selected and added into randomPassword
    // this process is repeated for the value of passwordLength
    randomPosition = (Math.floor(Math.random() * availableCharacters.length));
    randomPassword = randomPassword + availableCharacters[randomPosition];
  }
}


function writePassword() {
  generatePassword();
  // password is outputted into #password textarea in HTML, making it visible to user
  var password = randomPassword
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// writePassword is executed when the Generate Password button is clicked
generateBtn.addEventListener("click", writePassword);

