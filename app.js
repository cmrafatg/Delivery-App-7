//controlling the arrows;right & left
var move=170;
var move2=300
var scrolling=true;
var moveCheck=60;
$('.back').on('click',function(e){
    e.preventDefault();
    $('.carousel').animate({
        scrollLeft:'-='+move+'px'
    });
});
$('.next').on('click',function(e){
    e.preventDefault();
    $('.carousel').animate({
        scrollLeft:'+='+move+'px'
    })
});

$('.backward').on('click',function(e){
    e.preventDefault();
    $('.icon-menus').animate({
        scrollLeft:'-='+move2+'px'
    });
});
$('.forward').on('click',function(e){
    e.preventDefault();
    $('.icon-menus').animate({
        scrollLeft:'+='+move2+'px'
    })
});
let signupbutton=document.getElementById("signupbutton")
let signinbutton=document.getElementById("signinbutton")
let name=document.getElementById("name")
let password=document.getElementById("password")