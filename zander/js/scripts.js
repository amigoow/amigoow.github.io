// Empty JS for your own code to be here
// $('.play').click(function() {
//   video = '<iframe width="100%" height="281" frameborder="0" src="' + $('img').attr('data-video') + '"></iframe>';
//   $('.video').replaceWith(video);
// });

var totalSteps = 4;

$('#program-carousel').carousel();
$('#program-carousel').on('slide.bs.carousel', function (e) {
  
  //update progress
  var step = $(e.relatedTarget).data('step');
  var percent = (parseInt(step) / totalSteps) * 100;
  
  $('.progress-bar').css({width: percent + '%'});
  $('.progress-bar').text("Step " + step);
  
})