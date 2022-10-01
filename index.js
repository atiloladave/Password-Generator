const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let randomFigure = 12;
let getPassword = ""

let randomPassword = document.getElementById("randomPWD");
let randomPassword2 = document.getElementById("randomPWD2");
let passwordEl = document.getElementById("passwordEl");

passwordEl.addEventListener("click", function() {
    for(let i = 0; i < randomFigure; i++){
        let randomCharacter = Math.floor( Math.random() * characters.length) + 1
        getPassword += randomCharacter;
        const generatePasswordOne = getPassword;
        randomPassword.textContent = generatePasswordOne * [15]
        // randomPassword2.textContent = generatePasswordOne * [i]
    }
})