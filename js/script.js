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
	playerMove = 'nie ma takiego ruchu xd';
}





console.log(roundNumber);
console.log(computerMove);
console.log(playerMove);
