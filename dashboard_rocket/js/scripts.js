// SET THE VALUE HERE
const MAX_ROCKET_LIMIT = 200000000;

var s = Snap("#RocketWrapper");

var rect = s.select('rect.clipping-rect');
var counterText = s.select('#counter-value');
var marker = s.select('#rocket-marker');
var maxLimit = s.select('#max-limit');
maxLimit.attr({ text: numeral(MAX_ROCKET_LIMIT).format('0,0') });
// Snap.animate(0, MAX_ROCKET_LIMIT, function(value){
//     maxLimit.attr({ text: Math.round(value) })
// }, 1000);

var value = $("#fuel").val();

$("#fuel").bind('keyup change click', function (e) {
    if(this.value !== value) {
        value = this.value;
        console.log(value);

        if(value <= MAX_ROCKET_LIMIT && value >= 0){
              
            moveMarker(value);
            moveFuel(value);

            animateDigits(value);

        }else{
            alert("Range: 0 - " + MAX_ROCKET_LIMIT);
        }
    }       
});



function moveMarker(val){
    var calc = Math.round( (360/MAX_ROCKET_LIMIT) * val);

   
    
    var moveTo = 't0,' + '-' + calc;
    marker.animate( { 'transform' : moveTo },1500);
    counterText.animate( { 'transform' : moveTo }, 1500);
    
}
function moveFuel(val){
    var calc = Math.round( (450/MAX_ROCKET_LIMIT) * value);
    // CHANGE the values here by changing the if condition value and the value which is substracting the "calc" - please observe this pattern
    if(value <= 10000000){
        myY = 400 - calc;
    }else if(value <= 3000000){
        myY = 420 - calc;
    }else if(value <= 50000000){
        myY = 430 - calc;
    }else if(value <= 60000000){
        myY = 435 - calc;
    }else if(value <= 80000000){
        myY = 445 - calc;
    }else if(value <= 120000000){
        myY = 460 - calc;
    }else{
        myY = 475 - calc;    
    }
   
    rect.animate({y: myY} , 2000);
   
}

function animateDigits(value){
    Snap.animate(0, value, function (value) {
        counterText.attr({text: Math.round(value)});
    }, 1000);
}

var smoke = new Vivus('smoke-wrapper', {
        start: 'inViewport',
        type: 'delayed',
        duration: 300,
        delay: 200,
        animTimingFunction: Vivus.EASE,

    }, myCallback);
smoke.play();
function myCallback(){
    console.log(smoke);
    
    setInterval(function(){ smoke.reset(); console.log("hi"); smoke.play(); } , 10000);    
}

$(function(){
    $(".formatted-value").each(function(value){
        console.log($(this).text());
        var formatted_value = numeral($(this).text()).format('0,0');
        $(this).text(formatted_value);
    });
   

});


