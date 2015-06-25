/*
    Jessica J. Hernandez
    ID: 0004631401
    June 25, 2015 - The Project
    Website Interaction & Animation | 201506-01
    Full Sail University
*/


// INITIALIZED VARIABLES USED FOR THE TOP FLAVORS CHART
var barSpacing = 0;
var barWidth = 0;
var chartHeight = 0;
var chartHeightArea = 0;
var chartScale = 0;
var maxValue = 0;
var highestYlabel = 0;
var valueMultiplier = 0;


// MAIN DOCUMENT READY FUNTION
$(document).ready(function() {
    
    // HEADER SECTION
    // FIXED NAVIGATION BAR
    $(window).scroll(function() {
        if( $(window).scrollTop() > 128 ) {
            $("header").addClass("scrolled-header");
            $("#logo").addClass("scrolled-logo");
            $("nav").addClass("scrolled-nav");
        }
        else if( $(window).scrollTop() < 128 ){
            $("header").removeClass("scrolled-header");
            $("#logo").removeClass("scrolled-logo");
            $("nav").removeClass("scrolled-nav");
        }
    });
    
    
    // AUDIO
    $('#music').click(function(){
        if (document.getElementById('audio').paused == false) {
            document.getElementById('audio').pause();
            $('#music').css('background-image', 'url(images/speaker_off.png)');
        } else {
            document.getElementById('audio').play();
            $('#music').css('background-image', 'url(images/speaker_on.png)');
        }
    });
    

    // MEET THE SWIRLS SECTION
    // FANCYBOX USE FOR THE IMAGE GALLERY
    // DERIVED FROM FANCYBOX LECTURE VIDEOS
	$(".fancybox").fancybox();
    
    
    // LOCATION SECTION
	// WHEN A DOT IS CLICKED
    // DERIVED FROM MAP DATA VISUALIZATION VIDEOS
	$('a.dot').click(function(){

		$('a.dot').removeClass('selected');
		$(this).addClass('selected');

		var city = '.location_detail#' + $(this).attr('city');
		var htmlCode = $(city).html();
        
        console.log("city: " + city);
        console.log("city html: " + htmlCode);

		$('.detail_container').fadeOut(500, function(){
			$('.detail_container .location_detail').html(htmlCode);
			$('.detail_container').fadeIn(500);
		});

	});
    
    
    // TOP FLAVORS SECTION
    // DERIVED FROM DATA VISUALIZATION LECTURE VIDEOS
    window.chartHeight = Number($('.chart-area').height());
    window.barWidth = $('.chart-area .chart-bar').width();
    window.highestYlabel = Number($('.chart-y-axis p').first().html());
    window.chartHeightArea = window.chartHeight - Number($('p.axis-value').first().height());
    window.chartScale = chartHeightArea / window.highestYlabel;
    window.barSpacing = Number($('.chart-area').attr('bar-spacing'));
    positionBars();

    function positionBars(){
        $('.chart-area .chart-bar').each(function(index){

            var barPosition = (window.barWidth*index)+(index*barSpacing)+barSpacing;
            $(this).css('left',barPosition+'px');
            $(this).html('<p>'+$(this).attr('bar-value')+'</p>');
            $('.chart-x-axis').append('<p style="left:'+(barPosition-(window.barWidth/2))+'px;">'+$(this).attr('label')+'</p>');

            var barValue = Number($(this).attr('bar-value'));
            if(barValue > window.maxValue){
                window.maxValue = barValue;
                window.valueMultiplier = window.maxValue / window.highestYlabel;
            }
        });
        
        $(window).scroll(function() {
            if( $(window).scrollTop() > 2180 ) {
                animateChart();
            }
        });
    }

    function animateChart(){

        $('.chart-area .chart-bar').each(function(index){
            var revisedValue = Number($(this).attr('bar-value'))*window.chartScale;
            var newDelay = 120*index;
            $(this).delay(newDelay).animate({height:revisedValue},1000, function(){
                $(this).children('p').delay(400).fadeIn(150);
            });
        });

        /* debug */ $('.valueMultiplier').html('valueMultiplier = '+window.valueMultiplier);
        /* debug */ $('.highestYlabel').html('highestYlabel = '+highestYlabel);
        /* debug */ $('.maxValue').html('maxValue = ' + window.maxValue);
        /* debug */ $('.chartHeight').html('chartHeight = '+window.chartHeight);
        /* debug */ $('.chartHeightArea').html('chartHeightArea = '+window.chartHeightArea);
        /* debug */ $('.chartScale').html('chartScale = '+window.chartScale);
    }
    
    
    // CONTACT/FOOTER SECTION
    // CREATE ALERT ON FORM SUBMISSION
    $('#submit-btn').click(function(e){
        alert("Thank you for submitting your feedback!\nWe look forward to serving you again soon!");
    });
    
});





