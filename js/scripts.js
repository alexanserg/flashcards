$(document).ready(function() {
  // $("span#js").click(function() {
  //   $(".card").Toggle();
  //   $(".definition").Toggle();
  // });
   // $(".javascript").click(function() {
   //   $(".javascript").fadeToggle();
   // });
  $("p.card-two").click(function() {
    $("div.two").removeClass("question");
    $("div.two").addClass("answer");
  });

  $("p.answer-two").click(function() {
    $("div.two").removeClass("answer");
    $("div.two").addClass("question");
  });

  $(".clickable").click(function(){
    $(".card-one-showing").toggle();
    $(".card-one-hidden").toggle();
  });

  $(".clickable-three").click(function(){
    $(".card-three-showing").toggle();
    $(".card-three-hidden").toggle();
  });

  $(".clickable-four").click(function(){
    $(".card-four-showing").toggle();
    $(".card-four-hidden").toggle();
  });

  $(".clickable-five").click(function(){
    $(".card-five-showing").toggle();
    $(".card-five-hidden").toggle();
  });

  $(".methods").click(function() {
  $(".methods").fadeToggle();
  });

  $(".arguments").click(function() {
  $(".arguments").fadeToggle();
  });
});
