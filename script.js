document.getElementById('bobFace').addEventListener('click', function() {
  document.getElementById('my-home').style.overflowY = 'scroll';
  
  document.getElementById('second-section').style.top = '0';
  document.getElementById('bobFace').style.cssText= "top:0; animation:none";
});

$(".ripple").ripples({
  resolution: 256,
  perturbance: 0.01,
});



/*
$(window).on("load resize scroll", function() {
  $("#seventh-section").each(function() {
    var windowTop = $(window).scrollTop();
    var elementTop = $(this).offset().top;
    var leftPosition = windowTop - elementTop;
      $(this)
        .find(".bg-move")
        .css({ left: leftPosition });
  });
});*/




