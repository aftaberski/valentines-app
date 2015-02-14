$(document).ready(function() {

  $('.welcome-login').on("click", function(event){
    event.preventDefault();
    $('#login_form').toggle();
  });

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
    });
  });

   $('.welcome-signup').on("click", function(event){
    event.preventDefault();
    $('#signup_form').toggle();
  });

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
    });
  });

$('a img.heart').on("click", function(event){
    event.preventDefault();
    console.log(event);
    var $target = $(event.target)
    // debugger
    $.ajax({
      type: $target.data("method"),
      url: $target.data("action"),
      data: $target.data(),
      success: function(response){
        console.log(response)
        $('#' + $target.data("article_id")).empty();
        $('#' + $target.data("article_id")).append(response);
        // $('.welcome-login').toggle();
        // $('.welcome-signup').toggle();
      }
    });
  });
});