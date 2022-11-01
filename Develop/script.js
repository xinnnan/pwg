// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var strongpw = "1234567890qwertyuiopasdfghjklzxcvbnm`~!@#$%^&*()-=_+QWERTYUIOP[]{}\|ASDFGHJKL:'ZXCVBNM<>?,./";
var easypw = "1234567890qwertyuiopasdfghjklzxcvbnm";
var password="";
// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  var userChoiceL=window.prompt("Length of the Password");
  if (!userChoiceL) {
    return;}
  else if (userChoiceL>=8 && userChoiceL<=128){
  var userChoiceT=window.confirm("Whether or not to include lowercase, uppercase, numeric, and/or special characters?")
    if (userChoiceT){
      for (var i = 0; i <= userChoiceL-1; i++) {
        var randomNumber = Math.floor(Math.random() * strongpw.length);
        password += strongpw.substring(randomNumber, randomNumber +1);
       }
    }
    else {
      for (var i = 0; i <= userChoiceL-1; i++) {
        var randomNumber = Math.floor(Math.random() * easypw.length);
        password += easypw.substring(randomNumber, randomNumber +1);
       }
    }
  }
  else {
    window.alert("Length needs to be between 8-128!")
  }
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
