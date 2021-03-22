// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Generiamo numero random da 1 a 6 sia per l'utente che per il computer
var dadoUtente = Math.floor(Math.random() * 7);
document.getElementById('dadoutente').innerHTML = 'Il tuo numero è : ' + dadoUtente;
console.log(dadoUtente);

var dadoComputer = Math.floor(Math.random() * 7);
document.getElementById('dadocomputer').innerHTML = 'Il numero del tuo avversario è : ' + dadoComputer;
console.log(dadoComputer);

// Stabiliamo il vincitore in base al punteggio più alto
if( dadoUtente > dadoComputer) {
    document.getElementById('vincitore').innerHTML = 'Hai vinto!';
} else if ( dadoUtente < dadoComputer) {
    document.getElementById('vincitore').innerHTML = 'Hai perso!';
} else {
    document.getElementById('vincitore').innerHTML = 'Pareggio!';
}