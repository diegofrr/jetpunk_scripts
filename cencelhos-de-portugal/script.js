document.querySelector('#start-button').click()

const url = 'https://raw.githubusercontent.com/diegofrr/jetpunk_scripts/main/cencelhos-de-portugal/concelhos.json';

async function getConcelhos(url) {
    await fetch(url)
        .then(response => response.json())
        .then(concelhos => requestQuizApply(concelhos))
}

function requestQuizApply(concelhos) {
    paises.forEach(nome_concelho => {
        document.querySelector('#txt-answer-box').value = nome_concelho;

        // ALTERAR JQUERY ATUAL
        document.querySelector('#txt-answer-box')
            .jQuery3210074702432140621111.events.input[0].handler.apply()
    });
}

getConcelhos(url);
