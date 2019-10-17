$( document ).ready(function() {

    $(".carousel-inner").on("click", function(){


        window.open("https://sarakgryka.github.io/portfolio-update/portfolio")
    })

    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
      })

      TweenMax.to(".nav-link", 3, {x:600, ease:Bounce.easeOut});
        TweenMax.to(".navbar-brand", 3, {x:150, ease:Bounce.easeOut});
    //   TweenMax.to(".card-text", 3, {x:-50, ease:Bounce.easeOut});
  //TweenMax.to(".links", 3, {x:200, ease:Bounce.easeOut});
      
      TweenMax.to(".rounded-circle", 5, {opacity:0.5});



      TweenLite.to(".titlePort", 1, {x: 700, rotation: 360, delay:3, id:"grey"})













































});