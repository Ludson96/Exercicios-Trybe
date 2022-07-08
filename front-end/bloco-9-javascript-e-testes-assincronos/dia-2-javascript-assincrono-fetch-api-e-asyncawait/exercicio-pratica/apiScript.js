// // Utilize o HTML e o js a seguir como base: (não se esqueça de utilizar a extensão Live Server e inspecionar o console do navegador para ver os logs)

// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  
  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(({ joke }) => 
    document.getElementById('jokeContainer').innerText = joke);
  
};

window.onload = () => fetchJoke();