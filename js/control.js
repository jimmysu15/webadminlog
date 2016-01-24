$(function () {
   'use strict';
  	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 40
            }, 900);
            return false;
          }
        }
      });

    $(window).bind('scroll', function() {
        var navHeight = $('#myCarousel').height();
        if ($(window).scrollTop() > navHeight) {
            $('.mainnav').addClass('fixed');
        } else {
            $('.mainnav').removeClass('fixed');
        }
    });

    $('body').scrollspy({ 
        target: '.mainnav',
        offset: 80
    })

  	$(document).ready(function() {
  	  $("#clients").owlCarousel({  	 
  	      navigation : true,
  	      slideSpeed : 300,
  	      paginationSpeed : 400,
  	      autoHeight : true,
  	      itemsCustom : [
				        [0, 1],
				        [450, 2],
				        [600, 2],
				        [700, 2],
				        [1000, 4],
				        [1200, 5],
				        [1400, 5],
				        [1600, 5]
				      ],
  	  });
        //Function to animate slider captions 
        function doAnimations( elems ) {
          //Cache the animationend event in a variable
          var animEndEv = 'webkitAnimationEnd animationend';
          
          elems.each(function () {
            var $this = $(this),
              $animationType = $this.data('animation');
            $this.addClass($animationType).one(animEndEv, function () {
              $this.removeClass($animationType);
            });
          });
        }
        
        //Variables on page load 
        var $myCarousel = $('#myCarousel'),
          $firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");
          
        //Initialize carousel 
        $myCarousel.carousel();
        
        //Animate captions in first slide on page load 
        doAnimations($firstAnimatingElems);
        
        //Pause carousel  
        $myCarousel.carousel('pause');
        
        
        //Other slides to be animated on carousel slide event 
        $myCarousel.on('slide.bs.carousel', function (e) {
          var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
          doAnimations($animatingElems);
        });  


  	});



});


