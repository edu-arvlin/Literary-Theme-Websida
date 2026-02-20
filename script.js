let Swedish = true;

let swedenButton = document.getElementById("SwedenButton");
let ukButton = document.getElementById("UKButton");

function updateText() {

    if (Swedish) {
        document.getElementById("title").textContent = "Välkommen";
        document.getElementById("text").textContent = "Detta är en hemsida.";
        console.log("Swedish is true, text updated to Swedish.");
    } 
    else {
        document.getElementById("title").textContent = "Welcome";
        document.getElementById("text").textContent = "This is a website.";
        console.log("Swedish is false, text updated to English.");
    }
}

swedenButton.onclick = function() {
    Swedish = true;
    updateText();
};

ukButton.onclick = function() {
    Swedish = false;
    updateText();
};


