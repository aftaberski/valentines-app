$(document).ready(function() {

  $('.welcome-login').on("click", function(event){
    event.preventDefault();
    $('#signup_form').hide();
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
    $('#login_form').hide();
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
    // console.log(event);
    var $target = $(event.target)
    // debugger

    $.ajax({
      type: $target.data("method"),
      url: $target.data("action"),
      data: $target.data(),
      success: function(response){
        console.log("in success")
        console.log(response)
        console.log("target",$target)
        console.log($('#' + $target.data('article_id')))
        $('#' + $target.data('article_id')).empty();
        $('#' + $target.data('article_id')).append(response);
        // $('body').empty();
        // $('body').append(response);
      }
    });
  });

$('a#show-articles-btn').on("click", function(event){
    event.preventDefault();
    var $target = $(event.currentTarget)
    // debugger
    $.ajax({
      type: "GET",
      url: $target.attr('href'),
      success: function(response){
        console.log(response)
        $('#content').append(response);
      }
    });
  });

$('.add-new-couple-btn').on("click", function(event){
    event.preventDefault();
    $('#new_article_form').toggle();
  });
});