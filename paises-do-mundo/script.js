document.querySelector('#start-button').click()

const url = 'https://raw.githubusercontent.com/diegofrr/jetpunk_scripts/main/paises-do-mundo/jetpunk_paises.json';

async function getPaises(url) {
    await fetch(url)
        .then(response => response.json())
        .then(paises => requestQuizApply(paises))
}

function requestQuizApply(paises) {
    paises.forEach(nome_pais => {
        document.querySelector('#txt-answer-box').value = nome_pais;

        // ALTERAR JQUERY ATUAL
        document.querySelector('#txt-answer-box')
            .jQuery3210074702432140621111.events.input[0].handler.apply()
    });
}

getPaises(url);
