$(document).ready(function() {
   
    function getRandomColor() {
      return '#' + Math.floor(Math.random()*16777215).toString(16);
    }


    function addRandomColor() {
      var randomColor = getRandomColor();
      $('.outer').css('background-color', randomColor);
    }

  
    $('.outline').on('click', function() {
      addRandomColor();
      $(".btn").toggleClass("anim");
    });
  });