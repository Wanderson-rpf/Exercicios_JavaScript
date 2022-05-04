const relogio = document.querySelector('.relogio');
let segundos = 0;
let timer;

function getTimeSeconds(seg){
    const data = new Date(seg * 1000);
    return data.toLocaleTimeString('pt-BR', {hour12: false, timeZone: 'GMT'});
}

function iniciaTimer(){
    timer = setInterval(function(){
        segundos++;
        relogio.innerHTML = getTimeSeconds(segundos);
    }, 1000);
}

document.addEventListener('click', function(e){
    const element = e.target;
    if (element.classList.contains('iniciar')){
        relogio.classList.add('iniciado');
        clearInterval(timer);
        iniciaTimer();
    }
    if (element.classList.contains('pausar')){
        relogio.classList.add('pausado');
        clearInterval(timer);
    }
    if (element.classList.contains('zerar')){
        relogio.classList.add('zerado');
        clearInterval(timer);
        segundos = 0;
        relogio.innerHTML = '00:00:00';
    }
});