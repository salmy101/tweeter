/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// Test / driver code (temporary). Eventually will get this from the server.


const tweetData = { 
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
}

const createTweetElement = function(data) {
  const $tweet = $(`<article class="tweet">
  <br>
  <header>
    <div class="top-half">
    <div class="user">
      <span class="avatar" class="fa-solid fa-user"></span>
      <div class="name">${data.user.name}</div>
    </div>

    <div class="handle">${data.user.handle}</div>
   </div>

    <div class="bottom-half">

      <div class="content">
       <div class="text">${data.content.text}</div>
       <div class="border"></div>
     </div>

     <div class="date-icons">
       <div class ="date">${data.created_at}</div>
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
 const $tweet = createTweetElement(tweetData); 
 console.log($tweet); 
 $("#tweets-container").append($tweet)

})
