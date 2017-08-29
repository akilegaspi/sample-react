function showStuff(element)  {
    var tabContents = document.getElementsByClassName('tabContent');
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = 'none';
    }

    // change tabsX into tabs-X in order to find the correct tab content
    var tabContentIdToShow = element.id.replace(/(\d)/g, '-$1');
    document.getElementById(tabContentIdToShow).style.display = 'block';
};




$(document).ready(function(){




  $("#sauce-photo-upload-span").click(function(){
    $("#sauce-photo-upload").click();
  });

  $("#sauce-photo-upload").on("change paste keyup", function() {
      $("#sauce-add-photos").show();
      $("#sauce-add-img-url").hide();
  });

  $("#sauce-add-photos").click(function(){
    $("#sauce-photo-upload").click();
  });

  $("#sauce-add-img-url").click(function(){
    $("#sauce-photo-upload-span").hide();
    $("#sauce-add-img-url-input").show();
    $("#sauce-img-url-preview").show();
    $("#sauce-add-another-img-url").show();
    $("#sauce-add-img-url-input").css('display', 'block');
    $("#sauce-add-img-url").hide();
  });


  $(".sauce-upload > li").click(function(){
    $(".sauceink-status .row .col-md-12:first-child").css("margin-top", "350px");
  });

  $(".tab-cancel").click(function(){
    $("#sauce-add-img-url").show();
    $("#sauce-photo-upload-span").show();
    $("#sauce-add-another-img-url").hide();
    $("#sauce-img-url-preview").hide();
    $("#sauce-photo-upload").val('');
    $(".tabContent").hide();
    $("#sauce-add-img-url-input").hide();
    $("#sauce-add-img-url").show();
    $("#sauce-add-photos").hide();
    $(".sauceink-status .row .col-md-12:first-child").css("margin-top", "280px");
    $("div.sauce-photos-preview > img").remove();
  });

  function getImgUrlVal()
  {
    $('#sauce-add-img-url-input').on('input',function(e){
      return ($('#sauce-add-img-url-input').val());
     });
  };

  $("#sauce-img-url-preview").click(function(){
    alert($("#sauce-add-img-url-input").val());
    // $("#sauce-add-img-url-input").val();
  });

  $(function() {
    // Multiple images preview in browser
    var imagesPreview = function(input, placeToInsertImagePreview) {

        if (input.files) {
            var filesAmount = input.files.length;

            for (i = 0; i < filesAmount; i++) {
                var reader = new FileReader();

                reader.onload = function(event) {
                    $($.parseHTML('<img>')).attr('src', event.target.result).appendTo(placeToInsertImagePreview);
                }

                reader.readAsDataURL(input.files[i]);
            }
        }

    };

    $('#sauce-photo-upload').on('change', function() {
        imagesPreview(this, 'div.sauce-photos-preview');
    });
  });

});





//Menu Js
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
