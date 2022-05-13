document.querySelector('#start-button').click()

const url = 'https://raw.githubusercontent.com/diegofrr/jetpunk_scripts/main/meses-do-ano/meses.json';

async function getMeses(url) {
    await fetch(url)
        .then(response => response.json())
        .then(meses => requestQuizApply(meses))
}

function requestQuizApply(meses) {
    meses.forEach(mes => {
        document.querySelector('#txt-answer-box').value = mes;

        // ALTERAR JQUERY ATUAL
        document.querySelector('#txt-answer-box')
            .jQuery32100239472470022441541.events.input[0].handler.apply()
    });
}

getMeses(url);
