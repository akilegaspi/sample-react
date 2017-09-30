// Discover Menu JS
(function() {

var Menu = (function() {
var burger = document.querySelector('.burger');
var menu = document.querySelector('.menu');
var menuList = document.querySelector('.menu__list');
var brand = document.querySelector('.menu__brand');
var menuItems = document.querySelectorAll('.menu__item');

var active = false;

var toggleMenu = function() {
if (!active) {
  menu.classList.add('menu--active');
  menuList.classList.add('menu__list--active');
  brand.classList.add('menu__brand--active');
  burger.classList.add('burger--close');
  for (var i = 0, ii = menuItems.length; i < ii; i++) {
    menuItems[i].classList.add('menu__item--active');
  }

  active = true;
} else {
  menu.classList.remove('menu--active');
  menuList.classList.remove('menu__list--active');
  brand.classList.remove('menu__brand--active');
  burger.classList.remove('burger--close');
  for (var i = 0, ii = menuItems.length; i < ii; i++) {
    menuItems[i].classList.remove('menu__item--active');
  }

  active = false;
}
};

var bindActions = function() {
burger.addEventListener('click', toggleMenu, false);
};

var init = function() {
bindActions();
};

return {
init: init
};

}());

Menu.init();

}());


$(document).ready(function(){

    // $(".sauce-left-side-nav ul li a").hover(function(){
    //     $(".sauce-left-side-nav > ul > li > a > i").css({"font-size" : "25px", "top" : "30%"});
    //     }, function(){
    //     $(".sauce-left-side-nav > ul > li > a > i").css({"font-size" : "45px", "top" : "50%"});
    // });

    if($(".sauce-left-side-nav ul li").hasClass("sauce-left-side-nav-active")){
      $(".sauce-left-side-nav-active a i").css({"font-size" : "25px", "top" : "30%", "color" : "#343637"});
      // alert("yers");
    };

    $('.sauce-left-side-nav ul li a').hover(function () {
    $("i", this).css({"font-size" : "25px", "top" : "30%", "color" : "#343637"});
    }, function () {
    $("i", this).css({"font-size" : "45px", "top" : "50%", "color" : "#c1c1c1"});
    if($(".sauce-left-side-nav ul li").hasClass("sauce-left-side-nav-active")){
      $(".sauce-left-side-nav-active a i").css({"font-size" : "25px", "top" : "30%", "color" : "#343637"});
      // alert("yers");
    };
    });

    // side nav clicked
    var snc = false;
    $(".arrow-sauce-left-side-nav").on('click', function(){
      if (!snc)
      {
        snc = true;
        $(".sauce-left-side-nav").css("left", 0);
        $("#show-sauce-left-side-nav").hide();
        $("#hide-sauce-left-side-nav").show();
        $(".the-sauce-con").css({"width" : "92.1%", "float" : "right"});
      }
      else
      {
        snc = false;
        $(".sauce-left-side-nav").css("left", "-100px");
        $("#show-sauce-left-side-nav").show();
        $("#hide-sauce-left-side-nav").hide();
        $(".the-sauce-con").css({"width" : "100%", "float" : "none"});
      }
    });


    // $().click(function(){
    //   $("#sho")
    // });
    //
    // $( "#show-sauce-left-side-nav" ).click(function() {
    // $( "#toggle" ).toggle( "slide" );
    // });

    // .the-sauce-con{
    //   width: 92.1%;
    //   float: right;
    // }


});
