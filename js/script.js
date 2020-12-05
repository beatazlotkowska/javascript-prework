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

	if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
		printMessage('Beata wygrała');

	} else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
		printMessage('Beata wygrała');

	} else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
		printMessage('Beata wygrała');

	} else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
		printMessage('Computer wins');

	} else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
		printMessage('Computer wins');

	} else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
		printMessage('Computer wins');

	} else if (argComputerMove == 'kamień' && argPlayerMove == 'kamień') {
		printMessage('Remis');

	} else if (argComputerMove == 'papier' && argPlayerMove == 'papier') {
		printMessage('Remis');

	} else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {
		printMessage('Remis');

	} else if (argPlayerMove == 'nieznany ruch') {
		printMessage ('Beata oszukuje xd');

	} else {
		printMessage ('error');

	}


}


let randomFraction = Math.random();
let calculation = randomFraction * 3 + 1;
let roundNumber = Math.floor(calculation);

let computerMove = getMoveName(roundNumber);


let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
let playerMove = getMoveName(playerInput);

/*if (roundNumber == 1) {
	computerMove = 'kamień';

} else if (roundNumber == 2) {
	computerMove = 'papier';

} else if (roundNumber == 3) {
	computerMove = 'nożyce';

} else {
	computerMove = 'błąd';
}



if (playerInput == 1) {
	playerMove = 'kamień';

} else if (playerInput == 2) {
	playerMove = 'papier';

} else if (playerInput == 3) {
	playerMove = 'nożyce';

} else {
	playerMove = 'nieznany ruch';
}
*/

displayResult(computerMove, playerMove);


console.log('ruch komputera '+computerMove);
console.log('ruch Beaty '+playerMove);
