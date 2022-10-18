// Assignment code here
// Get references to the #generate element
const generateBtn = document.querySelector("#generate");

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
if(!passwordMaker.length){ //validate the chracter type choice and prompt user again if no character type choice is made
  alert("You must select at least on character type")
  var redo = confirm("Want to select again?")
  console.log(redo)
  if(!redo) {return null}
  return promptTypes()
}
return passwordMaker
}

function generatePassword(){

const passwordLength = prompt ("Choose a password length of at least 8 characters and no more than 128 chsracters.");
console.log("password length: ", passwordLength); //Prompt user for a choice of password length 
if (passwordLength === null){ //validate user choice of password length. if no password length choice, go back to password length prompt
  return
}
if ( passwordLength < 8 || passwordLength > 128) {// if password length outside of parameters, go back to password length prompt
  alert ("Password Length Incorrect.")
  return generatePassword()
}

let passwordMaker = promptTypes() //concatinate the chosen character type/s

if(!passwordMaker){
  return
}

let password = "";
for (i = 0; i < passwordLength; i++) { //pull characters at random out of the selected character type/s and write them to password
  const num =Math.floor(Math.random() * passwordMaker.length);
  const char = passwordMaker[num]
  password += char
}

return password
}
//I moved this starter code (below) to the end since these are the last activities called by the solution
function writePassword() { 
  const password = generatePassword();
  const passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);