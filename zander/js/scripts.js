// Empty JS for your own code to be here
// $('.play').click(function() {
//   video = '<iframe width="100%" height="281" frameborder="0" src="' + $('img').attr('data-video') + '"></iframe>';
//   $('.video').replaceWith(video);
// });

setTimeout(function(){
	var totalSteps = 4;

	$('#program-carousel').carousel();
	$('#program-carousel').on('slide.bs.carousel', function (e) {
	  
	  //update progress
	  var step = $(e.relatedTarget).data('step');
	  var percent = (parseInt(step) / totalSteps) * 100;
	  
	  $('.progress-bar').css({width: percent + '%'});
	  $('.progress-bar').text("Step " + step);
	  
	});

	var clock;

	$(document).ready(function () {



	    clock = $('.clock').FlipClock(10*60, {
	        clockFace: 'MinuteCounter',
	        countdown: true
	    });
	});

	$(".testimonials").iziModal({
	    history: false,
	    iframe : true,
	    fullscreen: true,
	    group: 'testimonials',
	    loop: true,
	    headerColor: '#29aeb1'
	});
	$(".top-header-modal").iziModal({
	    history: false,
	iframe : true,
	fullscreen: true,

	});
	$(".action-plan li").click(function(){
	  $(".action-plan li").removeClass("active");
	  $(this).addClass("active");
	});
}, 2000);

