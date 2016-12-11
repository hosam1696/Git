(function(){
    angular
        .module("Quiz", ['ngRoute','ngResource']);
})();
var background = (function() {
  function background() {
    this.square = "<div class='square'></div>";
    this.circle = "<div class='circle'></div>";
    this.triangle = "<div class='triangle'></div>";
    this.number = 10;
  }
  background.prototype = {
    random: function(min, max) {
      return Math.ceil((Math.random() * (max - min)) + min);
    },
    addSquares: function() {
      for (i = 0; i < this.number; i++) {
        $(".background").append(this.square);
        $(".background").append(this.triangle);
      }
      this.styleSquares();
    },
    styleSquares: function() {
      for (i = 0; i < (this.number * 3); i++) {
        $('.square').eq(i).css({
          width: this.random(200, 1000) + 'px',
          height: this.random(200, 1000) + 'px',
          top: this.random(-200, 200) + 'px',
          left: this.random(-200, 200) + 'px',
          opacity: Math.random(),
          transform: 'rotate(' + this.random(-360, 360) + 'deg)'
        });
        $('.triangle').eq(i).css({
          width: this.random(200, 600) + 'px',
          height: this.random(500, 1000) + 'px',
          top: this.random(-200, 200) + 'px',
          left: this.random(-200, 200) + 'px',
          opacity: Math.random(),
          transform: 'rotate(' + this.random(-360, 360) + 'deg)'
        });
      }
    }
  };
  return background;
}());

var chback = new background();

$(document).ready(function() {
  chback.addSquares();
    
});

