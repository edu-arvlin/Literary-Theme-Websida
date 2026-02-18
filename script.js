let Swedish = true;

let swedenButton = document.getElementById("SwedenButton");
let ukButton = document.getElementById("UKButton");

function updateText() {

    if (Swedish) {
        document.getElementById("title").textContent = "Välkommen";
        document.getElementById("text").textContent = "Detta är min hemsida.";
        document.getElementById("button").textContent = "English";
    } 
    else {
        document.getElementById("title").textContent = "Welcome";
        document.getElementById("text").textContent = "This is my website.";
        document.getElementById("button").textContent = "Svenska";
    }
}

swedenButton.addEventListener("click", function() {
    Swedish = true;
    updateText();
});

ukButton.addEventListener("click", function() {
    Swedish = false;
    updateText();
});


