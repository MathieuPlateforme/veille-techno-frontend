import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
  state: () => ({
  todolist: []
}),
  getters: {
  },
  actions: {
    addTodoList() { 
      const uniqueId = Date.now();
      this.todolist.push({
        id: uniqueId,
        title: "Nouveau tableau",
        todos: []
      });
    },
    editTodoTitle(id, title) {
      const index = this.todolist.findIndex(todoList => todoList.id === id);
      if (index !== -1) {
        this.todolist[index].title = title;
      }
    },
    removeTodoList(id) {
      const index = this.todolist.findIndex(todoList => todoList.id === id);
      if (index !== -1) {
        this.todolist.splice(index, 1);
      }
    },
    addTodos(id, title) {
      const uniqueId = Date.now();
      const index = this.todolist.findIndex(todoList => todoList.id === id);
      if (index !== -1) {
        this.todolist[index].todos.push({
          id: uniqueId,
          title: title,
          description: "",
          status: "new",
        });
      }
    },
    getTodo(id, idTodo) {
      const index = this.todolist.findIndex(todoList => todoList.id === id);
      const indexTodo = this.todolist[index].todos.findIndex(todo => todo.id === idTodo);
      return this.todolist[index].todos[indexTodo];
    },
    editTodos(id, idTodo, title, description, status) {
      const index = this.todolist.findIndex(todoList => todoList.id === id);
      const indexTodo = this.todolist[index].todos.findIndex(todo => todo.id === idTodo);
      if (indexTodo !== -1) {
        this.todolist[index].todos[indexTodo].title = title;
        this.todolist[index].todos[indexTodo].description = description;
        this.todolist[index].todos[indexTodo].status = status;
      }
    },
    removeTodos(id, idTodo) {
      const index = this.todolist.findIndex(todoList => todoList.id === id);
      const indexTodo = this.todolist[index].todos.findIndex(todo => todo.id === idTodo);
      if (indexTodo !== -1) {
        this.todolist[index].todos.splice(indexTodo, 1);
      }
    },
  },
  
  /*const todoLists = ref([]);

  function addTodoList() {
    const uniqueId = Date.now();
    todoLists.value.push({ id: uniqueId });
    saveToLocalStorage();
  }

  function removeTodoList(id) {
    console.log(todoLists.value);
    console.log(id);
    todoLists.value = todoLists.value.filter(todoListId => todoListId !== id);
    saveToLocalStorage();
  }

  function saveToLocalStorage() {
    localStorage.setItem('todoLists', JSON.stringify(todoLists.value));
  }

  function loadFromLocalStorage() {
    const savedTodoLists = localStorage.getItem('todoLists');
    return todoLists.value = savedTodoLists ? JSON.parse(savedTodoLists) : [];
  }

  return {
    addTodoList,
    removeTodoList,
    saveToLocalStorage,
    loadFromLocalStorage,
  };*/
});
