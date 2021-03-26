console.log("%cHello! Let me know how I can improve by dropping me an email at: %cjamesrbdev@gmail.com", "font-size: 18px;", "font-size: 18px; color: lightblue; text-decoration: underline;")

function navigate(page) { // (number)
	let pages = document.getElementById("pages");

	for (let i = 0; i < 4; ++i) {
		if (i === page) {
			document.getElementById("nav-" + i).classList.add("active");
		} else {
			document.getElementById("nav-" + i).classList.remove("active");
		}
	}



	pages.style.top = -(page * 100) + "%";
}