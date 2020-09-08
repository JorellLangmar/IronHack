// Creating necessary const

const start = document.querySelector("#start");
const colorsbtn = document.querySelectorAll("#colors td");
const table = document.querySelector("#game-part tbody");
const lines = document.querySelectorAll("#table-game tr");
const tryButton = document.querySelector(".btn-try");
const loadingMessage = document.querySelector(".loaded");
const resetBtn = document.querySelector(".btn-reset");
const hintPart = document.querySelectorAll(".hint");
const chrono = document.querySelector("#chronotime");
let minDec = document.getElementById("minDec");
let minUni = document.getElementById("minUni");
let secDec = document.getElementById("secDec");
let secUni = document.getElementById("secUni");
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

tryButton.disabled = true;
let begin = "No";
let secretCode = [];
function loadSecretCode() {
	secretCode = [...colors];
	for (var i = 4; i > 0; i--) {
		var j = Math.floor(Math.random() * (i + 1));
		var temp = secretCode[i];
		secretCode[i] = secretCode[j];
		secretCode[j] = temp;
	}
	begin = "Yes";
	secretCode.splice(4, 4);
	console.log(secretCode, colors);
	loadingMessage.innerText = "Let's play, the secret code has been loaded!";
	start.disabled = true;
	tryButton.disabled = false;
	start.classList.remove("heartbeat");
	return secretCode;
}

start.addEventListener("click", loadSecretCode);

// STEP 2 --> Loading the basic of the game

// Incremental Try Btn which will determine where to look at in the table

var tryBtn = 1;
function increTry() {
	tryBtn = 1;
	lines.forEach(function (line) {
		if (line.classList.contains("full")) {
			tryBtn++;
			console.log(tryBtn);
			return tryBtn;
		} else;
	});
}

// EventListener resulting from the tryButton

tryButton.addEventListener("click", addFull);
tryButton.addEventListener("click", increTry);
tryButton.addEventListener("click", checkResult);
tryButton.addEventListener("click", hint);

// Function which will check if the result has been found

function checkResult() {
	let roundArrayString = roundArray.toString();
	let secretCodeString = secretCode.toString();
	if (roundArrayString == secretCodeString) {
		console.log("You have won!");
	} else {
		arr.push(roundArray);
		roundArray = [];
		console.log("this is arr ==>", arr);
		console.log("Nice try but no");
	}
}

// Modifying the colors and the class of the lines when colors are clicked on

var arr = [];
let roundArray = [];
function addColor(evt) {
	if (begin == "Yes") {
		for (let i = 1; i < 5; i++) {
			if (lines[lines.length - tryBtn].children[i].classList.contains("full")) {
				console.log("ça fonctionne");
				continue;
			} else {
				lines[lines.length - tryBtn].children[i].classList.add(
					evt.target.classList.value,
					"full"
				);
				console.log(lines[lines.length - tryBtn]);
			}
			roundArray.push(evt.target.classList.value);
			console.log(roundArray);
			break;
		}
	}
	return roundArray;
}

// Checking if the all the cells have a "full" class and if it's the case adding it to the line itself and targeting the previous line by removing the "to-be-done" classe

function addFull() {
	let counting = 0;
	for (let i = 1; i < 5; i++) {
		if (lines[lines.length - tryBtn].children[i].classList.contains("full")) {
			counting++;
		}
		if (counting == 4) {
			lines[lines.length - tryBtn].classList.add("full");
			lines[lines.length - tryBtn - 1].classList.remove("to-be-done");
		}
	}
}

// EventListener calling the addColor when clicking on one of the colors at the bottom

colorsbtn.forEach((colorBtn) => colorBtn.addEventListener("click", addColor));

// Function which will reset the HTML text of the table

function resetTable() {
	lines.forEach(function (line) {
		line.classList.remove("full");
		line.classList.add("to-be-done");
		for (let i = 1; i < 5; i++) {
			line.children[i].classList.remove(
				"full",
				"blue",
				"green",
				"yellow",
				"purple",
				"dark-blue",
				"red",
				"pink",
				"orange"
			);
		}
	});
	hintPart.forEach((Text) => (Text.innerHTML = ""));
	lines[lines.length - 1].classList.remove("to-be-done");
	roundArray = [];
	arr = [];
	tryBtn = 1;
}

// EventListener of the reset button

resetBtn.addEventListener("click", loadSecretCode);
resetBtn.addEventListener("click", resetTable);

// Hint

function hint() {
	hintPart.forEach((Text) => (Text.innerHTML = ""));
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr[i].length; j++) {
			if (arr[i][j] == secretCode[j]) {
				hintPart[
					hintPart.length - i - 1
				].innerHTML += `<img src="./sources/whiteround.png" alt="">`;
				continue;
			} else if (secretCode.includes(arr[i][j])) {
				hintPart[
					hintPart.length - i - 1
				].innerHTML += `<img class="black" src="./sources/blackround.png" alt="">`;
				continue;
			}
		}
	}
}

// Chrono

class Chronometer {
	constructor() {
		this.currentTime = 0;
		this.intervalId = 0;
	}

	startClick(printTime) {
		this.intervalId = setInterval(() => {
            this.currentTime++;;
            printTime();
		}, 1000);
	}

	getMinutes() {
		return this.currentTime !== 0 ? Math.floor(this.currentTime / 60) : 0;
	}

	getSeconds() {
		return this.currentTime !== 0 ? Math.floor(this.currentTime % 60) : 0;
	}

	twoDigitsNumber(twoDigits) {
		return twoDigits >= 10 ? twoDigits.toString() : "0" + twoDigits.toString();
	}

	resetClick() {
		this.currentTime = 0;
	}
}

function printTime() {
    console.log("Hello");
	printMinutes();
	printSeconds();
}

const chronometer = new Chronometer();

function printMinutes() {
	const minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
	minDec.innerText = minutes.charAt(0);
	minUni.innerText = `${minutes.charAt(1)}:`;
}

function printSeconds() {
	const seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
	secDec.innerText = seconds.charAt(0);
	secUni.innerText = seconds.charAt(1);
}


start.addEventListener("click", chronometer.startClick(printTime));
resetBtn.addEventListener("click", chronometer.resetClick);