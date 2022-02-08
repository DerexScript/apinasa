// Request api da NASA

const url = "http://api.open-notify.org/astros.json";

async function getDados() {
    const dados = await fetch(url);
    const response = await dados.json();

    const pegueiDados = JSON.parse(JSON.stringify(response));



}

getDados();