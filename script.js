const tarefaInput = document.getElementById("tarefaInput");
const prioridadeInput = document.getElementById("prioritySelect")
const adicionarBtn = document.getElementById("adicionarBtn")
const tabela = document.getElementById("tabelaTarefas")
const mensagem = document.getElementById("mensagem")

function getClassePrioridade(prioridade) {
    switch(prioridade){
        case 'Alta': return 'badge-alta';
        case 'Média': return 'badge-média';
        case 'Baixa': return 'badge-baixa';
        default: return '';
    }
}

function adicionarTarefa() {
    const texto = tarefaInput.value.trim();
    const prioridade = prioridadeInput.value
    console.log(prioridade)
    if (texto ==='' ||prioridade === '') return;

    const linha = document.createElement('tr');

    const tdTarefa = document.createElement('td');

    tdTarefa.textContent = texto;

    const tdPrioridade = document.createElement('td');
    const badge = document.createElement('span');
    badge.classList.add("badge")
    badge.classList.add(getClassePrioridade(prioridade));
    badge.textContent = prioridade;
    tdPrioridade.appendChild(badge);


    const tdAcao = document.createElement('td');

    const btnFinalizar = document.createElement('button');
    btnFinalizar.textContent ="Finalizar";
    btnFinalizar.className = "btn btn-success btn-sm w-50";

    btnFinalizar.onclick = () => linha.remove();

    tdAcao.appendChild(btnFinalizar);

    linha.appendChild(tdTarefa);
    linha.appendChild(tdPrioridade);
    linha.appendChild(tdAcao);

    tabela.appendChild(linha);

    tarefaInput.value = '';
    prioridadeInput.selectedIndex = 0;
    tarefaInput.focus();
    // mensagem.textContent = "Tarefa adicionada com sucesso!";

}
adicionarBtn.addEventListener('click', adicionarTarefa)
tarefaInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') adicionarTarefa();

});