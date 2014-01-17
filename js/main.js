
$(function(){

	// Step 1
	$('textarea').on('focus',function() {
	var that=$(this);
	that.css('height', that.height()*3);
	$('#tweet-controls').show();

	});

	$('textarea').on('blur',function() {
	var that=$(this);
	that.css('height', '2.5em');
	$('#tweet-controls').hide();

	}); 

	//Step 2
	//$('textarea').click(function() {
	//	$(this).css('height','5em');
	//	$('#tweet-submit').css('visibility','visible');
	//	$('#char-count').css('visibility','visible');
	//});

	//STEP 3: As the user types the character count should decrease. 
	updateCountdown();
    $('textarea').change(updateCountdown);
    $('textarea').keyup(updateCountdown);

});

function updateCountdown() {
    // 140 is the max message length
    var remaining = 140 - $('textarea').val().length;
    console.log(remaining);
    $('#char-count').text(remaining);

    // Once it hits 10 character or less the count should turn red

    if (remaining <= 10){
		$('#char-count').css('color','red');
		if (remaining <= 0) {
			//Disable Button
			//$('#tweet-submit').css('background-color','gray');
			$('#tweet-submit').hide();
		} else {
			$('#tweet-submit').show();
		}
    } else {
    	$('#char-count').css('color','black');
    }

}


/*
$(function(){
	$('textarea').click(function() {
	alert("you click");
	});
});

focus and blur
.on (focus, ....)

	$('textarea').on('focus'function() {
	alert("you click");

	twee controls show
	});


	disble

	attr disabled disabled
*/

