/*
	Hello! Interested in offering me a position at your company?
	Drop me an email at: jamesrbdev@gmail.com 
*/

//——————————————————————————————————————————————————————————————————//
// INFORMATION                                                      //
//——————————————————————————————————————————————————————————————————//

// Contributors: James Boehme

// This script is almost entirely dedicated to the navigational
// buttons' functionality. 

//——————————————————————————————————————————————————————————————————//
// FUNCTIONS                                                        //
//——————————————————————————————————————————————————————————————————//

var oldPage = "about";

console.log("%cHello! Let me know how I can improve by dropping me an email at: %cjamesrbdev@gmail.com", "font-size: 18px;", "font-size: 18px; color: lightblue; text-decoration: underline;")

function start() {
	let conElem   = document.getElementById("container");
	let mainElem  = document.getElementById("window-main")
	conElem.style = "height: 700px; width: 900px;"

	document.getElementById("window-entry").hidden = true;

	mainElem.hidden = undefined;
	setTimeout(() => mainElem.style.opacity = 1, 100);
}

function setPage(newPage) {
	document.getElementById(`navlink-${oldPage}`).classList.remove("active");
	document.getElementById(`navlink-${newPage}`).classList.add("active");

	document.getElementById(`navlink-${oldPage}`).classList.remove("active");
	document.getElementById(`navlink-${newPage}`).classList.add("active");

	document.getElementById(`page-${oldPage}`).hidden = true;
	document.getElementById(`page-${newPage}`).hidden = undefined;

	oldPage = newPage;
}

setTimeout(() => document.getElementById("background").style.filter = "blur(0px)", 500);