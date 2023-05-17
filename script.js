// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var specialchar = ["!","#","$","%","&",":","'","(",")","*","+","}","-","{",".","/",";","<","=",">","?","@","|"];
var numbers = [1,2,3,4,5,6,7,8,9,0];

window.onload = function () {

}

function genPassword() {

   // add place where to store password
   var passwordOptions = []
   // ask about length
   var passwordLength = window.prompt("the number of characters", "");
   // add condition for length
   if (passwordLength < 8 || passwordLength > 128 ) {
      window.alert ("Please choose the number between 8 and 128")
   return
   }
   // to see how thw condition is shown in console
   console.log(passwordLength);
   // ask about conditions
   var hasLowercase = window.confirm("should the password include lowercase?", "");
   var hasUppercase = window.confirm("should the password include uppercase?", "");
   var hasSpec = window.confirm("should the password include special characters?", "");
   var hasNumbers = window.confirm("should the password include numbers?", "");

   // add different types of input from var to password
   if (hasLowercase === true) {
      passwordOptions = passwordOptions.concat(lowercase)
   }
   if (hasUppercase === true) {
      passwordOptions = passwordOptions.concat(uppercase)
   }
   if (hasSpec === true) {
      passwordOptions = passwordOptions.concat(specialchar)
   }
   if (hasNumbers === true) {
      passwordOptions = passwordOptions.concat(numbers)
   }
   console.log(passwordOptions);
   var password = [];
   for (var i = 0; i < passwordLength; i++) {
      var randomNumber = Math.floor(Math.random() * passwordOptions.length);
      password.push(passwordOptions[randomNumber]) 
   }
   // see how the input from var to password works
   console.log(password);
   document.getElementById("password").value = password.join("");
}


// Add event listener to generate button
generateBtn.addEventListener("click", genPassword);