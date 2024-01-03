const todoList = JSON.parse(localStorage.getItem('todoList') || []);

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  for (let i = todoList.length - 1; i >= 0; i--) {
    const todoObject = todoList[i];
    const { name, dueDate } = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="deleteTodo(event, ${i})" class="delete-todo-button">Delete</button>
    `;
    todoListHTML += html;
  }

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}
function deleteTodo(event, index){
  event.stopPropagation();
  todoList.splice(index, 1);
  localStorage.setItem('todoList', JSON.stringify(todoList));
  renderTodoList();
}

function addTodo(){
  const nameInputElement = document.querySelector('.js-name-input');
  const name =  nameInputElement.value;
  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;
  todoList.push({
      name,
      dueDate
    });
    localStorage.setItem('todoList', JSON.stringify(todoList));

  nameInputElement.value = '';
  dateInputElement.value = '';
  renderTodoList();
}