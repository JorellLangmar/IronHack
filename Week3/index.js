// Creating necessary const

const start = document.querySelector("#start");
const colorsbtn = document.querySelectorAll("#colors td");
const table = document.querySelector("#game-part tbody");
const lines = document.querySelectorAll("#table-game tr");
const tryButton = document.querySelector(".btn-try");
const colors = [
	"blue",
	"green",
	"yellow",
	"purple",
	"red",
	"orange",
	"pink",
	"dark-blue",
];

// STEP 1 --> Loading a random secret code when clicking on the button start

let secretCode = []
function loadSecretCode() {;
	for (let i = 0; i < 4; i++) {
		const random = Math.floor(Math.random() * colors.length);
		secretCode.push(colors[random]); // Be aware that this method does not return unique colors, meaning the secret code could be 4 times yellow
    }
    console.log(secretCode);
	return secretCode;
}

start.addEventListener("click", loadSecretCode);

// STEP 2 --> Loading the basic of the game

// Incremental Try Btn which will determine where to look at in the table

var tryBtn = 1 ;
function increTry () {
    lines.forEach(function(line) {
        let countingForFull = 0;
        if (line.classList.contains("Full")) { 
            countingForFull++ ; 
            tryBtn++;
            console.log(tryBtn); 
            return tryBtn;}
        else ;
    })

}

tryButton.addEventListener("click", increTry);
tryButton.addEventListener("click", checkResult);

function checkResult() {
    let arrString = arr.toString();
    let secretCodeString = secretCode.toString();
    if (arrString == secretCodeString) {console.log("You have won!");}
    else { arr = []; console.log("Nice try but no");}
}

console.log(lines[lines.length-tryBtn]);

// TEST --> One line only for now


var arr = [];

function addColor(evt) {
     for (let i = 2 ; i < 6 ; i++){
        if (lines[lines.length-tryBtn].children[i].classList.contains("full")) {
            continue }
        else {
            lines[lines.length-tryBtn].children[i].classList.add(evt.target.classList.value, "full");
            lines[lines.length-tryBtn].children[i].classList.remove("color");
        };
            arr.push(evt.target.classList.value);
            break}
            console.log(arr);
        return arr;
}


colorsbtn.forEach((colorBtn) => colorBtn.addEventListener("click", addColor));