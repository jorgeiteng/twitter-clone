
$(function(){

	// Step 1
	$('textarea').on('focus',function() {
	var that=$(this);
	that.css('height', '7em');
	$('#tweet-controls').show();

	});

	$('tweet-content').on('blur',function() {
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

    //Step 5 - Onclick Button
    $('#tweet-submit').click(function() {
    	var name=$('#name').html();
    	var text= $('textarea').val();
    	var avatar= "img/alagoon.jpg";
    	console.log(name +" -> "+ text);
    	sendTweet(name, avatar, text);

    	//Clear Text Area
    });

});

function updateCountdown() {
    // 140 is the max message length
    var remaining = 140 - $('textarea').val().length;
    console.log(remaining);
    $('#char-count').text(remaining);

    // Once it hits 10 character or less the count should turn red

    if (remaining <= 10){
    	$('#char-count').css('color','red');
    } else {
    	$('#char-count').css('color','black');
    }

	//Disable Button

    if ((remaining < 0)||(remaining >= 140)) {
			$('#tweet-submit').attr('disabled','disabled');
		} else {
			$('#tweet-submit').removeAttr('disabled');
		}

    }
    //Comment

function sendTweet(name, avatar_src, text){
	var tweet=document.createElement('div');
	var profile_content=document.createElement('div');
	var avatar=document.createElement('img');
	var full_name=document.createElement('span');
	var username=document.createElement('span');
	var tweet_text=document.createElement('p');
	var tweet_actions=document.createElement('div');

	$(tweet).addClass("tweet");
	$(profile_content).addClass("content");
				
	$(avatar).addClass("avatar").attr('src',avatar_src).appendTo(profile_content);
	$(full_name).text(name).appendTo(profile_content);
	$(username).addClass("username").text(" @"+name).appendTo(profile_content);

	$(profile_content).appendTo(tweet);

	$(tweet_text).addClass("tweet-text").text(text).appendTo(tweet);
	$(tweet_actions).addClass("tweet-actions").appendTo(tweet);

	//Send to the Stream
	$('#stream').prepend(tweet);
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

