$(document).ready(function () {
  $("#tweet-text").on("input", function () {
    //The this keyword is a reference to the text area
    let tweetCharacters = $(this).val().length;
    let charactersLeft = 140 - tweetCharacters;
    // console.log($(this).val().length)
    // console.log($(this).parent());
    let $counter = $(this)
      .parent()
      .children("#after-border")
      .children(".counter"); //transverse this = text area, child = button, child = counter
    $counter.text(charactersLeft); //The result of the .text() method is a string containing the combined text of all matched elements
    if (charactersLeft < 0) {
      $counter.css("color", "red");
      return;
    }
    $counter.css("color", "black");
  });
});
