let Swedish = true;

let swedenButton = document.getElementById("SwedenButton");
let ukButton = document.getElementById("UKButton");

function updateText() {

    if (Swedish) {
        document.getElementById("toptitle").textContent = "Etnicitet, Identitet & Neokolonialism i Born a Crime & Robinson Crusoe";
        document.getElementById("title").textContent = "Välkommen till vår analys av Born a Crime av Trevor Noah, samt Robinson Crusoe av Daniel Defoe";
        document.getElementById("text").textContent = "Born a Crime är en självbiografi av Trevor Noah om hans uppväxt i Sydafrika under apartheidens tid. Robinson Crusoe är en robinsonad av Daniel Defoe som handlar om hans överlednad på en nästintill öde ö efter ett skeppsbrott. Boda böckerna är starkt fokuserad på teman som etnicitet, identitet och neokolonialism, och vi kommer att analysera hur dessa teman presenteras i båda böckerna samt hur det ser ut idag. ";
        console.log("Swedish is true, text updated to Swedish.");
    } 
    else {
        document.getElementById("toptitle").textContent = "Ethnicity, Identity & Neocolonialism in Born a Crime & Robinson Crusoe";
        document.getElementById("title").textContent = "Welcome to our analysis of Born a Crime by Trevor Noah, as well as Robinson Crusoe by Daniel Defoe";
        document.getElementById("text").textContent = "Born a Crime is a memoir by Trevor Noah about his childhood in South Africa during apartheid.";
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


