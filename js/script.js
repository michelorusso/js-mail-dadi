// Mail
// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

// Chiediamo all'utente la sua email
var emailUtente = prompt("Dimmi la tua emai...")
console.log('email utente: ', emailUtente);

// Creaiamo una lista di email, o meglio una array
var email = ["pinco@gmail.com", "tizio@live.com", "esposito@live.com", "caio@live.com", "sempronio@gmail.com"]
console.log(email);


// controlliamo se l'email sia nella lista "degli invitati"
// Stampiamo il messaggio in base al risultato ottenuto
if( emailUtente == email[1] ) {
    document.getElementById('email').innerHTML = emailUtente + ': Sei il Benvenuto!';
} else if( emailUtente == email[2] ){
    document.getElementById('email').innerHTML = emailUtente + ': Sei il Benvenuto!';
} else if( emailUtente == email[3] ){
    document.getElementById('email').innerHTML = emailUtente + ': Sei il Benvenuto!';
} else if( emailUtente == email[4] ){
    document.getElementById('email').innerHTML = emailUtente + ': Sei il Benvenuto!';
} else if( emailUtente == email[5] ){
    document.getElementById('email').innerHTML = emailUtente + ': Sei il Benvenuto!';
} else {
    alert(emailUtente + ": Non sei il Benvenuto!");
}


