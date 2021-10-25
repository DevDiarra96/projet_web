/* couleur navbar lors du scrolll */
window.onscroll = function () {
  if(document.documentElement.scrollTop>80){
    document.getElementById("navbar").style.background = "#606b64";
  }
  else
  {
    document.getElementById("navbar").style.background = "transparent"; 
  }
}
/*Surbrillance lors du scroll*/

$(document).ready(function(){
  /*$('.navbar-nav').on('click', 'a', function () {
        $('.navbar-nav a.active_underlined').removeClass('active_underlined');
        $(this).addClass('active_underlined');
    });*/
  $(window).scroll(function() {
   let ActiveID;
    $('.container-row').each(function() {
      const containerRowTop = $(this).offset().top - 50;
        if ($(document).scrollTop() > containerRowTop) {
        const thisOfs = $(this).attr('id');
        $('.container-row').removeClass('active_underlined');
          ActiveID = $(this).addClass('active_underlined').attr('id');
          }
        });
        $('nav ul li').each(function(index, el) {
          const thisChildren = $(this).children('a');
          const thisChildrenHref = $(this).children('a').attr('href');
          if (thisChildrenHref === '#' + ActiveID) {
          $('nav ul li a').removeClass('active_underlined');
          $(thisChildren).addClass('active_underlined');
          }
        });
      });

  $(document).ready(function(){
  $('li>a').on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 2000, function(){
        window.location.hash = hash;
      });
    }
  });
});
});


/*boutton menu*/
const barre = document.querySelector(".barre");
const navMenu = document.querySelector("#navbar-right");

barre.addEventListener("click", mobileMenu);

function mobileMenu() {
  barre.classList.toggle("active");
  navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
  barre.classList.remove("active");
  navMenu.classList.remove("active");
}


  //$(document).ready(function(){    
    //$('#show').click(function() {
      //$('.menu').toggle("slide");
    
    //});

    //$('button').click(function() {
    //$('button').html("Reduire");

//});

//});

$(document).ready(function(){    
    $('#show').click(function() {
      $('.menu').toggle("slide");
    var x = $(this).text();
  if(x == "Lire plus")
  {
    $(this).text("Reduire");
    $(this).parent(".body-propos").find('.menu').slideDown();
  }

  else
  {
      $(this).text("Lire plus");
    $(this).parent("body-propos").find('menu').slideUp();
  }
    });


});



