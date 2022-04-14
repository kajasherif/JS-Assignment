let bulbImg = document.getElementById("bulbImage");
let catImg = document.getElementById("catImage");
let switchStatus = document.getElementById("switchStatus");
let offSwitch = document.getElementById("offSwitch");
let onSwitch = document.getElementById("onSwitch");

function switchOn() {
    catImg.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    bulbImg.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    switchStatus.textContent = "switch is on";
    onSwitch.style.backgroundColor = "green";
    offSwitch.style.backgroundColor = "#cbd2d9";
}
function switchOff() {
    catImg.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    bulbImg.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    switchStatus.textContent = "switch is off";
    offSwitch.style.backgroundColor = "red";
    onSwitch.style.backgroundColor = "#cbd2d9";
}
