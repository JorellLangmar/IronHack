// Creating necessary const

const start = document.querySelector("#start");
const colorsbtn = document.querySelectorAll("#colors td");
const table = document.querySelector("#game-part tbody");
const lines = document.querySelectorAll("#table-game tr")
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

function loadSecretCode() {
	let secretCode = [];
	for (let i = 0; i < 4; i++) {
		const random = Math.floor(Math.random() * colors.length);
		secretCode.push(colors[random]); // Be aware that this method does not return unique colors, meaning the secret code could be 4 times yellow
	}
	return secretCode;
}

start.addEventListener("click", loadSecretCode);

// STEP 2 --> Loading the basic of the game

// TEST --> One line only for now

var arr = [];
// function addColor(evt) {
// 	console.log(evt.target.classList.value);
// 	if (arr.length < 4) {
// 		arr.push(evt.target.classList.value);
// 	}
// 	for (let i = 2; i < table.children.length + 1; i++) {
// 		for (
// 			let j = 2;
// 			j < table.children[table.children.length - i].children.length;
// 			j++
// 		) {
// 			if (
// 				table.children[table.children.length - i].children[j].classList.contains("full") 
//             ) { continue
// 			} else {
// 				table.children[table.children.length - i].children[j].classList.add(evt.target.classList.value, "full");
//             }
//             break
//         }
// 			console.log(
// 				table.children[table.children.length - i].children[
// 					table.children[table.children.length - i].children.length - j
// 				].classList
// 			);
// 		}
// 	console.log(arr);
// }

// console.log(table.children);


// console.log(lines);

function addColor(evt) {
    lines.forEach(function(line) {
        if (line.classList.contains("done") == false && line.classList.contains("to-be-done") == false) {
            for (let i = 2 ; i < 6 ; i++){
                if (line.children[i].classList.contains("full")) {
                    continue
                }
                else {line.children[i].classList.add(evt.target.classList.value, "full")};
                break
            }
        }
    })
}

colorsbtn.forEach((colorBtn) => colorBtn.addEventListener("click", addColor));