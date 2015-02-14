$(document).ready(function() {
  $('.welcome-login').on("click", function(event){
    event.preventDefault();
    $('#login_form').toggle();
  })

   $('.welcome-signup').on("click", function(event){
    event.preventDefault();
    $('#signup_form').toggle();
  })

});
