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




  /*Sauceink Explore*/
  $(".sauceink-explore").click(function(){
    // $(".sauceink-explore-content").slideToggle();
    $(".sauceink-explore-content").toggle('slide');
  });


    // var figure = $(".explore-video").hover( hoverVideo, hideVideo );
    //
    // function hoverVideo(e) {
    //     $('video', this).get(0).play();
    // }
    //
    // function hideVideo(e) {
    //     $('video', this).get(0).pause();
    // }

    //Append Images and Videos for explore
    var imgsVids =
    [
      '<div class="sauceink-explore-img"><div><img src="img/explore-images/explore1.jpg"></div></div>',
      '<div class="sauceink-explore-img"><div><img src="img/explore-images/explore2.jpg"></div></div>',
      '<div class="sauceink-explore-img"><div><img src="img/explore-images/explore3.jpg"></div></div>',
      '<div class="sauceink-explore-img"><div><img src="img/explore-images/explore4.jpg"></div></div>',
      '<div class="sauceink-explore-img"><div><img src="img/explore-images/explore5.jpg"></div></div>',
      '<div class="sauceink-explore-vid"><div><video autoplay loop><source src="vid/placeholder-video.mp4" type="video/mp4">Your browser does not support the video tag.</video></div></div>',
      '<div class="sauceink-explore-img"><div><img src="img/explore-images/explore6.jpg"></div></div>',
      '<div class="sauceink-explore-img"><div><img src="img/explore-images/explore7.jpg"></div></div>',
      '<div class="sauceink-explore-img"><div><img src="img/explore-images/explore8.jpg"></div></div>',
      '<div class="sauceink-explore-img"><div><img src="img/explore-images/explore9.jpg"></div></div>',
      '<div class="sauceink-explore-vid"><div><video autoplay loop><source src="vid/placeholder-video.mp4" type="video/mp4">Your browser does not support the video tag.</video></div></div>',
      '<div class="sauceink-explore-img"><div><img src="img/explore-images/explore10.jpg"></div></div>',
      '<div class="sauceink-explore-img"><div><img src="img/explore-images/explore11.jpg"></div></div>',
      '<div class="sauceink-explore-img"><div><img src="img/explore-images/explore12.jpg"></div></div>',
      '<div class="sauceink-explore-img"><div><img src="img/explore-images/explore13.jpg"></div></div>',
      '<div class="sauceink-explore-img"><div><img src="img/explore-images/explore14.jpg"></div></div>',
      '<div class="sauceink-explore-vid"><div><video autoplay loop><source src="vid/placeholder-video.mp4" type="video/mp4">Your browser does not support the video tag.</video></div></div>',
      '<div class="sauceink-explore-img"><div><img src="img/explore-images/explore15.jpg"></div></div>',
      '<div class="sauceink-explore-img"><div><img src="img/explore-images/explore16.jpg"></div></div>',
      '<div class="sauceink-explore-img"><div><img src="img/explore-images/explore17.jpg"></div></div>',
      '<div class="sauceink-explore-img"><div><img src="img/explore-images/explore18.jpg"></div></div>',
      '<div class="sauceink-explore-img"><div><img src="img/explore-images/explore19.jpg"></div></div>',
      '<div class="sauceink-explore-img"><div><img src="img/explore-images/explore20.jpg"></div></div>',
      '<div class="sauceink-explore-vid"><div><video autoplay loop><source src="vid/placeholder-video.mp4" type="video/mp4">Your browser does not support the video tag.</video></div></div>',
    ];

    imgsVidsRev = imgsVids.reverse();

    $.each( imgsVidsRev, function( index, value ) {
      $(".sauceink-explore-content-flex").append(value);
    });
  /*End Of Sauceink Explore*/
});
