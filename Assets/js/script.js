// variables for password character/content
var specialCharacters = [
'~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '{', '}', '[', ']','\\', '<', '>', '/', '?',
];

var numericCharacters = [
'0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
];

var lowercaseCharacters = [
'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
];

var uppercaseCharacters = [
'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
];

// 1st pop up - How many characters(8-128)
function getPasswordCriteria() {
  var length = parseInt(
    prompt("How many characters would you like the password to contain (8-128)?")
  );

  // 2nd pop up - click OK to confirm special characters
  var haveSpecialCharacters = confirm(
    "Click OK to confirm including special characters."
  );

  // 3rd pop up - click OK to confirm numeric characters
  var haveNumericCharacters = confirm(
    "Click OK to confirm including numeric characters."
  );

  // 4th pop up - click OK to confirm lowercase characters
  var haveLowercaseCharacters = confirm(
    "Click OK to confirm including lowercase characters."
  );

  // 5th pop up - click OK to confirm uppercase characters
  var haveUppercaseCharacters = confirm(
    "Click OK to confirm including uppercase characters."
  );

  // Check to make sure user has selected atleast one character type
  if (
    haveSpecialCharacters === false &&
    haveNumericCharacters === false &&
    haveLowercaseCharacters === false &&
    haveUppercaseCharacters === false
  ) {
  alert('You must select at least one character type.');
  return null;
  }

  // store user input
  var passwordOptions = {
    length: length,
    haveSpecialCharacters: haveSpecialCharacters,
    haveNumericCharacters: haveNumericCharacters,
    haveLowercaseCharacters: haveLowercaseCharacters,
    haveUppercaseCharacters: haveUppercaseCharacters,
  };

return passwordOptions;
}

// function for random element
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}


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



