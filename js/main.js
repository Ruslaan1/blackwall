$(".head_burger").on("click", function() {
	$("header").css("display", "block");
});
$(".close").on("click", function() {
	$("header").css("display", "none");
});
$(".chains_bl").hover(function() {
	    $(this).children('.chains_no').show(500);
	  }, function() {
	    $(this).children('.chains_no').hide(500);
});
var offset = $(".slide_active .slider_body_title").offset();
$(".slider_pagin_block").css("left", offset.left);
$(".slider_pagin").on("click", function(){
	var thisslide = $(this).attr("data-to");
  var activslide = $(".slider_pagin_active").attr("data-to");
  if(thisslide == activslide) {
    return false;
  }
	// $(".slider_slide").hide(500);
	// $("#"+thisslide).show(500).css("display", "flex");
  var boxWidth = $(".slider_slides").width();
  $(".slide_active").animate({width: 0}).css("display", "none");
  $(".slide_active").removeClass("slide_active");
  $("#"+thisslide).animate({width: boxWidth}).css("display", "flex");
  $("#"+thisslide).addClass("slide_active");
  $(".slider_pagin_active").removeClass('slider_pagin_active');
  $(this).addClass('slider_pagin_active');
});
$(function() {
  $(".slider_slide").swipe( {
    swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
      //alert("You swiped " + direction );
      if(direction == 'left') {
        var dirto = $(".slider_pagin_active").attr('data-to');
        var sliceto = dirto.substr(1);
        var next = Number(sliceto) + 1;
        if($("#s"+next).length) {
          var boxWidth = $(".slider_slides").width();
          $(".slide_active").animate({width: 0}).css("display", "none");
          $(".slide_active").removeClass("slide_active");
          $("#s"+next).animate({width: boxWidth}).css("display", "flex");
          $("#s"+next).addClass("slide_active");
          $(".slider_pagin_active").removeClass('slider_pagin_active');
          $(".slider_pagin[data-to=s"+next+"]").addClass('slider_pagin_active');
        } else {
          var last = $(".slider_pagin").first();
          var lastel = last.attr("data-to");
          var boxWidth = $(".slider_slides").width();
          $(".slide_active").animate({width: 0}).css("display", "none");
          $(".slide_active").removeClass("slide_active");
          $("#"+lastel).animate({width: boxWidth}).css("display", "flex");
          $("#"+lastel).addClass("slide_active");
          $(".slider_pagin_active").removeClass('slider_pagin_active');
          $(".slider_pagin[data-to="+lastel+"]").addClass('slider_pagin_active');
        }
      } else if(direction == 'right') {
        var dirto = $(".slider_pagin_active").attr('data-to');
        var sliceto = dirto.substr(1);
        var next = Number(sliceto) - 1;
        if($("#s"+next).length) {
          var boxWidth = $(".slider_slides").width();
          $(".slide_active").animate({width: 0}).css("display", "none");
          $(".slide_active").removeClass("slide_active");
          $("#s"+next).animate({width: boxWidth}).css("display", "flex");
          $("#s"+next).addClass("slide_active");
          $(".slider_pagin_active").removeClass('slider_pagin_active');
          $(".slider_pagin[data-to=s"+next+"]").addClass('slider_pagin_active');
        } else {
          var last = $(".slider_pagin").last();
          var lastel = last.attr("data-to");
          var boxWidth = $(".slider_slides").width();
          $(".slide_active").animate({width: 0}).css("display", "none");
          $(".slide_active").removeClass("slide_active");
          $("#"+lastel).animate({width: boxWidth}).css("display", "flex");
          $("#"+lastel).addClass("slide_active");
          $(".slider_pagin_active").removeClass('slider_pagin_active');
          $(".slider_pagin[data-to="+lastel+"]").addClass('slider_pagin_active');
        }
      }
    }
  });
  $(".slider_slide").swipe({fingers:1});
});
// function makeDiv(){
//     var divsize =  20;
//     var color = '#000'
//     $newdiv = $('<div/>').css({
//         'width':divsize+'px',
//         'height':divsize+'px',
//         'background-color': color
//     });
//     var posx = (Math.random() * ($('.pixels').width() - divsize)).toFixed();
//     var posy = (Math.random() * ($('.pixels').height() - divsize)).toFixed();
//     $newdiv.css({
//         'position':'absolute',
//         'left':posx+'px',
//         'top':posy+'px',
//         'display':'none'
//     }).appendTo( '.pixels' ).fadeIn(100).delay(1000).fadeOut(500, function(){
//       $(this).remove();
//       makeDiv(); 
//     });
// };
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i
    .test(navigator.userAgent)) {
  console.log('mobile');
} else {
  function makeDiv(){
  	if($(".pixels div").length > 15) {
      	for(var i = 0; i < $(".pixels div").length; i++) {
      		$(".pixels div:nth-child(16)").remove();
      	}
      }
      var divsize =  20;
      var color = '#fff'
      $newdiv = $('<div/>').css({
          'width':divsize+'px',
          'height':divsize+'px',
          'background-color': color
      });
      var posx = (Math.random() * ($('.pixels').width() - divsize)).toFixed();
      var posy = (Math.random() * ($('.pixels').height() - divsize)).toFixed();
      $newdiv.css({
          'position':'absolute',
          'left':posx+'px',
          'top':posy+'px',
          'display':'none'
      }).appendTo( '.pixels' ).fadeIn(100).delay(1000).fadeOut(500, function(){
        $(this).remove();
        makeDiv(); 
      });
  };
  setInterval(makeDiv, 1000);
}
function makeDiv2(){
	if($(".head_pixel").length > 15) {
    	for(var i = 0; i < $(".head_pixel").length; i++) {
    		$(".head_pixel:nth-child(16)").remove();
    	}
    }
    var divsize =  20;
    var divsize2 = 50
    var color = '#000'
    $newdiv = $('<div class="head_pixel" />').css({
        'width':divsize2+'px',
        'height':divsize+'px',
        'background-color': color
    });
    var posx = (Math.random() * ($('.head').width() - divsize)).toFixed();
    var posy = (Math.random() * ($('.head').height() - divsize)).toFixed();
    $newdiv.css({
        'position':'absolute',
        'left':posx+'px',
        'top':posy+'px',
        'z-index': '-1',
        'display':'none'
    }).appendTo( '.head' ).fadeIn(100).delay(1000).fadeOut(500, function(){
      $(this).remove(); 
    });
};
setInterval(makeDiv2, 1000);
function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('element-show');
    }
  });
}

let options = {
  threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
  observer.observe(elm);
}
m = false;
	$(window).scroll(function(){
  var offset = $('.count').offset();
  var offset2 = $(".sprite-image").offset();
  if ($(this).scrollTop() < offset.top && $(this).scrollTop() > offset2.top && m != true) {
   m = true;
   $('.count').each(function () {
	  var $this = $(this);
	  jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
	    duration: 1500,
	    easing: 'swing',
	    step: function () {
	      $this.text(this.Counter.toFixed(1));
	    }
	  });
	});
	$('.count1').each(function () {
	  var $this = $(this);
	  jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
	    duration: 1500,
	    easing: 'swing',
	    step: function () {
	      $this.text(Math.ceil(this.Counter));
	    }
	  });
	});
  }
});