const url = 'https://raw.githubusercontent.com/diegofrr/lista_paises/main/jetpunk_paises.json';

async function getPaises(url) {
    await fetch(url)
        .then(response => response.json())
        .then(paises => {
            requestQuizApply(paises);
        })

}

function requestQuizApply(paises) {
    paises.forEach(nome_pais => {
        document.querySelector('#txt-answer-box').value = nome_pais;

        // ALTERAR JQUERY ATUAL
        document.querySelector('#txt-answer-box')
            .jQuery321074004899226539741.events.input[0].handler.apply()

    });
}

getPaises(url);

async function getPaises(url) {
    await fetch(url)
        .then(response => response.json())
        .then(paises => {
            requestQuizApply(paises);
        })

}

function requestQuizApply(paises) {
    paises.forEach(nome_pais => {
        document.querySelector('#txt-answer-box').value = nome_pais;

        // ALTERAR JQUERY ATUAL
        document.querySelector('#txt-answer-box')
            .jQuery321074004899226539741.events.input[0].handler.apply()

    });
}

getPaises(url);';

async function getPaises(url) {
    await fetch(url)
        .then(response => response.json())
        .then(paises => {
            requestQuizApply(paises);
        })
}

function requestQuizApply(paises) {
    paises.forEach(nome_pais => {
        document.querySelector('#txt-answer-box').value = nome_pais;

        // ALTERAR JQUERY ATUAL
        document.querySelector('#txt-answer-box')
            .jQuery321074004899226539741.events.input[0].handler.apply()

    });
}

getPaises(url);
