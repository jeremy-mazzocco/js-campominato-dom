const selectContainer = document.querySelector('.container');
const selectContaPunti = document.getElementById('punteggio');
const arrayBombe = [];


// Aggiungo funzionalita' al click del Bottone
const selectButton = document.getElementById('btn');
selectButton.addEventListener('click',
    function () {
        let numeroDiCelle;

        // reset punteggio a 0
        let punteggio = 0;

        // svuota container
        selectContainer.innerHTML = " ";

        console.log(arrayBombe);

        // BONUS: Prendi il livello di difficolta dal DOM e settalo in una variabile
        const livelloSelezionato = document.getElementById('difficolta').value;

        // BONUS: in base al livello selezionato: assegna il giusto valore alla variabile numeroDiCelle
        if (livelloSelezionato === "Easy") {
            numeroDiCelle = 100;
        } else if (livelloSelezionato === "Medium") {
            numeroDiCelle = 81;
        } else if (livelloSelezionato === "Hard") {
            numeroDiCelle = 49;
        }



        // Cicla per 100 volte le seguenti operazioni
        for (let i = 1; i <= numeroDiCelle; i++) {

            // Crea un elemento
            const createSquare = document.createElement('div');
            // dagli una classe
            createSquare.classList.add('square');
            // appendilo al container
            selectContainer.append(createSquare);
            // scrivi il numero all'interno dell'elemento
            let numeroDelleCelle = i
            createSquare.innerHTML = numeroDelleCelle;

            // BONUS: in base al livello selezionato: cambia la classe
            if (livelloSelezionato === "Easy") {
                createSquare.classList.add('square-easy');
            } else if (livelloSelezionato === "Medium") {
                createSquare.classList.add('square-medium');
            } else if (livelloSelezionato === "Hard") {
                createSquare.classList.add('square-hard');
            }

            // Al Click su un quadrato
            createSquare.addEventListener('click',
                function () {
                    // colora la cella al click
                    createSquare.classList.add("blue");

                    // aggiungi +1 al puntggio
                    punteggio += 1;


                    // controlla che il numero nell'arrayBombe corrisponda con il numero della cella
                    for (let i = 0; i <= arrayBombe.length; i++) {
                        if (arrayBombe[i] === numeroDelleCelle) {
                            // colora di rosso
                            createSquare.classList.add("red");
                            // scrivi punti su HTML
                            selectContaPunti.innerHTML = `HAI PERSO! Il tuo puteggio: ${punteggio}`;

                            // 4, 5 88, 3

                            // scopri tutte le bombe, dai la casse red a tutti i numeri dell'arryBombe


                        }
                    }

                    // controlla che 


                }
            );
        }

        // CREA LE BOMBE
        // metti 16 numeri casuali in una array in base al numero di celle
        while (arrayBombe.length <= 15) {
            const numeriDelleBombe = randomNumber(1, numeroDiCelle);
            // controlla che nella array non include doppioni
            if (!arrayBombe.includes(numeriDelleBombe)) {
                arrayBombe.push(numeriDelleBombe);
            }
        }
    }
);




//  MY FUNCTIONS
function randomNumber(min, max) {
    const random = Math.floor(Math.random() * (max - min + 1) + min);
    return random

}



