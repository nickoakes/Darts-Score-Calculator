/*
	Darts Score Calculator
	app.js
*/

$(document).ready(function(){
	
	//name entry
	
	var p1Name = prompt("Player 1 please enter your name:");
	var p2Name = prompt("Player 2 please enter your name:");

//dynamically set button values using names entered

	function setNames(){
	$('#p1ScoreName').text(p1Name);
	$('#p2ScoreName').text(p2Name);
	document.getElementById('p1Throw').setAttribute("value", p1Name + "'s throw");
	document.getElementById('p2Throw').setAttribute("value", p2Name + "'s throw");
	}
	setNames();
	
	//dart logging
		
	$("td").on("click", function(){
		clickedDart = $(this).attr("data");
		clickedDart = parseInt(clickedDart);

//player 1 current score over fifty

			if($('#p1Score').is('.highlight') && clickedDart && ((document.getElementById('p1Score').innerHTML - clickedDart) > 50)){
				p1Current = document.getElementById('p1Score').innerHTML;
				p1Current = parseInt(p1Current);
				document.getElementById('p1Score').innerHTML = p1Current - clickedDart;
			}

//player 1 on a double

			else if($('#p1Score').is('.highlight') && clickedDart && 2 < (document.getElementById('p1Score').innerHTML - clickedDart) && (document.getElementById('p1Score').innerHTML - clickedDart) <= 49 && !((document.getElementById("p1Score").innerHTML - clickedDart) % 2)) {
				p1Current = document.getElementById('p1Score').innerHTML;
				p1Current = parseInt(p1Current);
				document.getElementById('p1Score').innerHTML = p1Current - clickedDart;
				document.getElementById("p1Double").innerHTML = "x" + parseInt(document.getElementById("p1Score").innerHTML)/2;
				$('#p1Score').hide();
				$('#p1Double').show();
			}

//player 1 on bull checkout

			else if((document.getElementById('p1Score').innerHTML - clickedDart) === 50){
				p1Current = document.getElementById('p1Score').innerHTML;
				p1Current = parseInt(p1Current);
				document.getElementById('p1Score').innerHTML = p1Current - clickedDart;
				document.getElementById("p1Double").innerHTML = "Bull";
				$('#p1Score').hide();
				$('#p1Double').show();
			}

//player 1 current score under 50, but not a double

			else if($('#p1Score').is('.highlight') && clickedDart && 2 < (document.getElementById('p1Score').innerHTML - clickedDart) && (document.getElementById('p1Score').innerHTML - clickedDart) <= 49 && ((document.getElementById("p1Score").innerHTML - clickedDart) % 2)){
				p1Current = document.getElementById('p1Score').innerHTML;
				p1Current = parseInt(p1Current);
				document.getElementById('p1Score').innerHTML = p1Current - clickedDart;
			}

//player 2 current score over 50

			else if($('#p2Score').is('.highlight') && clickedDart && ((document.getElementById('p2Score').innerHTML - clickedDart) > 50)){
				p2Current = document.getElementById('p2Score').innerHTML;
				p2Current = parseInt(p2Current);
				document.getElementById('p2Score').innerHTML = p2Current - clickedDart;
			} 

//player 2 on a double

			else if($('#p2Score').is('.highlight') && clickedDart && 2 < (document.getElementById('p2Score').innerHTML - clickedDart) && (document.getElementById('p2Score').innerHTML - clickedDart) <= 49 && !((document.getElementById("p2Score").innerHTML - clickedDart) % 2)) {
				p2Current = document.getElementById('p2Score').innerHTML;
				p2Current = parseInt(p2Current);
				document.getElementById('p2Score').innerHTML = p2Current - clickedDart;
				document.getElementById("p2Double").innerHTML = "x" + parseInt(document.getElementById("p2Score").innerHTML)/2;
				$('#p2Score').hide();
				$('#p2Double').show();
			}

//player 2 on bull checkout

			else if((document.getElementById('p2Score').innerHTML - clickedDart) === 50){
				p2Current = document.getElementById('p2Score').innerHTML;
				p2Current = parseInt(p2Current);
				document.getElementById('p2Score').innerHTML = p2Current - clickedDart;
				document.getElementById("p2Double").innerHTML = "Bull";
				$('#p2Score').hide();
				$('#p2Double').show();
			}

//player 2 current score under 50, but not a double

			else if($('#p2Score').is('.highlight') && clickedDart && 2 < (document.getElementById('p2Score').innerHTML - clickedDart) && (document.getElementById('p2Score').innerHTML - clickedDart) <= 49 && ((document.getElementById("p2Score").innerHTML - clickedDart) % 2)){
				p2Current = document.getElementById('p2Score').innerHTML;
				p2Current = parseInt(p2Current);
				document.getElementById('p2Score').innerHTML = p2Current - clickedDart;
			}

//player's dart greater than current score, leading them to bust

			else if($('#p1Score').is('.highlight') && clickedDart && (document.getElementById('p1Score').innerHTML - clickedDart) < 2 && (document.getElementById('p1Score').innerHTML - clickedDart) != 0) {
				alert("Bust!");
			}
			else if($('#p2Score').is('.highlight') && clickedDart && (document.getElementById('p2Score').innerHTML - clickedDart) < 2 && (document.getElementById('p2Score').innerHTML - clickedDart) != 0) {
				alert("Bust!");
			}

//player successfully hits double and checks out

			else if((document.getElementById('p1Score').innerHTML - clickedDart) === 0) {
				alert("Game " + p1Name + "!");
				$('#p1Score').text(0);
				$('#p1Double').hide();
				$('#p1Score').show();
				p1Win();
			}
			else if((document.getElementById('p2Score').innerHTML - clickedDart) === 0) {
				alert("Game " + p2Name + "!");
				$('#p2Score').text(0);
				$('#p2Double').hide();
				$('#p2Score').show();
				p2Win();
			}
	});
	
	//general buttons
	
	function resetScores(){
		document.getElementById('p1Score').innerHTML = "501";
		document.getElementById('p2Score').innerHTML = "501";
	}
	//game counter
	
	function p1Win(){
		document.getElementById('p1Games').innerHTML ++;
		resetScores();
	}
	
	function p2Win(){
		document.getElementById('p2Games').innerHTML ++;
		resetScores();
	}
	
	function newMatch(){
		resetScores();
		document.getElementById('p1Games').innerHTML = "";
		document.getElementById('p2Games').innerHTML = ""
	}
	
	$('#newGame').on("click", resetScores);
	
	$('#newMatch').on("click", newMatch);
	
	//player highlight
	
	$('#p1Throw').on("click", function(){
		$('.highlight').removeClass('highlight');
		$('#p1Score').addClass('highlight');
		$('#winmau').hide(1);
		$('#winmau').show(1);
		$('#winmau').addClass('rubberBand');
	});
	
	$('#p2Throw').on("click", function() {
		$('.highlight').removeClass('highlight');
		$('#p2Score').addClass('highlight');
		$('#winmau').removeClass('rubberBand');
		$('#winmau').hide(1);
		$('#winmau').show(1);
		$('#winmau').addClass('rubberBand');
	});
	
	//animations
	
	$('#board td').on("mouseenter", function(){
		$(this).animate({fontSize: "23px", opacity: "1.0"}, 200);
	});
	
	$('#board td').on("mouseleave", function(){
		$(this).animate({fontSize: "20px", opacity: "0.8"}, 200);
	});
	
//show Bully when mouse hovers over bull

	$('.bull').on("mouseenter", function(){
		$('#winmau').hide(1)
		$('#bully').show(200);
	});
	
	$('.bull').on("mouseleave", function(){
		$('#bully').hide(1);
		$('#winmau').show(200);
	});
	
//show Phil Taylor when mouse hovers over treble 20

	$('#t20').on('mouseenter', function(){
		$('#winmau').hide(1);
		$('#phil').show(200);
	});
	
	$('#t20').on("mouseleave", function(){
		$('#phil').hide(1);
		$('#winmau').show(200);
	});

//show dyson vaccuum when a player throws 'tidy' darts, causing their current score to be a multiple of 100
	
	$('td').on("click", function(){if(!(document.getElementById('p1Score').innerHTML % 100) || !(document.getElementById('p2Score').innerHTML % 100)){
		$('#winmau').hide(1);
		$('#dyson').show(200);
	} else {
		$('#dyson').hide(1);
		$('#winmau').show(200);
	}
	});
	
//reveal link to checkout chart when a player's current score is at or below the maximum 3-dart checkout of 170

	$('td').on("click", function(){
	if (document.getElementById('p1Score').innerHTML < 171 || document.getElementById('p2Score').innerHTML < 171){
	$('#checkout').show(1);
	setTimeout(function(){$('#checkoutCell').addClass('rubberBand')}, 500);
	} else {
	$('#checkout').hide(1)
	}
	});
	
	//end of document ready function		
	});
