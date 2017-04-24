$(document).ready(function(){

	var conteiner = $('.conteiner').outerWidth(); 

	if (conteiner >= 481) {

	$('.button2').hover(
		function() {
			$(this).css('background-color', '#49cbcd');
			$('.active1').css('background-color', '#49cbcd');
		
	}, function() {
				$(this).css('background-color', '#788492');
			$('.active1').css('background-color', '#485460');
	}
	);
    

    $('.button3').hover(
		function() {
			$(this).css('background-color', '#49cbcd');
			$('.active2').css('background-color', '#49cbcd');
		
	}, function() {
				$(this).css('background-color', '#788492');
			$('.active2').css('background-color', '#485460');
	}
	);

	$('.button4').hover(
		function() {
			$(this).css('background-color', '#49cbcd');
			$('.active3').css('background-color', '#49cbcd');
		
	}, function() {
				$(this).css('background-color', '#788492');
			$('.active3').css('background-color', '#485460');
	}
	);
}
});
