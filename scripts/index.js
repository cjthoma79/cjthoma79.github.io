
//When window loads fade overlay and select bg img
window.addEventListener('load', function(){
   // $(".bodyOverlay").fadeOut('normal', function(){
        //$('bodyOverlay').fadeIn();
   // })
})


//-------------------- Gallery  ------------------------//

//sets gallery up on window load
window.addEventListener('load', function() {
    //loads gallery buttons onto page depending on number 
    //of images in gallery folder

    for(i = 0; i < imgs.length; i++){
        $('.currentBar').append('<a class="imgGalButton"></a>');
        galButtons = $('.currentBar a');
    }

    //sets first selected button
    galButtons.eq(0).addClass("selected");
});

var imgs = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg'
]

var imgCount = 0;
var galButtons;


$('.imgContainer').click(function() {
    galButtons.eq(imgCount).removeClass("selected");
    if(imgCount >= imgs.length -1){
        imgCount = -1;
    }

    
    $('.imgContainer').fadeOut(250, function() {
        console.log(imgCount);
        $('.imgContainer').css('background-image', 'url(../assets/gallery_imgs/' +imgs[imgCount] +')');
    });
    $('.imgContainer').fadeIn(400);
    imgCount++;
    galButtons.eq(imgCount).addClass("selected");
})

//side scrolling title element
var el = $('.scrollWrapper');
var elpos = el.offset().top + 250;

var el2 = $('.scrollWrapper2');
var elpos2 = el2.offset().top + 250;

$(window).scroll(function() {
    var y = $(this).scrollTop();
    if(y < elpos - 1000) {
        el.stop().animate({'top': 0}, 25);
    } else {
        el.stop().animate({'top': y-elpos}, 25);
    }
    
    if(y < elpos2 - 1000) {
        el2.stop().animate({'top': 0}, 25);
    } else {
        el2.stop().animate({'top': y-elpos2}, 25);
    }
})

//--------------- Side Nav Functions ---------------//


//close menu funtion


//open menu function
$("#openMenu").click(function() {
    if($(".sideNav").css("left") == "-1200px"){
        $(".sideNav").animate({"left": "0px"},"fast");
        $(".bodyOverlay").fadeIn('normal', function(){
            $('bodyOverlay').fadeOut();
        })
    }
})

//Returns side nav elements position in array when click


$('.sideNav a').click(function(){
    console.log(this);
    sideNavClickHandler($('.sideNav a').index(this));
})

//side nav click handler
function sideNavClickHandler(pos) {
    

    var element = $('.sideNav');
    switch (pos) {
        case 0:
            //login button
        break;

        case 1:
            //side nav
            //closes nav
            if(element.css("left") == "0px"){
                element.animate({"left": "-1200px"},"fast");
                $(".bodyOverlay").fadeOut('normal', function(){
                    $('bodyOverlay').fadeIn();
                })
            }
        break;

        case 2:
            //about
            //scrolls to about section
            $('html,body').animate({
                scrollTop: $('.aboutSection').offset().top
              }, 400);
        break;

        case 3:
            //gallery button
            //scrolls to gallery section
            $('html,body').animate({
                scrollTop: $('.gallerySection').offset().top -100
              }, 400);
        break;

        case 4:
            //contact button
            $('html,body').animate({
                scrollTop: $('.contactSection').offset().top -150
            }, 400);
        break;

        case 5:
            //resume button
            console.log('test');
        break;

        case 6:
            console.log('test');
        break;

        case 9:
            //arrow button
            //scrolls to about section
            $('html,body').animate({
                scrollTop: $('.aboutSection').offset().top
              }, 400);
        break;

    }

}



/******************* Background Movement *********************/

var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 30;

function moveBackground() {
  x += (lFollowX - x) * friction;
  y += (lFollowY - y) * friction;
  
  translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

  $('.heroImg').css({
    '-webit-transform': translate,
    '-moz-transform': translate,
    'transform': translate
  });

  window.requestAnimationFrame(moveBackground);
}

$(window).on('mousemove click', function(e) {

  var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
  var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
  lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
  lFollowY = (10 * lMouseY) / 100;

});

moveBackground();