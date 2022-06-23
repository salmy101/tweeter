"use strict";
//express uses the index file to start up a server!!
// Basic express setup:

const PORT          = 8080;
const express       = require("express");
const bodyParser    = require("body-parser"); //Parse+format input available under the req.body property.
const app           = express(); //starts the server, aka the app

app.use(bodyParser.urlencoded({ extended: true }));//
app.use(express.static("public")); // use the following code to serve images, CSS files, and JavaScript files in a directory named public: Now, you can load the files that are in the public directory:
//set the view engine, as static and all the files we want in the public(thats where the html is cuz its static!)


// The in-memory database of tweets. It's a basic object with an array in it.
const db = require("./lib/in-memory-db"); //
console.log(db) /* so db is an object with one key called  tweet is key 
and the value is an array of objects more objects?*/

// The `data-helpers` module provides an interface to the database of tweets.
// This simple interface layer has a big benefit: we could switch out the
// actual database it uses and see little to no changes elsewhere in the code
// (hint hint).
//
// Because it exports a function that expects the `db` as a parameter, we can
// require it and pass the `db` parameter immediately:
const DataHelpers = require("./lib/data-helpers.js")(db); //
//

//takes all types of dbs, 

// Update the dates for the initial tweets (data-files/initial-tweets.json).
require("./lib/date-adjust")();

// The `tweets-routes` module works similarly: we pass it the `DataHelpers` object
// so it can define routes that use it to interact with the data layer.
const tweetsRoutes = require("./routes/tweets")(DataHelpers);

// Mount the tweets routes at the "/tweets" path prefix:
app.use("/tweets", tweetsRoutes);
//localhost:3000/tweets !!

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});

