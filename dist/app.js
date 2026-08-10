// 2. Application State
const STORAGE_KEY = 'todos';
function loadTodos() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored)
        return [];
    try {
        return JSON.parse(stored);
    }
    catch (_a) {
        return [];
    }
}
function saveTodos(todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}
let todos = loadTodos();
// 3. DOM Element Selection with Explicit Type Casting
const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
// 4. Render Function
function renderTodos() {
    if (!todoList)
        return;
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.className = 'todo-item';
        const span = document.createElement('span');
        span.className = 'todo-text';
        span.textContent = `${index + 1}. ${todo.text}`;
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => deleteTodo(todo.id));
        li.appendChild(span);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    });
}
// 5. Actions
function addTodo(text) {
    const newTodo = {
        id: crypto.randomUUID(),
        text: text.trim()
    };
    todos.push(newTodo);
    saveTodos(todos);
    renderTodos();
}
function deleteTodo(id) {
    todos = todos.filter((todo) => todo.id !== id);
    saveTodos(todos);
    renderTodos();
}
// 6. Event Listeners
if (form && input && todoList) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const text = input.value.trim();
        if (text.length === 0)
            return;
        addTodo(text);
        input.value = '';
    });
    renderTodos();
}
export {};
