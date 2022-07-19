const url = 'https://api.coincap.io/v2/assets';

const fetchCoin = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept-Encoding': 'gzip' },
  };

  fetch(url, myObject)
    .then(response => response.json())
    .then(({ data }) => {
      for (let index = 0; index < 10; index += 1) {
        const newLI = document.createElement('li');
        newLI.innerText = `${data[index].id} (${data[index].symbol}): ${data[index].priceUsd}`
        const cripto = document.getElementById('cripto');
        cripto.appendChild(newLI);
      }
    })
}

const fetchUsdCurrencies = async () => {
  const baseUrl = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest'
  const usdEndpoint = '/currencies/usd.min.json'
  const url = baseUrl.concat(usdEndpoint);

  const usdCurrencies = await fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.usd))
    .catch((error) => error.toString());

  return usdCurrencies;
};
fetchUsdCurrencies()

// window.onload = () => fetchCoin();
fetchCoin();