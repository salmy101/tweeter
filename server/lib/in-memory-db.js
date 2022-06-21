"use strict";

// Requiring a JSON file automatically parses it and returns the data. These
// are just example tweets to make it less tedious to style the app initially.
//this is where tweest are being brought in
//its a data file, goes up one level to data-files...
// the array of object now set to key called tweet and one 
const db = {
  tweets: require("../data-files/initial-tweets")
}

module.exports = db;

