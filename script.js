// Defining variables
var lower = 'abcdefghijklmnopqrstuvwxyz' .split(""); 
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' .split("");
var special = '!@#$^&%*()+=-[]{}|:<>?,.' .split("");
var num = '1234567890' .split("");
var masterCharacters = [];

// Assignment code here
var generateBtn = document.querySelector("#generate");

function generatePassword(){
    var userInput = parseInt(prompt ("Select the length of your password."))
  if (userInput < 8 || userInput > 128 || userInput === null || userInput === "") {
      alert("Invalid input . Please choose a valid length between 8 to 128 characters.")
      return;
    }
    else {
       console.log("Great. That length works")
    }

   //asking what they want in their password
   var selectLowercase = confirm("Would you like lowercase characters?");
   var selectUppercase = confirm("Would you like uppercase characters?");
   var selectNumeric = confirm("Would you like a numeric characters?");
   var selectSymbols = confirm("Would you like special characters?");

   while (selectLowercase === false && selectUppercase === false && selectNumeric === false && selectSymbols === false) {
    alert("Please select one type of character.");
     selectLowercase = confirm("Would you like lowercase characters?");
     selectUppercase = confirm("Would you like uppercase characters?");
     selectNumeric = confirm("Would you like a numeric characters?");
     selectSymbols = confirm("Would you like special characters?");
    }
   
   //selecting with true or false
   if (selectLowercase) {
        masterCharacters = masterCharacters.concat(lower)
    }

   if (selectUppercase) {
        masterCharacters = masterCharacters.concat(upper)
    }
    
    if (selectSpecial) {
        masterCharacters = masterCharacters.concat(special)
    }

    if (selectNum) {
        masterCharacters = masterCharacters.concat(num)
    }

    //alerts users to choose at least one if none of the character types are selected
    if (lowerSelection === false && upperSelection === false && specialSelection === false && numberSelection === false) {
        alert("At least one character type must be selected")
    }

    //generate random password
    var characters = '';
    characters += (lowerSelection ? lower : '');
    characters += (upperSelection ? upper : '');
    characters += (specialSelection ? special '');
    characters += (numberSelection ? numbers '');

    pwd = password(confirmLength, characters);

    document.getElementById("password").innerHTML = pwd;
}

// Write password to the #password input
function writePassword() {

    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

function password (l, characters) {
    var pwd= '';
    for (var i = 0; i < l; ++i) {
        pwd += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return pwd;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);