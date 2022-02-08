// Request api da NASA

const url = "https://cors-anywhere.herokuapp.com/http://api.open-notify.org/astros.json";
const headers = {
    headers: { Origin: window.location.host }
  }

async function getDados() {
    const dados = await fetch(url, headers);
    const response = await dados.json();
    console.log(response);
}

getDados();