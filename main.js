const selectContainer = document.querySelector('.container');
const selectContaPunti = document.getElementById('punteggio');


// Aggiungo funzionalita' al click del Bottone
const selectButton = document.getElementById('btn');
selectButton.addEventListener('click',
    function () {
        let numeroDiCelle;

        // reset punteggio a 0
        let punteggio = 0;

        // svuota container
        selectContainer.innerHTML = " ";

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
            createSquare.innerHTML = i;

            // BONUS: in base al livello selezionato: cambia la classe
            if (livelloSelezionato === "Easy") {
                createSquare.classList.add('square-easy');
            } else if (livelloSelezionato === "Medium") {
                createSquare.classList.add('square-medium');
            } else if (livelloSelezionato === "Hard") {
                createSquare.classList.add('square-hard');
            }



            // colora la cella al click
            createSquare.addEventListener('click',
                function () {
                    createSquare.style.backgroundColor = 'blue';

                    // aggiungi +1 al puntggio
                    punteggio += 1;

                    // scrivi punti su HTML
                    selectContaPunti.innerHTML = `Il tuo puteggio: ${punteggio}`;



                });
        }
    }
);




//  MY FUNCTIONS




