/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// Test / driver code (temporary). Eventually will get this from the server.

const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

 const loadTweets = function() { 
  $.get("/tweets").then(data => { 
    console.log(data);
    renderTweets(data) 
  }) 
} ; 

const renderTweets = function(arr) {    // loops through tweets
  arr.forEach(tweet => { // calls createTweetElement for each tweet
  //  createTweetElement(tweet)// takes return value and appends it to the tweets container  
    const $tweet = createTweetElement(tweet);
    $('#tweets-container').prepend($tweet);
  }); 

}    

const createTweetElement = function(tweet) {
  const $tweet = $(`<article class="tweet">
  <br>
  <header>
    <div class="top-half">
    <div class="user">
      <img src="${(tweet.user.avatars)}" width="80" height="80">
      <div class="name">${tweet.user.name}</div>
    </div>

    <div class="handle">${tweet.user.handle}</div>
   </div>

    <div class="bottom-half">

      <div class="content">
       <div class="text">${escape(tweet.content.text)}</div>
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
  loadTweets(); 
  $('form').submit(async( event ) => {
  event.preventDefault();
  const tweetLength = $("#tweet-text").val().length;
    if (tweetLength > 140) {
      return alert("You have exceeded the maximum number of characters.")
    } else if( tweetLength === 0) {
      return alert("Please enter your tweet in the textbox.");
    }
    console.log(event.target.text.value);
    await $.ajax("/tweets",{ 
      method:"POST", 
      data: $("#tweet-text").serialize()
    })
    await loadTweets()
  }); 
}) 


