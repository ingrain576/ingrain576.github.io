const form = document.querySelector('#form-tarefa')
const listaTarefas = document.querySelector('.lista-tarefas')
const limparBtn = document.querySelector('#limparBtn')
const adicionarBtn = document.querySelector('#adicionarBtn')

loadEventListeners()

function loadEventListeners() {
    adicionarBtn.addEventListener('click', addTask)

    listaTarefas.addEventListener('click', removeTask)

    limparBtn.addEventListener('click', clearBtn)
}

function addTask(e) {
    if(form.value === '') {
        alert('Escreva uma tarefa!')
    } else {
        const li = document.createElement('li')
        li.className = 'lista-tarefas'
        li.appendChild(document.createTextNode(form.value))
        
        const link = document.createElement('a')
        link.className = 'deletar-tarefa'
        link.innerHTML = '<a href="#">Deletar</a>'
        li.appendChild(link)

        listaTarefas.appendChild(li)

        form.value = ''
    }

    

    e.preventDefault()
}

function removeTask(e) {
    e.target.parentElement.parentElement.remove()
}

function clearBtn(e) {
    while(listaTarefas.firstChild) {
        listaTarefas.removeChild(listaTarefas.firstChild)
    }
}