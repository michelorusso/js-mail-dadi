// Mail
// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

// Chiediamo all'utente la sua email
var emailUtente = prompt("Dimmi la tua emai...")
console.log('email utente: ', emailUtente);

// Creaiamo una lista di email, o meglio una array
var email = ["pinco@gmail.com", "tizio@live.com", "esposito@live.com", "caio@live.com", "sempronio@gmail.com"]
console.log(email);

// controlliamo se l'email sia nella lista "degli invitati"
var inLista = false;

for( var i = 0 ; i < email.length; i++) {

    if( email[i] === emailUtente) {
        inLista = true;
    }
}

// Stampiamo il messaggio in base al risultato ottenuto
if(inLista) {
    document.getElementById('email').innerHTML = emailUtente + ': Benvenuto!';
} else {
    document.getElementById('email').innerHTML = emailUtente + ': Non sei il benvenuto!';
}