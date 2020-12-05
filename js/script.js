let randomFraction = Math.random();
let calculation = randomFraction * 3 + 1;
let roundNumber = Math.floor(calculation);


let computerMove = 'nieznany ruch';
let playerMove = 'nieznany ruch';
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

if (roundNumber == 1) {
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


if (computerMove == 'kamień' && playerMove == 'papier') {
	printMessage('Beata wygrała');

} else if (computerMove == 'nożyce' && playerMove == 'kamień') {
	printMessage('Beata wygrała');

} else if (computerMove == 'papier' && playerMove == 'nożyce') {
	printMessage('Beata wygrała');

} else if (computerMove == 'kamień' && playerMove == 'nożyce') {
	printMessage('Computer wins');

} else if (computerMove == 'papier' && playerMove == 'kamień') {
	printMessage('Computer wins');

} else if (computerMove == 'nożyce' && playerMove == 'papier') {
	printMessage('Computer wins');

} else if (computerMove == 'kamień' && playerMove == 'kamień') {
	printMessage('Remis');

} else if (computerMove == 'papier' && playerMove == 'papier') {
	printMessage('Remis');

} else if (computerMove == 'nożyce' && playerMove == 'nożyce') {
	printMessage('Remis');

} else if (playerMove == 'nieznany ruch') {
	printMessage ('Beata oszukuje xd');

} else {
	printMessage ('error');

}


console.log('ruch komputera '+computerMove);
console.log('ruch Beaty '+playerMove);
