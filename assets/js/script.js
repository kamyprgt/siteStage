window.addEventListener("DOMContentLoaded", () => {

	fetch("http://sitestage/assets/includes/header.html")
		.then(response => response.text())
		.then(data => {
			document.getElementById("header").innerHTML = data;
		});



	fetch("http://sitestage/assets/includes/footer.html")
		.then(response => response.text())
		.then(data => {
			document.getElementById("footer").innerHTML = data;
		});

});