const list = document.querySelectorAll("li");
const liImg = document.querySelectorAll("li img")
const div = document.querySelector("div")
list.forEach(logo => logo.addEventListener('mouseover', flip));
list.forEach(logo => logo.addEventListener('mouseout', stopFlip));
liImg.forEach(logo => logo.addEventListener('click', clickOn));
// window.addEventListener('click', stopClick);

function flip(event) {
    event.target.classList.add("logrotate-vert-center")
  }

function stopFlip(event) {
    event.target.classList.remove("logrotate-vert-center")
  }

function clickOn(event) {
    event.target.parentNode.classList.add("slide-top");
    // console.log(event.target.parentNode);
    const otherLi = getSiblings(event.target.parentNode);
    otherLi.forEach(logo => logo.classList.remove("slide-top"));
  }

var getSiblings = function (elem) {

    var siblings = [];
    var sibling = elem.parentNode.firstChild;

    while (sibling) {
        if (sibling.nodeType === 1 && sibling !== elem) {
            siblings.push(sibling);
        }
        sibling = sibling.nextSibling
    }

    return siblings;
};

// function stopClick() {
//     const list = document.querySelectorAll("li");
//     list.forEach(element => {element.classList.remove("slde-top") 
//     });
//   }

