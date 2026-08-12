// 1. Data Contract Interface
interface Todo {
    id: string;
    text: string;
}

// 2. Application State
const STORAGE_KEY = 'todos';

function loadTodos(): Todo[] {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];
    try {
        return JSON.parse(stored) as Todo[];
    } catch {
        return [];
    }
}

function saveTodos(todos: Todo[]): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

let todos: Todo[] = loadTodos();

// 3. DOM Element Selection with Explicit Type Casting
const form = document.getElementById('todo-form') as HTMLFormElement | null;
const input = document.getElementById('todo-input') as HTMLInputElement | null;
const todoList = document.getElementById('todo-list') as HTMLUListElement | null;

// 4. Render Function
function renderTodos(): void {
    if (!todoList) return;
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.className = 'todo-item';
        const span = document.createElement('span');
        span.className = 'todo-text';
        span.textContent = `${index + 1}. ${todo.text}`;
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.id = `delete-btn-${index + 1}`;
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => deleteTodo(todo.id));
        li.appendChild(span);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    });
}

// 5. Actions
function addTodo(text: string): void {
    const newTodo: Todo = {
        id: crypto.randomUUID(),
        text: text.trim()
    };
    todos.push(newTodo);
    saveTodos(todos);
    renderTodos();
}

function deleteTodo(id: string): void {
    todos = todos.filter((todo) => todo.id !== id);
    saveTodos(todos);
    renderTodos();
}

// 6. Event Listeners
if (form && input && todoList) {
    form.addEventListener('submit', (event: SubmitEvent) => {
        event.preventDefault();
        const text = input.value.trim();
        if (text.length === 0) return;
        addTodo(text);
        input.value = '';
    });
    renderTodos();
}
