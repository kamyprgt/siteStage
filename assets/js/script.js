window.addEventListener("DOMContentLoaded", () => {

	fetch("assets/includes/header.html")
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



	fetch("assets/includes/footer.html")
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
	

	fetch("assets/json/actualites.json")
		.then(response => response.json())
		.then(data => {

			const actualites = data.map(actu => {
				return `📅 ${actu.date} • 🕒 ${actu.heure} • 📍 ${actu.lieu} • ${actu.evenement}`;
			});

			document.getElementById("actualites-content").innerHTML =
				actualites.join(" &nbsp;&nbsp;&nbsp;&nbsp; • &nbsp;&nbsp;&nbsp;&nbsp; ");

		})
		.catch(error => console.error(error));

});