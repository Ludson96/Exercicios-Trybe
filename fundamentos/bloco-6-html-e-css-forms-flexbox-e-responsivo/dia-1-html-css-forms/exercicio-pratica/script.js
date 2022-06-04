const getBtn = document.getElementsByTagName('button')[0];

// function stopSend(event) {
//     event.preventDefault();
// }

// getBtn.addEventListener('click', stopSend);

// Mensagem de dados invalidos
const getName = document.getElementById('name');
const getEmail = document.getElementById('email');
const getArea = document.getElementById('motivo')

if ( getName.min < 10 || getName.max > 40 || getEmail.min < 10 || getEmail.max > 50 || getArea.maxlength > 500) {
    alert('Dados inválidos');
} else {
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip')
}
