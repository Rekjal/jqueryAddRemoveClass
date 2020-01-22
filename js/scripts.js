$(document).ready(function() {
    $("button#green").click(function() {
      $("body").removeClass();
      $("body").addClass("green-background");
    });
  
    $("button#yellow").click(function() {
      $("body").removeClass();
      $("body").addClass("yellow-background");
    });
  
    $("button#red").click(function() {
      $("body").removeClass();
      $("body").addClass("red-background");
    });

    $("button#dark").click(function() {
        $("body").removeClass();
        $("body").addClass("dark-background");
      });
    
      $("button#white").click(function() {
        $("body").removeClass();
        $("body").addClass("white-background");
      });


  });