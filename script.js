// Assignment code here
// Get references to the #generate element
const generateBtn = document.querySelector("#generate");

function writePassword() { 
    const password = generatePassword();
    const passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
  
// Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);

function promptTypes(){ ////Prompt user for password options password length, lower/upper case, numbers, special characters
  var passwordMaker = []
const chooseSpecChar = confirm("Click OK if you want to include symbols");
const chooseNumeric = confirm("Click OK if you want to include numbers");
const chooseUpperCase = confirm("Click OK if you want to include upper case letters");
const chooseLowerCase = confirm("Click OK if you want to include lower case letters");

if (chooseSpecChar) { //Write out all the options of each possible character type and concatinate them when selected by the user
  const specChar =  ['!',"@","#","$","%","^","&","*","(",")"];
  passwordMaker = passwordMaker.concat(specChar);
}
if (chooseNumeric) {
  const numeric = ["1","2","3","4","5","6","7","8","9","0"];
  passwordMaker = passwordMaker.concat(numeric);
}
if (chooseUpperCase) {
  const upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  passwordMaker = passwordMaker.concat(upperCase);
}
if (chooseLowerCase) {
  const lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","w","x","y","z"];
  passwordMaker = passwordMaker.concat(lowerCase);
}