document.addEventListener("DOMContentLoaded", function() {
    let toggleLink = document.getElementById("toggleLink");
    let hiddenText = document.getElementById("hiddenText");

    toggleLink.addEventListener("click", function(event) {
        event.preventDefault();

        if (hiddenText.style.display === "none") {
            hiddenText.style.display = "block";
        } else {
            hiddenText.style.display = "none";
        }
    });
});