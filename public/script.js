//———————————————————————————————————————————————————————————————————————//
// SECTION Information
/*———————————————————————————————————————————————————————————————————————//

Author:      James Boehme / JamesRBDev
Email:       jamesrbdev@gmail.com
Description: The main site functionality. Mostly navigational in nature.

// !SECTION —————————————————————————————————————————————————————————————*/

//———————————————————————————————————————————————————————————————————————//
// SECTION Variables
//———————————————————————————————————————————————————————————————————————//

// The current page. Used for cleanup when the page changes.
var oldPage = "about";

// !SECTION —————————————————————————————————————————————————————————————//

//———————————————————————————————————————————————————————————————————————//
// SECTION Functions
//———————————————————————————————————————————————————————————————————————//

console.log("%cHello! Let me know how I can improve by dropping me an email at: %cjamesrbdev@gmail.com", "font-size: 18px;", "font-size: 18px; color: orange; text-decoration: underline;")

// Transitions from the splash screen to the actual portfolio.
function start() { // ()
	let conElem   = document.getElementById("container");
	let mainElem  = document.getElementById("window-main")
	conElem.style = "height: 720px; width: 900px;"

	document.getElementById("window-entry").hidden = true;

	mainElem.hidden = undefined;

	setTimeout(() => mainElem.style.opacity = 1, 100);
}

// Sets the visible portfolio section.
function setPage(newPage) { // (string)
	document.getElementById(`navlink-${oldPage}`).classList.remove("active");
	document.getElementById(`navlink-${newPage}`).classList.add("active");

	document.getElementById(`navlink-${oldPage}`).classList.remove("active");
	document.getElementById(`navlink-${newPage}`).classList.add("active");

	document.getElementById(`page-${oldPage}`).hidden = true;
	document.getElementById(`page-${newPage}`).hidden = undefined;

	oldPage = newPage;
}

// Fades out initial background blur.
setTimeout(() => document.getElementById("background").style.filter = "blur(0px)", 500);

// !SECTION —————————————————————————————————————————————————————————————//