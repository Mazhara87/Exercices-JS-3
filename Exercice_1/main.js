document.addEventListener("DOMContentLoaded", function() {
    let image = document.querySelector(".image");

    image.addEventListener("mouseover", function() {
        image.style.border = "3px solid red";
    });

    image.addEventListener("mouseout", function() {
        image.style.border = "none";
    });
});