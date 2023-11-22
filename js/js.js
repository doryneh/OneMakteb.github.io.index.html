$(document).ready(function() {
    $(".searchLineBtn").on("click", function() {
      $(".searchLine").slideDown("slow");
      $(this).hide();
    });

    $(".exitBtn").on("click", function() {
      $(".searchLine").slideUp("slow");
      $(".searchLineBtn").show();
    });
  });