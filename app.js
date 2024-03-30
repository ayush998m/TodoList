const todoList = document.querySelector('.todoList')

document.querySelector('.addTodo').addEventListener('click', ()=>{
  let todoText = document.querySelector('.todo').value;
  let li = document.createElement('li')
  li.innerText = todoText;
  todoList.appendChild(li)
  
})


