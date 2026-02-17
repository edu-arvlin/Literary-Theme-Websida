let Swedish = true;

function changeLanguage() {

    if (Swedish === true) {
        document.getElementById("title").textContent = "Welcome";
        document.getElementById("text").textContent = "This is my website.";
        document.getElementById("btn").textContent = "Svenska";
        Swedish = false;

    } else if (Swedish === false) {
        document.getElementById("title").textContent = "Välkommen";
        document.getElementById("text").textContent = "Detta är min hemsida.";
        document.getElementById("btn").textContent = "English";
        Swedish = true;
    }
}
