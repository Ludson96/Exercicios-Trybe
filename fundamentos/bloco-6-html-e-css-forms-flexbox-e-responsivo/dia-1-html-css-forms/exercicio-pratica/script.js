const getBtn = document.getElementsByTagName('button')[0];

function stopSend(event) {
    event.preventDefault();
}

getBtn.addEventListener('click', stopSend);