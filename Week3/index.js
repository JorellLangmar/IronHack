// Creating necessary const

const start = document.querySelector("#start");
const colorsbtn = document.querySelectorAll("#colors td");
const table = document.querySelector("#game-part tbody");
const lines = document.querySelectorAll("#table-game tr");
const tryButton = document.querySelector(".btn-try");
const loadingMessage = document.querySelector(".loaded");
const resetBtn = document.querySelector(".btn-reset");
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

let secretCode = [];
function loadSecretCode() {
	secretCode = [...colors];
	for (var i = 4; i > 0; i--) {
		var j = Math.floor(Math.random() * (i + 1));
		var temp = secretCode[i];
		secretCode[i] = secretCode[j];
		secretCode[j] = temp;
	}

	secretCode.splice(4, 4);
	console.log(secretCode, colors);
	loadingMessage.innerText = "Let's play, the secret code has been loaded!";
	start.disabled = true;
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

// Function which will check if the result has been found

function checkResult() {
	let arrString = arr.toString();
	let secretCodeString = secretCode.toString();
	if (arrString == secretCodeString) {
		console.log("You have won!");
	} else {
		arr = [];
		console.log("Nice try but no");
	}
}

// Modifying the colors and the class of the lines when colors are clicked on

var arr = [];
function addColor(evt) {
    console.log("Ca fonctionne", arr);
	for (let i = 1; i < 5; i++) {
		if (lines[lines.length - tryBtn].children[i].classList.contains("full")) { console.log("ça fonctionne");
			continue;
		} else {
			lines[lines.length - tryBtn].children[i].classList.add(
				evt.target.classList.value,
				"full"
			) ; console.log(lines[lines.length - tryBtn]);
			lines[lines.length - tryBtn].children[i].classList.remove("color");
		}
		arr.push(evt.target.classList.value);
		break;
	}
	return arr;
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
	table.innerHTML = `<tr class="to-be-done">
    <td class="line">10</td>
    <td class="color"></td>
    <td class="color"></td>
    <td class="color"></td>
    <td class="color"></td>
    <td class="hint"></td>
</tr>
<tr class="to-be-done">
    <td class="line">09</td>
    <td class="color"></td>
    <td class="color"></td>
    <td class="color"></td>
    <td class="color"></td>
    <td class="hint"></td>
</tr>
<tr class="to-be-done">
    <td class="line">08</td>
    <td class="color"></td>
    <td class="color"></td>
    <td class="color"></td>
    <td class="color"></td>
    <td class="hint"></td>
</tr>
<tr class="to-be-done">
    <td class="line">07</td>
    <td class="color"></td>
    <td class="color"></td>
    <td class="color"></td>
    <td class="color"></td>
    <td class="hint"></td>
</tr>
<tr class="to-be-done">
    <td class="line">06</td>
    <td class="color"></td>
    <td class="color"></td>
    <td class="color"></td>
    <td class="color"></td>
    <td class="hint"></td>
</tr>
<tr class="to-be-done">
    <td class="line">05</td>
    <td class="color"></td>
    <td class="color"></td>
    <td class="color"></td>
    <td class="color"></td>
    <td class="hint"></td>
</tr>
<tr class="to-be-done">
    <td class="line">04</td>
    <td class="color"></td>
    <td class="color"></td>
    <td class="color"></td>
    <td class="color"></td>
    <td class="hint"></td>
</tr>
<tr class="to-be-done">
    <td class="line">03</td>
    <td class="color"></td>
    <td class="color"></td>
    <td class="color"></td>
    <td class="color"></td>
    <td class="hint"></td>
</tr>
<tr class="to-be-done">
    <td class="line">02</td>
    <td class="color"></td>
    <td class="color"></td>
    <td class="color"></td>
    <td class="color"></td>
    <td class="hint"></td>
</tr>
<tr>
    <td class="line">01</td>
    <td class="color"></td>
    <td class="color"></td>
    <td class="color"></td>
    <td class="color"></td>
    <td class="hint"></td>
</tr>`;
arr = [];
}

// EventListener of the reset button

resetBtn.addEventListener("click", loadSecretCode);
resetBtn.addEventListener("click", resetTable);
