let Swedish = true;

function changeLanguage() {
    
    if (Swedish === true) {
        document.getElementById("title").textContent = "Welcome";
        document.getElementById("text").textContent = "This is my website.";
        document.getElementById("button").textContent = "Svenska";
        Swedish = false;
        console.log("Swedish is now false");
    } else if (Swedish === false) {
        document.getElementById("title").textContent = "Välkommen";
        document.getElementById("text").textContent = "Detta är min hemsida.";
        document.getElementById("button").textContent = "English";
        Swedish = true;
        console.log("Swedish is now true");
    }
}
