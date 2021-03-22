	var location1 = 4;
	var location2 = 5;
	var location3 = 6;

	var guess;
	var hits = 0;
	var guesses = 0;

        var isSunk = 0;

	while ( isSunk == false ) {
	   guess = prompt("Ready, aim, fire! (enter a number between 0-6):")
	   if ( guess < 0 || guess > 6 ) {
	      alert ("You entered: " )
              alert ( "Invalid Entry. Please enter a number between 0 and 6" )
	   }
	   else {
              guesses = guesses + 1;
	      alert ("You entered: " )
              alert ( "You have used " + " guesses." )
	   }
	}

