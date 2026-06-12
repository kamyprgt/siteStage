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
	});


	fetch('assets/includes/header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;

        const currentPage = window.location.pathname.split('/').pop();

        document.querySelectorAll('#header a').forEach(link => {
            const linkPage = link.getAttribute('href').split('/').pop();

            if (linkPage === currentPage) {
                link.classList.add('nav-active');
            }
        });
    });