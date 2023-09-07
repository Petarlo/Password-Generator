// variables

// 1st pop up - How many characters(8-128)

// 2nd pop up - click OK to confirm numeric characters

// 3rd pop up - click OK to confirm lowercase characters

// 4th pop up - click OK to confirm uppercase characters

// loop for random password math
for (var i = 0; i <= passwordLength; i++) {
  var randomNumber = Math.floor(Math.random() * chars.length);
  password += chars.substring(randomNumber, randomNumber +1);
 }


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



