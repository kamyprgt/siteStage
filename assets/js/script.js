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

			const maintenant = new Date();

			const prochain = data
				.filter(event => {
					const dateEvent = new Date(
						event.date.split("/").reverse().join("-")
					);
					return dateEvent >= maintenant;
				})
				.sort((a, b) => {
					const da = new Date(a.date.split("/").reverse().join("-"));
					const db = new Date(b.date.split("/").reverse().join("-"));
					return da - db;
				})[0];

			const newsText = document.getElementById("news-text");

			if (prochain) {
				const texte =
					`${prochain.evenement} • ${prochain.date} • ${prochain.heure} • ${prochain.lieu}`;

				// on le répète plusieurs fois pour avoir un vrai défilement
				newsText.innerHTML =
					` ◆ ${texte} &nbsp;&nbsp;&nbsp◆`
			} else {
				newsText.textContent =
					"Aucun événement prévu pour le moment à par les cours.";
			}
		});

});