$(document).ready(function() {
	$( "#ch1" ).click(function() {
	  $( "#ch1content" ).slideToggle("slow");
	  
	  $( "#ch2content").slideUp("slow");
	  $( "#ch3content").slideUp("slow");
	  $( "#ch4content").slideUp("slow");
	  $( "#ch5content").slideUp("slow");
	  $( "#ch6content").slideUp("slow");
	});

	$( "#ch2" ).click(function() {
	  $( "#ch2content" ).slideToggle("slow");

	  $( "#ch1content").slideUp("slow");
	  $( "#ch3content").slideUp("slow");
	  $( "#ch4content").slideUp("slow");
	  $( "#ch5content").slideUp("slow");
	  $( "#ch6content").slideUp("slow");
	});

	$( "#ch3" ).click(function() {
	  $( "#ch3content" ).slideToggle("slow");

	  $( "#ch1content").slideUp("slow");
	  $( "#ch2content").slideUp("slow");
	  $( "#ch4content").slideUp("slow");
	  $( "#ch5content").slideUp("slow");
	  $( "#ch6content").slideUp("slow");
	});

	$( "#ch4" ).click(function() {
	  $( "#ch4content" ).slideToggle("slow");

	  $( "#ch1content").slideUp("slow");
	  $( "#ch2content").slideUp("slow");
	  $( "#ch3content").slideUp("slow");
	  $( "#ch5content").slideUp("slow");
	  $( "#ch6content").slideUp("slow");
	});

	$( "#ch5" ).click(function() {
	  $( "#ch5content" ).slideToggle("slow");

	  $( "#ch1content").slideUp("slow");
	  $( "#ch2content").slideUp("slow");
	  $( "#ch3content").slideUp("slow");
	  $( "#ch4content").slideUp("slow");
	  $( "#ch6content").slideUp("slow");
	});

	$( "#ch6" ).click(function() {
	  $( "#ch6content" ).slideToggle("slow");

	  $( "#ch1content").slideUp("slow");
	  $( "#ch2content").slideUp("slow");
	  $( "#ch3content").slideUp("slow");
	  $( "#ch4content").slideUp("slow");
	  $( "#ch5content").slideUp("slow");
	});
});