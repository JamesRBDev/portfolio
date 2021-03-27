/*
	Hello! Interested in offering me a position at your company?
	Drop me an email at: jamesrbdev@gmail.com 
*/

//——————————————————————————————————————————————————————————————————//
// INFORMATION                                                      //
//——————————————————————————————————————————————————————————————————//

// Contributors: James Boehme

// Handles everything back-end, all in one place.

//——————————————————————————————————————————————————————————————————//
// FUNCTIONS                                                        //
//——————————————————————————————————————————————————————————————————//

// Create an Express app/
const express = require("express");
const app     = express();

// Use the Express-static middleware.
app.use(express.static("public"));

// Start the server listening for requests.
app.listen(process.env.PORT || 3000, () => console.log("Server is running..."));
