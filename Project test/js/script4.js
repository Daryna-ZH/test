$(document).ready(function() {
		$(document).delegate('#menu', 'click', function(event){
			$(this).addClass('oppenned');
			event.stopPropagation();
		})
		$(document).delegate('body', 'click', function(event) {
			$('#menu').removeClass('oppenned');
		})
		$(document).delegate('.cls', 'click', function(event){
			$('#menu').removeClass('oppenned');
			event.stopPropagation();
		});
	});