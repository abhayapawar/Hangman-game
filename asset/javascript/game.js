document.onkeyup=function(event){

	var userGuess =event.key;
	var win=0;

	alart("Letters already Guessed" + userGuess);
}
		
		var availableLetters = "abcdefghijklmnopqrstuvwxyz";
        var lives = 5;
       	var words = ["Ravishanker", "shivkumar",  "bhimsenjoshi"];
        var messages = {
        	 win: 0,
            lose: 0,
            guessed: ' already guessed, please try again...',
        };
        var starry = words[1].split('');
        var i = 0;

		starry.forEach(function(element){
	
			if(element === "s"){
		//
		console.log(i);
	}
})
	i++;
         var lettersGuessed;
         var lettersMatched;

         lettersGuessed = lettersMatched = '';
        var numLettersMatched = 0;
        

        var currentWord = words[Math.floor(Math.random() * words.length)];
		var  guessInput = document.getElementById("letter");


		function letterChecker(x){

	var muscian=["r","a","v","i","s","h","n","k","u","m","b","i","e","j","o"];


		for( var i=0; i< musican.length; i++){
			if(x === muscian[i]){
				var isletter= true;
				win++;
			}

				if(isletter){
					console.log(x + "letter in the word");
				}
		}

}
//letterChecker(a);

		var Game = function(lives, letter, guesses){	
	    this.lives = lives;
	    this.letter = letter;
	    this.guesses = guesses;
	    this.letter_letters = new Set(this.letter);
	    this.correct_guesses = intersection(this.guesses, this.letter_letters);
	    this.incorrect_guesses = difference(this.guesses, this.letter_letters);	
	    this.is_dead = this.lives <= this.incorrect_guesses.size;
	    this.has_won = this.correct_guesses.size == this.letter_letters.size;
        
	   this.addGuess = function(letter1){
	        return Game(this.lives, this.letter,
		    this.guesses.add(letter1));
	    }
	    return this;	
    }
     	//var output = document.getElementById("output");
       	//var man = document.getElementById("man");
        //var guessInput = document.getElementById("letter");

        //man.innerHTML = ('You have ' + lives + ' lives remaining');
        //output.innerHTML = '';

        //document.getElementById("letter").value = '';

       
        //var guessButton = document.getElementById("guess");
       // var guessInput.style.display = 'inline';
        //var guessButton.style.display = 'inline';