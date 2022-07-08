const apiUrl = 'https://api.coincap.io/v2/assets';

const fetchCrypto = () => {
  const objectApi = {
    method: 'GET',
    headers: { 'Accept-Encoding': 'gzip' }
  };

  fetch(apiUrl, objectApi)
  .then(response => response.json())
  .then(({ data }) => {
    for (let index = 0; index < data.length; index += 1) {
      const newLi = document.createElement('li');
      const ul = document.getElementById('cripto');
      ul.appendChild(newLi);
      newLi.innerText = data[index].id
    }
  })
}

window.onload = () => fetchCrypto();
