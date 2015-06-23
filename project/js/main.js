/*
    Jessica J. Hernandez
    ID: 0004631401
    June 25, 2015 - The Project
    Website Interaction & Animation | 201506-01
    Full Sail University
*/

$(document).ready(function() {

    // MEET THE SWIRLS SECTION
    // Fancybox use for the image gallery
	$(".fancybox").fancybox();
    
    
    // LOCATION SECTION
	// When a dot is clicked
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
    
    
});
