console.log('js-paliedispari')

// 1) Palidroma
// Chiedere all’utente di inserire una parola, Creare una funzione per capire se la parola inserita è palindroma

// Chiedo all'utente di inserire una parola
const userWord = prompt('Inserire una parola')
// Stampo la parola dell'utente
console.log(userWord)

// Creo la funzione, che con un ciclo controlli le parole invertendole e restituisca true se è palindroma o false se non è palindroma
function isWordPali (word) {

    // Trasformo il valore della funzione in minuscolo, così che maiuscole e minuscole non interferiscano nel controllo della parola
    word = word.toLowerCase()

    // Creo una variabile che conterrà la parola invertita
    let newWord = ''

    // Creo il ciclo per invertire la parola
    for (let i = 0; i < word.length; i++) {
        const char = word.at(-i - 1) // Prendo l'ultimo carattere e lo aggiungo a newWord
        newWord += char
    }
    // Controllo se la parola originale è uguale alla parola invertita
    return word === newWord
}

// Do ad una variabile il risultato della funzione
const paliWord = isWordPali(userWord)

// Stampo il risultato booleano
console.log(paliWord)

// Stampo il risultato: se true, la parola è palindroma
if (paliWord) {
    console.log('La parola è palindroma')
} else {
    console.log('La parola non è palindroma')
}