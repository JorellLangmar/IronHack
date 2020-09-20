const btn = document.getElementById("btn-1");
const input = document.getElementById("input-text-1");
const content = document.getElementById("input-content");
const clickCountTarget = document.getElementById("click-count");
var clickCount = 0;


// THOSE 2 FUNCTIONS ARE EVENT-HANDLERS
// THEY WILL PERFORM THE ACTION UPON A GIVEN EVENT
function handleClick(event) {
    clickCount += 1;
    console.log("Clicked !!!", event, event.target, this, this === event.target);
    clickCountTarget.innerText = clickCount;
}

function handleInput() {
    console.log("Inputed !!!", event, event.target, this, this === event.target);
    content.innerText += event.target.value;
}

btn.addEventListener("click", handleClick); // full list of event to be checked
input.addEventListener("input", handleInput);


// HERE IS A SHORTER WAY
// btn.onclick = handleClick;
// input.oninput = handleInput;