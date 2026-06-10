window.addEventListener("DOMContentLoaded", () => {

	let PREFIX = "/";

	// Si on est dans /pages/
	if (window.location.pathname.includes("pages")) {
	PREFIX = "../";
	}

	fetch(PREFIX + "assets/includes/header.html")
		.then(response => {
        if (!response.ok) {
            throw new Error("Header introuvable");
        }
        return response.text();
		})
		.then(data => {
			document.getElementById("header").innerHTML = data;
		})
		.catch(error => console.error(error));



	fetch(PREFIX + "assets/includes/footer.html")
		.then(response => {
        if (!response.ok) {
            throw new Error("Footer introuvable");
        }
        return response.text();
		})
		.then(data => {
			document.getElementById("footer").innerHTML = data;
		})
		.catch(error => console.error(error));
	});