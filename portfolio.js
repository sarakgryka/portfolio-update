$( document ).ready(function() {

    $(".carousel-inner").on("click", function(){


        window.open("file:///C:/Users/HomeUser/Desktop/homework/portfolio-update/portfolio.html")
    })

    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
      })

      TweenMax.to(".nav-link", 3, {x:950, ease:Bounce.easeOut});
        TweenMax.to(".navbar-brand", 3, {x:250, ease:Bounce.easeOut});
    //   TweenMax.to(".card-text", 3, {x:-50, ease:Bounce.easeOut});
  //TweenMax.to(".links", 3, {x:200, ease:Bounce.easeOut});
      
      TweenMax.to(".rounded-circle", 5, {opacity:0.5});

















































});