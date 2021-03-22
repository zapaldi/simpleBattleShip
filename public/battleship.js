	var location1 = Math.floor( Math.random() * 5 );
        var location2 = location1 + 1;
        var location3 = location1 + 2;

	var guess;
	var hits = 0;
	var guesses = 0;

        var isSunk = 0;

	while ( isSunk == false ) {

	   guess = prompt("Ready, aim, fire! (enter a number between 0-6):")
	   if ( guess < 0 || guess > 6 ) {
	      alert ("You entered: " + guess)
              alert ( "Invalid Entry. Please enter a number between 0 and 6" )
	   } else {
              guesses = guesses + 1;

              if ( guess == location1 || guess == location2 || guess == location3) {
                 alert ( "Direct Hit!" )
		 hits = hits + 1;
                 if ( hits == 3 ) {
		      isSunk = 1;
		      alert ( "You sunk my battleship")
	         }
	      }

	   }
	}
        //end while loop

