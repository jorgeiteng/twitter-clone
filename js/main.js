
$(function(){

	// Step 1
	$('#tweet-submit').css('visibility','hidden');
	$('#char-count').css('visibility','hidden');

	//Step 2
	$('textarea').click(function() {
		$(this).css('height','5em');
		$('#tweet-submit').css('visibility','visible');
		$('#char-count').css('visibility','visible');
	});

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
			//$('#tweet-submit').css('background-color','gray');}
			$('#tweet-submit').css('visibility','hidden');}
		else {
			$('#tweet-submit').css('visibility','visible');
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
*/