// jquery selector
$(document).ready(function(){
$("#b1").click(function(){
    $(".1").hide();
})
});
 
$(document).ready(function(){
    $("#b2").click(function(){
        $(".1").show();
    })
});

// jquery event//

$(document).ready(function(){
    $("p").click(function(){
      $(this).hide();
    });
  });

// lquery fade
$(document).ready(function(){
    $("#but").click(function(){
      $("#box1").fadeToggle();
      $("#box2").fadeToggle("slow");
      $("#box3").fadeToggle(3000);
    });
  });
// jquery slide
$(document).ready(function(){
    $("#up").click(function(){
        $("#down").slideDown("slow");
    });
});
// jquery Animation
$(document).ready(function(){
    $("#flow").click(function(){
        $("#img").animate({
            left:"800px",
            height:"50px",
            width:"50px",            
        });
    });
});
// jquery stop
$(document).ready(function(){
    $(".down").click(function(){
        $(".up").slideDown(5000);
    });
    $("#but1").click(function(){
        $(".up").stop();
    });
});
// jquery callback
$(document).ready(function(){
    $(".hid").click(function(){
        $(".pp").hide("slow",function(){
            alert("hidden")
        });
    });
});
// jquery chaining
$(document).ready(function(){
    $(".123").click(function(){
        $(".pppp").css("color","red").slideUp(2000).slideDown(2000);
    });
});

// lquery get
$(document).ready(function(){
    $("#btn1").click(function(){
      alert("text");
    });
    $("#btn2").click(function(){
      alert("HTML");
    });
  });
//   $(document).ready(function(){
  $("#btn111").click(function(){
    $("#test111").text("Hello world!");
  });
  $("#btn222").click(function(){
    $("#test222").html("<b>Hello world!</b>");
  });
  $("#btn333").click(function(){
    $("#test333").val("Dolly Duck");
  });
//   jquery set
$(document).ready(function(){
    $("#btn1").click(function(){
      $("p").prepend("<b>Prepended text</b>. ");
    });
    $("#btn2").click(function(){
      $("ol").prepend("<li>Prepended item</li>");
    });
  });
//   jquery add
$(document).ready(function(){
    $("#btn10").click(function(){
      $("#q").prepend("<b>Prepended text</b>. ");
    });
    $("#btn20").click(function(){
      $("ol").prepend("<li>Prepended item</li>");
    });
  });
//   jquery remove
$(document).ready(function(){
    $("#qw").click(function(){
      $(".qwer").empty();
    });
  });
//   jquery css class
$(document).ready(function(){
    $("button").click(function(){
      $("#div1").addClass("important blue");
    });
  });
//   jquery dinmension
$(document).ready(function(){
    $("#poiu").click(function(){
      var txt = "";
      txt += "Width of div: " + $("#hjkl").width() + "</br>";
      txt += "Height of div: " + $("hjkl").height() + "</br>";
      txt += "Inner width of div: " + $("#hjkl").innerWidth() + "</br>";
      txt += "Inner height of div: " + $("#hjkl").innerHeight();
      $("#hjkl").html(txt);
    });
  });