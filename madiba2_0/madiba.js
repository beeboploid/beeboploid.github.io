window.onload = function (){

	$("#1to2").click(function() {
	    $('html, body').animate({
	        scrollLeft: $("#section2").position().left
	    }, 2000);
	    return false;
	});

	$("#1to3").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#section3").position().top
	    }, 2000);
	    return false;
	});

	$("#1to4").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#section4").position().top,
	        scrollLeft: $("#section4").position().left
	    }, 2000);
	    return false;
	});

	// <!-- NAV 2 -->

	$("#2to1").click(function() {
	    $('html, body').animate({
	        scrollLeft: $("#section1").position().left
	    }, 2000);
	    return false;
	});

	$("#2to4").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#section4").position().top
	    }, 2000);
	    return false;
	});

	$("#2to3").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#section3").position().top,
	        scrollLeft: $("#section3").position().left
	    }, 2000);
	    return false;
	});

	// <!-- NAV 3 -->

	$("#3to4").click(function() {
	    $('html, body').animate({
	        scrollLeft: $("#section4").position().left
	    }, 2000);
	    return false;
	});

	$("#3to1").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#section1").position().top
	    }, 2000);
	    return false;
	});

	$("#3to2").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#section2").position().top,
	        scrollLeft: $("#section2").position().left
	    }, 2000);
	    return false;
	});

	// <!-- NAV 4 -->

	$("#4to3").click(function() {
	    $('html, body').animate({
	        scrollLeft: $("#section3").position().left
	    }, 2000);
	    return false;
	});

	$("#4to2").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#section2").position().top
	    }, 2000);
	    return false;
	});

	$("#4to1").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#section1").position().top,
	        scrollLeft: $("#section1").position().left
	    }, 2000);
	    return false;
	});

	$("#01laser").click(function() {
		window.open("https://www.dropbox.com/s/jigdxlcal1j50rw/LC_Set01.zip?dl=0", "_blank", "toolbar=no, scrollbars=no, resizable=no, top=75, left=50, width=400, height=500");
	});

	$("#013D").click(function() {
		window.open("https://www.dropbox.com/s/99yny8vk1b3ubtr/3D_Set01.zip?dl=0", "_blank", "toolbar=no, scrollbars=no, resizable=no, top=75, left=50, width=400, height=500");
	});

	$("#02laser").click(function() {
		window.open("https://www.dropbox.com/s/jnyp5vhlv8ilrq8/LC_Set02.zip?dl=0", "_blank", "toolbar=no, scrollbars=no, resizable=no, top=75, left=50, width=400, height=500");
	});

	$("#023D").click(function() {
		window.open("https://www.dropbox.com/s/yy9fwv2xevhb4ao/3D_Set02.zip?dl=0", "_blank", "toolbar=no, scrollbars=no, resizable=yes, top=75, left=50, width=400, height=500");
	});

};