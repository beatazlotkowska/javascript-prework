function playGame (argMove){ 

	clearMessages();

	function getMoveName(argMoveId){
	  if(argMoveId == 1){
		return 'kamień';

	  } else if(argMoveId == 2){
		return 'papier';

	  } else if(argMoveId == 3){
		return 'nożyce';

	  }

	  printMessage('Nie znam ruchu o id ' + argMoveId + '.');
	  return 'nieznany ruch';
	}

	function displayResult(argComputerMove, argPlayerMove){
		console.log('moves:', argComputerMove, argPlayerMove);

		if (argComputerMove == 'kamień' && argPlayerMove == 'papier' || argComputerMove == 'nożyce' && argPlayerMove == 'kamień' || argComputerMove == 'papier' && argPlayerMove == 'nożyce' ) {
			printMessage('Beata wygrała');

		} else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce' || argComputerMove == 'papier' && argPlayerMove == 'kamień' || argComputerMove == 'nożyce' && argPlayerMove == 'papier' ) {
			printMessage('Computer wins');

		} else if (argPlayerMove == 'nieznany ruch') {
			printMessage ('Beata oszukuje xd');

		} else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce' || argComputerMove == 'papier' && argPlayerMove == 'papier' || argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
			printMessage('Remis');
		}

	}


	let randomFraction = Math.random();
	let calculation = randomFraction * 3 + 1;
	let roundNumber = Math.floor(calculation);

	let computerMove = getMoveName(roundNumber);

	let playerInput = argMove;
	let playerMove = getMoveName(playerInput);

	displayResult(computerMove, playerMove);


	console.log('ruch komputera '+computerMove);
	console.log('ruch Beaty '+playerMove);


}

document.getElementById('play-paper').addEventListener('click', function(){
  playGame(2);
});

document.getElementById('play-rock').addEventListener('click', function(){
  playGame(1);
});

document.getElementById('play-scissors').addEventListener('click', function(){
  playGame(3);
});
