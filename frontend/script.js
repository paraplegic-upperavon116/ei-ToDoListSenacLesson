// ===============================
// 🎯 DESAFIO 7 (JS)
// 👉 Selecionar elementos do DOM
// ===============================
const input = document.querySelector("input");
const btnAdd = document.querySelector(".btn-add");
const tasksContainer = document.querySelector(".tasks");

// ===============================
// ESTADO
// ===============================
let tasks = [];
let currentFilter = "todas"

// ===============================
// 🎯 DESAFIO 8 (JS)
// 👉 Criar função addTask()
// ===============================
function addTask() {
    // trim() remove espaços no início e fim
    const text = input.value.trim();

    // Evita adicionar tarefas vazias
    if (text === "") return;

    // Criamos um objeto para representar a tarefa
    // Teoria: objetos são estruturas chave-valor
    const task = {
        id: Date.now(), // gera um ID único baseado no tempo
        text: text,
        completed: false // estado inicial
    };

    // Adiciona a tarefa no array (imutabilidade não é usada aqui)
    tasks.push(task);

    // Limpa o input
    input.value = "";

    // Atualiza a interface
    renderTasks();
}


// ===============================
// 🎯 DESAFIO 9 (JS)
// 👉 Renderizar tarefas
// ===============================
function renderTasks() {

    // limpar container

    // percorrer tasks

    // criar elemento div

    // adicionar checkbox + texto

    // adicionar no DOM
}


// ===============================
// 🎯 DESAFIO 10 (JS)
// 👉 Marcar como concluída
// ===============================
// Dica: usar addEventListener("change")


// ===============================
// 🎯 DESAFIO 11 (JS)
// 👉 Remover tarefa
// ===============================
// Dica: usar filter()


// ===============================
// EVENTOS
// ===============================
btnAdd.addEventListener("click", addTask);

input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});