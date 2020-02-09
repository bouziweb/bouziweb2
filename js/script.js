
/*-----------------------------Loading the page------------------------------*/

            $(window).on("load", function(){
                $(".loader .inner").fadeOut(600, function(){
                    $(".loader").fadeOut(800);
                });
            });
            



$(document).ready(function(){

    //------------------button for display nav-----------------------//




  $(".menu-hider-icon").toggle(
    function(){$("main").css("max-width", "100%");
               $("main").css("margin-left", "0px");
               $("#navigation").css("left", "-220px");
               $("#about").css("padding-left", "0px");
               $(".aboutImage").css("right", "0px");
            },
               
    function(){$("main").css("max-width", "100%");
               $("main").css("margin-left", "230px");
               // $("main").css("padding-right", "230px");
               $("#navigation").css("left", "0px");
               $("#about").css("padding-left", "20px");
               $(".aboutImage").css("right", "50px");
  });
  



    //-------------------Section Slides-------------
    $('#slides').superslides({
        animation:'fade',
        play:3000,
        
    });

    var typed = new Typed(".tybed",{
        strings:["UI/UX Designer","Freelancer","Web Developer"],
        typeSpeed:60,
        loop:true,
        startDelay:1000,
        showCursor:true,
        cursorChar: "|",
        backSpeed: 20,
        backDelay: 500,
    });
    var typed2 = new Typed(".titleAbout",{
        strings:["UI/UX Designer","Web Developer"],
        typeSpeed:70,
        loop:true,
        startDelay:1000,
        showCursor:false,
        backSpeed: 20,
        backDelay: 500,
    });

/////////////////////////////////





//-------function for keep the button active--------------


    $("#navigation ul li").click(function(){
        $(".active1").removeClass("active1");
        $(this).addClass("active1");
    });


    //-------------for active the button whene scroll down -----

    $(window).scroll(function(){
                   
         
         
        if($(document).scrollTop() < 90 )
        {
            $(".active1").removeClass("active1");
            $("#ScrollHome").addClass("active1");
            
        }
       if($(document).scrollTop() > 358)
       {
           $(".active1").removeClass("active1");
           $("#ScrollAbout").addClass("active1");
          
       
       }
        if ($(document).scrollTop() >1270)
       {
           $(".active1").removeClass("active1");
           $("#ScrollSkills").addClass("active1");
        
       }
        
        if ($(document).scrollTop() >1760)
       {
           $(".active1").removeClass("active1");
           $("#ScrollStats").addClass("active1");
           
       } 
        
       if ($(document).scrollTop() > 2400)
       {
           $(".active1").removeClass("active1");
           $("#ScrollPortfolio").addClass("active1");
          
       }
       if ($(document).scrollTop() > 2900)
       {
           $(".active1").removeClass("active1");
           $("#ScrollContact").addClass("active1");
          
       }
       
   });
   
  
    

 //------------Botton scroll Down-----------------------

    $(function() {
        $('.scroll-down').click (function() {
          $('html, body').animate({scrollTop: $('#about').offset().top }, 'slow');
          return false;
        });
      });

      

 /*------------NavBar Movememt------------------

    const nav =$("#navigation");
    const navTop=nav.offset().top;

    $(window).on("scroll",stickNavigation);

    function stickNavigation(){
        var body =$("body");

        if ($(window).scrollTop()>=navTop){
            body.css("padding-top",nav.outerHeight()+"px");
            body.addClass("fixedNav");
          
        }
        else{
            body.removeClass("fixedNav");
            body.css("padding-top",0);

        }
    }
    */
        //--------------------------------------------------------------- animated With Scroll-----------------------------------------------------------------
      
        $(window).scroll(function(){
            
            $(".aboutImage,.aboutText,.ScrollSkills,.ScrollStats,.ScrollPortfolio,.ScrollContact,.title_holder").addClass("myHidden");
         
            if($(document).scrollTop()>460)
            {
                $(".aboutImage,.aboutText,#about .title_holder").removeClass("myHidden");
                $(".aboutImage,.aboutText").addClass("myvisible animated fadeIn slower");
                $("#about .title_holder").addClass("myvisible animated fadeInLeft fast");

                
            }
            if($(document).scrollTop()>1100)
            {
                $(".ScrollSkills,#skills .title_holder").removeClass("myHidden");
                $(".ScrollSkills").addClass("myvisible animated fadeIn slower");
                $("#skills .title_holder").addClass("myvisible animated fadeInLeft fast");
                
            }
            if($(document).scrollTop()>1800)
            {
                $(".ScrollStats").removeClass("myHidden");
                $(".ScrollStats").addClass("myvisible animated fadeIn slower");
                
            }
            if($(document).scrollTop()>2400)
            {
                $(".ScrollPortfolio,#Portfolio .title_holder").removeClass("myHidden");
                $(".ScrollPortfolio").addClass("myvisible animated fadeIn slower");
                $("#Portfolio .title_holder").addClass("myvisible animated fadeInLeft fast");

                
            }
            if($(document).scrollTop()>3300)
            {
                $(".ScrollContact,#contact .title_holder").removeClass("myHidden");
                $(".ScrollContact").addClass("myvisible animated fadeIn slower");
                $("#contact .title_holder").addClass("myvisible animated fadeInLeft fast");

                
            }
          
           
          
          
   
   
   
          
       });
           
    
  
        
  

    //---------------------------------------------------------------Section Skills-----------------------------------------------------------------

    $('.owl-carousel').owlCarousel({
        items:8,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:3000,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            938:{
                items:4
            }
        }
    })
   
   

      var skillsTopOffset= $(".skillsSection").offset().top;
      $(window).scroll(function(){
          if (window.pageYOffset>skillsTopOffset-$(window).height()+350) {
            $('.chart').easyPieChart({
                easing:'easeInOut',
                barColor:'#fff',
                trackColor:false,
                scaleColor:false,
                lineWidth:4,
                loop:true,
                size:152,
                onStep:function(from, to, percent){
                    $(this.el).find('.percent').text(Math.round(percent));
                }
        
            });
          }

      });


  /*-----------------------------CountUp-Stats-----------------------------*/


  var skillsTopOffset= $(".skillsSection").offset().top;
   $(window).scroll(function(){
      if (window.pageYOffset>skillsTopOffset-$(window).height()+500) {

            $('.counter').each(function() {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                
                $({ countNum: $this.text()}).animate({
                countNum: countTo
                },
            
                {
            
                duration: 800,
                easing:'linear',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                    $this.text(this.countNum);
                    
                }
            
                });  
                
                
            
            });

       
      }

  });
       

  /*---------------------Section Porflolio --------FancyBox For show the pictures full screan ------------------------------*/


        $("[data-fancybox]").fancybox();


        $(".items").isotope({
            filter:'*',
            animationOptions:{
                duration:1500,
                easing:'linear',
                queue:false
            }
        });

        $("#filters a").click(function(){
            $(".current").removeClass("current");
            $(this).addClass("current");
            
            
          
            var selector=$(this).attr("data-filter");
            
             
            $(".items").isotope({
                filter:selector,
                animationOptions:{
                    duration:1500,
                    easing:'linear',
                    queue:false
                }
                
            });
            
            return false;
        });



  

});


  /*-----------------------------Contact-----------------------------*/


$(function () {
    
    $('#contact-form').submit(function(e) {
        e.preventDefault();
        $('.comments').empty();
        var postdata = $('#contact-form').serialize();
        
        $.ajax({
            type: 'POST',
            url: 'php/contact.php',
            data: postdata,
            dataType: 'json',
            success: function(json) {
                 
                if(json.isSuccess) 
                {
                    $('#contact-form').append("<p class='thank-you'>Your message has been sent. thank you for contacting me :)</p>");
                    $('#contact-form')[0].reset();
                }
                else
                {
                    $('#firstname + .comments').html(json.firstnameError);
                    $('#name + .comments').html(json.nameError);
                    $('#email + .comments').html(json.emailError);
                    $('#phone + .comments').html(json.phoneError);
                    $('#message + .comments').html(json.messageError);
                }                
            }
        });
    });

})

