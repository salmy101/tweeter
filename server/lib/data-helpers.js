"use strict";

// Simulates the kind of delay we see with network or filesystem operations
const simulateDelay = require("./util/simulate-delay");

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {

    // Saves a tweet to `db`, function take tweet and callback, uses another function.
    //simultateDelay is anothe rfunction that takes a callback, acces tweets and push
    //grabing new tweet(object) and pushing to tweets array
    saveTweet: function(newTweet, callback) {
      simulateDelay(() => {
        db.tweets.push(newTweet);
        callback(null, true);
      });
    },

    // Get all tweets in `db`, sorted by newest first
    //
    getTweets: function(callback) {
      simulateDelay(() => {
        const sortNewestFirst = (a, b) => a.created_at - b.created_at; //filter, sees which is greater, sort sorts an array based on filtr, return the array
        callback(null, db.tweets.sort(sortNewestFirst)); //the call back takes 2 params
      });
    }

  };
}
