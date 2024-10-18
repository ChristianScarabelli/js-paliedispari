console.log('js-paliedispari')

// 2) Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
// Sommiamo i due numeri.
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

// Creo una variabile in cui chiedo all'utente di scegliere pari o dispari
const userChoice = prompt('Scegli pari o dispari')
console.log('Scelta dell\'utente:', userChoice)  // string

// Creo una variabile in cui chiedo all'utente di scegliere un numero da 1 a 5
const userNumber = parseInt(prompt('Scegli un numero da 1 a 5'))
console.log('Numero scelto dall\'utente:', userNumber)  // number

// Creo una funzione che genera un numero random da 1 a 5 
function randomComputerNumIntFromOneToFive (n) {
    return Math.floor(Math.random() * 5 + 1)
}

// Associo la funzione ad una variabile che associa quel numero al numero generato per il computer
const computerNum = randomComputerNumIntFromOneToFive()  
console.log('Numero generato per il computer:', computerNum)  // number

// Creo una variabile che faccia la somma del numero scelto dall'utente e del numero generato per il computer
const sumOfNumbers = userNumber + computerNum
console.log('Somma dei due numeri:', sumOfNumbers)  // Stampo la somma

// con una funzione stabilisco se la somma è pari o dispari
function isSumOfNumEven (number) {
    return number % 2 === 0  // Se il resto della divisione per 2 è 0, è pari
}

// Creo una variabile per confrontare la somma
const isSumEven = isSumOfNumEven(sumOfNumbers)


// Stampo il risultato e dichiaro il vincitore
if ((isSumEven && userChoice === 'pari') || (!isSumEven && userChoice === 'dispari')) {
    console.log('Hai vinto!');
} else {
    console.log('Ha vinto il computer!');
}
