$(document).ready(function() {
  $('.welcome-login').on("click", function(event){
    event.preventDefault();
    $('#login_form').toggle();
  })

  $('.login-ajax').on("submit", function(event){
    event.preventDefault();
    var $target = $(event.target)

    $.ajax({
      type: $target.attr("method"),
      url: $target.attr("action"),
      data: $target.serialize(),
      success: function(response){
        $('#content').empty();
        $('#content').append(response);
        // $('.welcome-login').toggle();
        // $('.welcome-signup').toggle();
      }
    })
  })

   $('.welcome-signup').on("click", function(event){
    event.preventDefault();
    $('#signup_form').toggle();
  })

   $('.signup-ajax').on("submit", function(event){
    event.preventDefault();
    var $target = $(event.target)

    $.ajax({
      type: $target.attr("method"),
      url: $target.attr("action"),
      data: $target.serialize(),
      success: function(response){
        $('#content').empty();
        $('#content').append(response);
        // $('.welcome-login').toggle();
        // $('.welcome-signup').toggle();
      }
    })
  })
});
