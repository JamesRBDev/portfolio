/*
	Hello! Interested in offering me a position at your company?
	Drop me an email at: jamesrbdev@gmail.com 
*/

console.log("%cHello! Let me know how I can improve by dropping me an email at: %cjamesrbdev@gmail.com", "font-size: 18px;", "font-size: 18px; color: lightblue; text-decoration: underline;")

// Navigation button.
function navigate(page) { // (number)
	let pages = document.getElementById("pages"); // Get the pages element.

	for (let i = 0; i < 4; ++i) { // Loop through all nav buttons.
		if (i === page) { // If it is the button that was just clicked:
			document.getElementById("nav-" + i).classList.add("active"); // Activate nav button.
		} else { // Otherwise:
			document.getElementById("nav-" + i).classList.remove("active"); // Deactivate other nav buttons.
		}
	}

	pages.style.top = -(page * 100) + "%"; // Changes the page to the specified number.
}