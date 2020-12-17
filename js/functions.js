const printMessage = function(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

const clearMessages = function(){
	document.getElementById('messages').innerHTML = '';
}

const printResult = function(msg) {
	document.getElementById('result').innerHTML = msg;
}


const playGame = function(argMove){ 
	clearMessages();

	const randomPc = function(){
		const randomFraction = Math.random();
		const calculation = randomFraction * 3 + 1;
		const roundNumber = Math.floor(calculation);
		return roundNumber;
	} 

	const getMoveName = function(argMoveId){
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

	const displayResult = function(argComputerMove, argPlayerMove){
		//console.log('moves:', argComputerMove, argPlayerMove);
		printMessage('Computer: ' + argComputerMove + ' | Beata: ' + argPlayerMove );

		if (argComputerMove == 'kamień' && argPlayerMove == 'papier' || argComputerMove == 'nożyce' && argPlayerMove == 'kamień' || argComputerMove == 'papier' && argPlayerMove == 'nożyce' ) {
			printMessage('Beata wygrała');
			sumBeataWinner++;

		} else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce' || argComputerMove == 'papier' && argPlayerMove == 'kamień' || argComputerMove == 'nożyce' && argPlayerMove == 'papier' ) {
			printMessage('Computer wins');
			sumComputerWinner++;

		} else if (argPlayerMove == 'nieznany ruch') {
			printMessage ('Beata oszukuje xd');

		} else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce' || argComputerMove == 'papier' && argPlayerMove == 'papier' || argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
			printMessage('Remis');
		}
		
		if (sumComputerWinner >= 3 || sumBeataWinner >= 3){
			printResult('<b>end game</b> <br> Computer: ' +sumComputerWinner + ' Beata: ' + sumBeataWinner);
		} else{
			printResult('Computer: ' +sumComputerWinner + ' Beata: ' + sumBeataWinner);
		}

	}

	const computerMove = getMoveName( randomPc() );
	const playerMove = getMoveName(argMove);
	
	//console.log('ruch komputera: '+computerMove);
	//console.log('ruch Beaty: '+playerMove);

	return displayResult(computerMove, playerMove);
}