// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input



function writePassword() {

  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");
var length = Number(prompt("How many characters do you want your password to be? (Min: 8, Max: 128)"));
  if ((7 < length) && (129 > length)) {
    console.log("Password will be " + length + " characters long");
    uppercase = confirm("Do you want to include uppercase letters?\nOK= Yes\nCancel= No");
    lowercase = confirm("Do you want to include lowercase letters?\nOK= Yes\nCancel= No");
    numbers = confirm("Do you want to include numbers?\nOK= Yes\nCancel= No");
    specialCharacters = confirm("Do you want to include special characters?\nOK= Yes\nCancel= No");
    console.log(length)
    

  }
  else alert("Character length must be 8 or more and 128 or less")
  passwordText.value = password;

}



// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);



