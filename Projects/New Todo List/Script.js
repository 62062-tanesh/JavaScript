const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const list = document.getElementById('todo-list');

const saved = localStorage.getItem('todos');
const todos = saved ? JSON.parse(saved) : [];

function saveTodos(){
    localStorage.setItem('todos',JSON.stringify(todos));

}
function createTodoNode(todo, index){
    const li = document.createElement('input');
    checkbox.type
}

function render(){
    list.innerHTML = '';
    todos.forEach((todo, index) => {
        const node = createTodoNode(todo, index);
        list.appendChild(node)
    });
}