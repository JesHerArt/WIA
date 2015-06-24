/*
    Jessica J. Hernandez
    ID: 0004631401
    June 25, 2015 - The Project
    Website Interaction & Animation | 201506-01
    Full Sail University
*/

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
            $('#music').css('background-image', 'url(../images/speaker_off.png)');
            console.log('music paused');
            
        } else {
            
            document.getElementById('audio').play();
            $('#music').css('background-image', 'url(../images/speaker_on.png)');
            console.log('music playing');
            
        }
    });
    

    // MEET THE SWIRLS SECTION
    // FANCYBOX USE FOR THE IMAGE GALLERY
	$(".fancybox").fancybox();
    
    
    // LOCATION SECTION
	// WHEN A DOT IS CLICKED
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

    
    // CREATE ALERT ON FORM SUBMISSION
    $('#submit-btn').click(function(e){
        alert("Thank you for submitting your feedback!\nWe look forward to serving you again soon!");
    });
    
    
    
    
});
