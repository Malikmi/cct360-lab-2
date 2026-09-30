document.getElementById("colourButton").addEventListener("click", function() {

    document.getElementById("box").style.backgroundColor = "pink";

});


document.getElementById("sizeButton").addEventListener("click", function() {

    document.getElementById("box").style.width = "300px";

    document.getElementById("box").style.height = "300px";

});


document.getElementById("windowButton").addEventListener("click", function() {

    document.getElementById("box").textContent =
    "Window width: " + window.innerWidth;

});