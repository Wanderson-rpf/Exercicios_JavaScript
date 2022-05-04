const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.lista-tarefas');

function criaLi(){
    const liDefault = document.createElement('li');
    return liDefault;
}

function limpaInput(){
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaBtnApagar(li){
    const btnApagar = document.createElement('button');
    li.innerText += ' ';
    btnApagar.innerText = 'Apagar';
    btnApagar.setAttribute('class', 'btn btn-danger apagar');
    btnApagar.setAttribute('title', 'Apagar tarefa.');
    li.appendChild(btnApagar);
}

function salvarTarefa(){
    const liTarefa = tarefas.querySelectorAll('li');
    const listatarefas = [];

    for (let t of liTarefa){
        let tarefaTexto = t.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listatarefas.push(tarefaTexto);
    }
    const tarefasJson = JSON.stringify(listatarefas);
    localStorage.setItem('tarefas', tarefasJson);
    console.log(tarefasJson);
}

//Restaurar tarefas ao recargegar o navegador.
function addTarefa(){
    const tarefas = localStorage.getItem('tarefas');
    const listaTarefas = JSON.parse(tarefas);
    console.log(listaTarefas);

    for (let t in listaTarefas){
        criaTarefa(t);
    }
}

function criaTarefa(textInput){
    const li = criaLi();
    li.innerHTML = textInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBtnApagar(li);
    salvarTarefa();
}

inputTarefa.addEventListener('keypress', function(e){
    if(e.keyCode === 13){
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
})

btnTarefa.addEventListener('click', function(){
    if(!inputTarefa) return;
    criaTarefa(inputTarefa.value);
})

document.addEventListener('click', function(e){
    const element = e.target;
    if (element.classList.contains('apagar')){
        element.parentElement.remove();
        salvarTarefa();
    }
})

addTarefa();
