function editar(id, txt_tarefa, pag){

    let form = document.createElement('form')
    if(pag == 2){
        form.action = 'tarefa_controller.php?acao=atualizar'
    }else if(pag == 1){
        form.action = 'index.php?pag=index&acao=atualizar'
    }
    
    form.method = 'post'
    form.className = 'row'

    let inputTarefa = document.createElement('input')
    inputTarefa.type = 'text'
    inputTarefa.name = 'tarefa'
    inputTarefa.className = 'col-9 form-control'
    inputTarefa.value = txt_tarefa

    let inputId = document.createElement('input')
    inputId.type = 'hidden'
    inputId.name = 'id'
    inputId.value = id

    let button = document.createElement('button')
    button.type = 'submit'
    button.className = 'col-3 btn btn-info'
    button.innerHTML = 'Atualizar'

    form.appendChild(inputTarefa)
    form.appendChild(inputId)

    form.appendChild(button)

    let tarefa = document.getElementById('tarefa_'+id)

    tarefa.innerHTML = ''
    tarefa.insertBefore(form, tarefa[0])
}

function remover(id, pag){
    if(pag == 2){
        location.href = 'todas_tarefas.php?acao=remover&id='+id;
    }else if(1){
        location.href = 'index.php?pag=index&acao=remover&id='+id;
    }
}

function marcarRealizada(id, pag){
    if(pag == 2){
        location.href = 'todas_tarefas.php?acao=marcarRealizada&id='+id;
    }else if(1){
        location.href = 'index.php?pag=index&acao=marcarRealizada&id='+id;
    }
}