// Creating necessary const

const start = document.querySelector("#start");
const colors = ["blue", "green", "yellow", "purple", "red", "orange", "pink", "dark-blue"];

// STEP 1 --> Loading a random secret code when clicking on the button start

function loadSecretCode() {
    let secretCode = [];
    for (let i=0 ; i < 4 ; i++) {
        const random = Math.floor(Math.random() * colors.length);
        secretCode.push(colors[random]); // Be aware that this method does not return unique colors, meaning the secret code could be 4 times yellow
    };
    return secretCode;
}

start.addEventListener('click', loadSecretCode)

// STEP 2 --> Loading the basic of the game

// TEST 

