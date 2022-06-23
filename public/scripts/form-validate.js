const validateForm = function() {
  let x = event.target.text.value
  if (x == "") {
    alert("tweet must be filled out");
    // return false;
  }
}