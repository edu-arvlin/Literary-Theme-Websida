let Swedish = true;

let swedenButton = document.getElementById("SwedenButton");
let ukButton = document.getElementById("UKButton");

function updateText() {

    if (Swedish) {
        document.getElementById("toptitle").textContent = "Etnicitet, Identitet & Neokolonialism i Born a Crime & Robinson Kruse";
        document.getElementById("title").textContent = "Välkommen till vår analys av Born a Crime av Trevor Noah, samt Robinson Kruse av Daniel Defoe";
        document.getElementById("text").textContent = "Born a Crime är en självbiografi av Trevor Noah om hans uppväxt i Sydafrika under apartheidens tid. Robinson Kruse är en robinsonad av Daniel Defoe som handlar om hans överlednad på en nästintill öde ö efter ett skeppsbrott. Båda böckerna är starkt fokuserade på teman som etnicitet, identitet och neokolonialism, vår websida kommer presentera hur dessa teman förekommer i båda böckerna samt hur det ser ut idag.";
    } 
    else {
        document.getElementById("toptitle").textContent = "Ethnicity, Identity & Neocolonialism in Born a Crime & Robinson Crusoe";
        document.getElementById("title").textContent = "Welcome to our analysis of Born a Crime by Trevor Noah, as well as Robinson Kruse by Daniel Defoe";
        document.getElementById("text").textContent = "Born a Crime is a memoir by Trevor Noah about his childhood in South Africa during the time of apartheid. Robinson Crusoe is a robinsonade by Daniel Defoe that tells the story of his survival on a nearly deserted island after a shipwreck. Both books are heavily focused on themes such as ethnicity, identity and neocolonialism, our website will present how these themes are present in both books as well as how it looks today.";
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


