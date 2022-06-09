// // 1 🚀 - Crie um erro personalizado que será chamado se a pessoa usuária digitar apenas um número.
// // 2 🚀 - Agora adicione uma outra exceção, caso a pessoa usuária digite um valor que não seja numérico
// // 3 🚀 - Você se lembrou de limpar os inputs após o clique do botão? Teve que repetir código para isso? Que tal refatorar sua função utilizando o finally?
function verifyIsNumber(value1, value2) {
  if (value1 === '' || value2 === '') {
    throw new Error('infome os dois números');
  }
}

function nan(value1, value2) {
  if (isNaN(value1) || isNaN(value2)){
    throw new Error('Digite um número');
  }
}

function sum() {
  try {
    const value1 = document.getElementById('value1').value;
    const value2 = document.getElementById('value2').value;
    verifyIsNumber(value1, value2);
    nan(value1, value2);
    const result = parseInt(value1) + parseInt(value2);
    document.getElementById('result').innerHTML = `Resultado: ${result}`;
  } catch (error) {
    document.getElementById('result').innerHTML = `Erro: ${error.message}`;
  } finally {
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
  }
}
window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
}
