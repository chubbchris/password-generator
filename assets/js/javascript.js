var generateBtn = document.queryselector ("#generate");

function generatePassword(){
    console.log("hey you clicked the button")
}
function writePassword(){
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

generatebtn.addeventlistener("click",writePassword);
