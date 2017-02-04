var guessedLetters = [];
var lifeRemaining;
var wordBank = ["Ravishanker", "Shivkumar", "Zakirhussain"];
var currentWord;
var foundCount;  //This keeps track of how many letters are already found in current word
var currentDisplayWord = [""];


//If the returned array is empty, the guessed letter is not present in the word
function checkWordForLetter(word, letter)
{
	console.log("Checking Word: " + word + " for letter " + letter);

	var positionsFound = []; // This contains the positions in the word where letter is found
	var starray = word.split(''); //This is the letter array of word
	for(var i=0; i<starray.length; i++)
	{
		if(starray[i]===letter)
		{
			console.log("Match found at position: " + i);
			positionsFound.push(i);
		}
	}
	return 	positionsFound;
}


function isLetterAlreadyGuessed(letter)
{ 
	for(i=0;  i<guessedLetters.length;  i++)
	{
		if (letter === guessedLetters[i])
		{
			return true;
		}
	}
	return false;
}

document.onkeyup=function(event){
	var userGuess = event.key;
	console.log("User pressed: " + userGuess);


    
	if(isLetterAlreadyGuessed(userGuess)===true)
	{
		
		console.log("Letter already used: " + userGuess);
		document.getElementById("alreadyGuessed").innerHTML = "Letter already guessed: " + userGuess;
		return;			
	}

		document.getElementById("alreadyGuessed").innerHTML = "";
	    document.getElementById("guessletter").innerHTML = "You Guessed: " + userGuess;
    


	
	guessedLetters.push(userGuess); 
    
    
	var positionsFound = checkWordForLetter(currentWord, userGuess);

	
	var totalCharsFound = positionsFound.length;
	if(totalCharsFound===0)
	{
		lifeRemaining--; //Wrong Guess
		console.log("Oops! wrong guess");
		document.getElementById("guessesRemaining").innerHTML = "You have "+ lifeRemaining + " guesses left ";

		
		if(lifeRemaining === 0)
		{
			console.log(" You lose!");
			document.getElementById("lose").innerHTML ="you lose" ;
			restart();
		}
	}
	else
	{
		foundCount += totalCharsFound;
		for(i=0; i<totalCharsFound; i++)
		{
			currentDisplayWord[positionsFound[i]] = userGuess;
		}			

		if(foundCount === currentWord.length)
		{
			console.log(" You win!");
			document.getElementById("win").innerHTML = "you win" + foundCount;
			restart();	
		}	
	}
	
	console.log("Current status of the revealed word is: " + currentDisplayWord.toString());

	document.getElementById("currentWord").innerHTML = currentDisplayWord;
}


function restart(){
	//Reset everything when user exausts all his/her guesses
	console.log("I am restarting");
	guessedLetters = [];
	lifeRemaining = 5;
	currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];

	currentDisplayWord = [];
	for(i=0; i<currentWord.length; ++i)
	{
		currentDisplayWord.push('-');
	}
	

	console.log("Current status of the revealed word is: " + currentDisplayWord);
	console.log("Current word is: " + currentWord);	
	document.getElementById("restart").innerHTML = "Restart" + guessedLetters;

	foundCount = 0;
}

