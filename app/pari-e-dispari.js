console.log('js-paliedispari')

// 2) Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

// Creo una variabile in cui chiedo all'utente di scegliere pari o dispari
const userChoice = prompt('Scegli pari o dispari')
console.log(userChoice)  // string

if (userChoice !== 'pari', 'dispari') {
    alert('Inserire il valore corretto!')  // messaggio di errore generico se non si inserisce pari o dispari
}

// creo una variabile in cui chiedo all'utente di scegliere un numero da 1 a 5
const userNumber = prompt('Scegli un numero da 1 a 5')
console.log(userNumber)  // number

if (typeof userNumber !== 'number') {
    alert('Inserire un numero!')   // messaggio di errore se non si inserisce un numero
}

// con una funzione genero un numero da 1 a 5 per il computer

// con una funzione faccio la somma dei numeri e stabilisco se la somma è pari o dispari, e dichiaro quindi il vincitore