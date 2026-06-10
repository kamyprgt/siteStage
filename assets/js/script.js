window.addEventListener("DOMContentLoaded", () => {

    const base = window.location.pathname.includes("/pages/")
        ? "../assets/includes/"
        : "assets/includes/";

    fetch(base + "header.html")
        .then(r => {
            if (!r.ok) throw new Error("Header introuvable");
            return r.text();
        })
        .then(data => {
            document.getElementById("header").innerHTML = data;
        })
        .catch(console.error);

    fetch(base + "footer.html")
        .then(r => {
            if (!r.ok) throw new Error("Footer introuvable");
            return r.text();
        })
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        })
        .catch(console.error);

});