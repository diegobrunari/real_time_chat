const botaoEnviar = document.getElementById('enviar');
const caixaMensagem = document.getElementById('texto');
const chat = document.getElementById('mensagens');
const allowedKeys = 'Enter';

const socket = io();

botaoEnviar.addEventListener('click',(ev) => {
  if(caixaMensagem.value !== "") {
    socket.emit('nova mensagem', caixaMensagem.value);
    caixaMensagem.value = "";
  }
});

document.addEventListener('keypress', (ev) => {
  if (ev.key === 'Enter' && caixaMensagem.value !== "") {
    socket.emit('nova mensagem', caixaMensagem.value);
    caixaMensagem.value = "";
  }
});

socket.addEventListener('nova mensagem', (msg) => {
  const elementoMensagem = document.createElement('li');
  elementoMensagem.textContent = msg;
  elementoMensagem.classList.add('mensagem');
  chat.appendChild(elementoMensagem);
});