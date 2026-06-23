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

			const aujourdHui = new Date();

			const prochain = data
				.filter(actu => new Date(actu.dateISO) >= aujourdHui)
				.sort((a, b) => new Date(a.dateISO) - new Date(b.dateISO))[0];

			const container = document.getElementById("actualites-content");

			if (!prochain) {
				container.innerHTML = "Aucun événement à venir.";
				return;
			}

			container.innerHTML = `
				<span class="actualites-evenement">
					${prochain.evenement}
				</span>
				—
				<span class="actualites-date">
					${prochain.date} à ${prochain.heure}
				</span>
				—
				<span class="actualites-lieu">
					📍 ${prochain.lieu}
				</span>
			`;
		})
		.catch(error => console.error(error));

});