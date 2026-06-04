window.addEventListener("DOMContentLoaded", () => {

	fetch("http://sitestagegit/assets/includes/header.html")
		.then(response => response.text())
		.then(data => {
			document.getElementById("header").innerHTML = data;
		});



	fetch("http://sitestagegit/assets/includes/footer.html")
		.then(response => response.text())
		.then(data => {
			document.getElementById("footer").innerHTML = data;
		});

});