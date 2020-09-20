// DOM ELEMENTS
const carouselElement = document.getElementById("carousel");
const btns = document.querySelectorAll(".btn");
const img = carouselElement.querySelector(".img");

//NEEDED INFOS
const imgs = [
    "fractal-1.jpg", // 0
    "fractal-2.jpg", // 1
];

var count = 0;

function handleClick(evt) {
    const btn = evt.target;
    if (btn.id == "btn-prev") {
        count = count === 0 ? imgs.length - 1 : count = -1;
    }
    else {
        count += 1;
        if (count === imgs.length) count = 0;
    }
    img.src =`./imgs/${imgs[count]}`;
}

function handleClickShorter(evt) {
    const btn = evt.target;
    if (btn.id == "btn-prev") count = count === 0 ? imgs.length - 1 : count -1;
    else count = count === imgs.length - 1 ? 0 : count + 1;
    img.src = `./imgs/${imgs[count]}`;
}

btns.forEach((btn) => (btn.onclick = handleClick));