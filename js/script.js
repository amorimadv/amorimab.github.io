$(document).ready(function (){
    var _containerBtn = $(".jbtn-back");
    var _btnLink = $(".jbtn-back-link");

    $(window).scroll(function(){
        if($(this).scrollTop()> 70){
            _containerBtn.fadeIn(500);
        }else{
            _containerBtn.fadeOut(500);
        }
    });

    _btnLink.click(function(){

        $("html, body").animate({scrollTop: 0}, 800);

        return false;
    });
});

$('nav a').click(function(e){
    e.preventDefault();
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top;
    $('html, body').animate({
        scrollTop: targetOffset
    }, 800);
});
