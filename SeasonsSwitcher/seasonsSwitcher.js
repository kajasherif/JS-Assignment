let seasonSmallImageElement = document.getElementById("seasonSmallImage")
let seasonMediumImageElement = document.getElementById("seasonMediumImage")

let springImageSM = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-xs-img.png";
let springImageMD = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-md-img.png";
let summerImageSM = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-xs-img.png";
let summerImageMD = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-md-img.png";
let autumnImageSM = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-xs-img.png";
let autumnImageMD = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-md-img.png";
let winterImageSM = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-xs-img.png";
let winterImageMD = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-md-img.png";

function springBg() {
    seasonSmallImageElement.src = springImageSM;
    seasonMediumImageElement.src = springImageMD;
}

function summerBg() {
    seasonSmallImageElement.src = summerImageSM;
    seasonMediumImageElement.src = summerImageMD;
}

function autumnBg() {
    seasonSmallImageElement.src = autumnImageSM;
    seasonMediumImageElement.src = autumnImageMD;
}

function winterBg() {
    seasonSmallImageElement.src = winterImageSM;
    seasonMediumImageElement.src = winterImageMD;
}