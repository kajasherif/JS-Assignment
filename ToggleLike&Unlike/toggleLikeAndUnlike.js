let changeImage = document.getElementById("puppyImage");
let iconColor = document.getElementById("likeIcon");
let buttonColor = document.getElementById("likeButton");
let imageLiked = false;

function onClickLikeButton() {
    if (imageLiked === false) {
        changeImage.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png";
        // iconColor.style.backgroundColor = "#0967d2";
        iconColor.style.color = "#0967d2";
        buttonColor.style.color = "#ffffff";
        buttonColor.style.backgroundColor = "#0967d2";
        imageLiked = true;
    } else {
        changeImage.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png";
        iconColor.style.color = "#cbd2d9";
        buttonColor.style.color = "#9aa5b1";
        buttonColor.style.backgroundColor = "#cbd2d9";
        imageLiked = false;
    }
}