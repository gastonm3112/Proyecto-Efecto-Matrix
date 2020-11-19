let elemento = document.getElementById('matrix');
let contexto = elemento.getContext('2d');
let width = document.body.clientWidth;
let height = document.body.clientHeight;

elemento.width = width;
elemento.height = height;

let posicion = array(300).join(0).split('');

function inicializarMatrix(){
    contexto.fillStyle = 'rgba(0, 20, 1, 0.5)';
    contexto.fillRect(0, 0, width, height);
    contexto.fillStyle = '#37CC05';

    contexto.font = '11pt arial';
}

setInterval(inicializarMatrix, 50);