$(document).ready(function(){

  // NAVBAR-BRAND COLOR CHANGE ON HOVER
  $(".navbar-inverse .navbar-brand").mouseenter(function(){
    $(".navbar-inverse .navbar-brand").css("color", "#b46954");
    $(".navbar-inverse .navbar-brand span").css("color", "#56977f");
  });
  $(".navbar-inverse .navbar-brand").mouseleave(function(){
    $(".navbar-inverse .navbar-brand").css("color", "#9d9d9d");
    $(".navbar-inverse .navbar-brand span").css("color", "#9d9d9d");
  });

  // EXAMPLE SITES ON HOVER
  function siteScale (){
    //AP THREADS ANIMATION
    $("a.thumbnail .site-scale1").mouseenter(function(){
      $(".ex-site h1").css("transform", "scale(1.2)");
    }),
    $("a.thumbnail .site-scale1").mouseleave(function(){
      $(".ex-site h1").css("transform", "scale(1)");
    });
    //MOUNTAINS ANIMATION
    $("div.site-scale2").mouseenter(function(){
      $("div.site-scale2 .ex-site").css("transform", "scale(1.2)");
    }),
    $("div.site-scale2").mouseleave(function(){
      $("div.site-scale2 .ex-site").css("transform", "scale(1)");
    });
    //HWG ANIMATION
    $("div.site-scale3").mouseenter(function(){
      $("div.site-scale3 .ex-site").css("transform", "scale(1.2)");
    }),
    $("div.site-scale3").mouseleave(function(){
      $("div.site-scale3 .ex-site").css("transform", "scale(1)");
    });
    //GIVING SITE ANIMATION
    $("div.site-scale4").mouseenter(function(){
      $("div.site-scale4 .ex-site").css("transform", "scale(1.2)");
    }),
    $("div.site-scale4").mouseleave(function(){
      $("div.site-scale4 .ex-site").css("transform", "scale(1)");
    });

    $("div.site-scale5").mouseenter(function(){
      $("div.site-scale5 .ex-site").css("transform", "scale(1.2)");
    }),
    $("div.site-scale5").mouseleave(function(){
      $("div.site-scale5 .ex-site").css("transform", "scale(1)");
    });
  };


  siteScale();

  //ALL FOOTER ICON ANIMATIONS
  function pulse (){
    $("footer .icons i").mouseenter(function(){
      $(this).addClass("pulse");
    }),
    $("footer .icons i").mouseleave(function(){
      $(this).removeClass("pulse");
    });
  }

  pulse() //FOOTER ANIMATION CALL

  //bootstrapValidator CONTACT FORM
  // var validator = $("#contact-form").bootstrapValidator({
  //   feedbackIcons: {
  //     valid: "glyphicon glyphicon-ok",
  //     invalid: "glyphicon glyphicon-remove",
  //     validating: "glyphicon glyphicon-refresh"
  //   },
  //   fields: {
  //     name: {
  //       message: "name field is required.",
  //       validators: {
  //         notEmpty: "please enter your name."
  //       },
  //       stringLength:{
  //         min: 3,
  //         max: 15,
  //         mesage: "name must be between 3 and 15 characters in length."
  //       },
  //       different:{
  //         field: "_replyto",
  //         message: "name must be different from email."
  //       }
  //     },
  //     _replyto: {
  //       message: "email field is required.",
  //       validators: {
  //         notEmpty: "please enter your email."
  //       },
  //       stringLength:{
  //         min: 15,
  //         max: 45,
  //         mesage: "email must be between 15 and 45 characters in length."
  //       },
  //       different:{
  //         field: "name",
  //         message: "email name must be different from email."
  //       },
  //       emailAddress:{
  //         message: "email address was invalid."
  //       }
  //     },
  //     message: {
  //       message: "message field is required.",
  //       validators: {
  //         notEmpty: "please write a message to send."
  //       }
  //     }
  //   }
  // });

  //THANK YOU SUCCESS MESSAGE FROM CANTACT FORM
  // validator.on("success.form.bv", function(e){
  //   e.preventDefault();
  //   $("#contact-form").addClass("hidden");
  //   $("#confirmation").removeClass("hidden");
  // });



});
