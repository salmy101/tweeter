/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// Test / driver code (temporary). Eventually will get this from the server.


const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
] 



  const renderTweets = function(arr) {    // loops through tweets
    arr.forEach(tweet => { // calls createTweetElement for each tweet
    //  createTweetElement(tweet)// takes return value and appends it to the tweets container  
     const $tweet = createTweetElement(tweet);
     $('#tweets-container').append($tweet);
   }); 
  
  }    



const createTweetElement = function(tweet) {
  const $tweet = $(`<article class="tweet">
  <br>
  <header>
    <div class="top-half">
    <div class="user">
      <span class="avatar" class="fa-solid fa-user"></span>
      <div class="name">${tweet.user.name}</div>
    </div>

    <div class="handle">${tweet.user.handle}</div>
   </div>

    <div class="bottom-half">

      <div class="content">
       <div class="text">${tweet.content.text}</div>
       <div class="border"></div>
     </div>

     <div class="date-icons">
       <div class ="date">${tweet.created_at}</div>
       <div class="icons">
         <i class="fa-solid fa-arrows-retweet"></i>
         <i class="fa-solid fa-flag"></i>
         <i class="fa-solid fa-heart"></i>
       </div>
     </div>
   </div> 

  </header>
  
</article>`);
return $tweet
}

$(document).ready(function() {
  renderTweets(data);
  $('form').submit(function( event ) {
    console.log(event.target.text.value);
    event.preventDefault();
  });
}) 

