<script>
import { useStore } from '@/stores/store.js';
import TaskModal from '@/components/TaskModal.vue';

export default {
  data() {
    return {
      newTodo: '',
      selectedTodo: null,
    };
  },
  props: {
    todoListId: Number,
  },
  components: {
    TaskModal,
  },
  computed: {
    todoList() {
      const store = useStore();
      const todoList = store.todolist.find(todoList => todoList.id === this.todoListId);
      return todoList;
    },
  },
  methods: {
    addTodo() {
      const store = useStore();
      if (this.newTodo.trim() !== '') {
        store.addTodos(this.todoListId, this.newTodo);
      }
      this.newTodo = '';
    },
    removeTodo(id) {
      const store = useStore();
      store.removeTodos(this.todoListId, id);
    },
    removeSelf() {
      this.$emit('removeSelf', this.todoListId);
    },
    editTodo(id) {
      const store = useStore();
      this.selectedTodo = store.getTodo(this.todoListId, id);
      this.$emit('openEditModal');
    },
    saveTodoChanges(editedTodo) {
      const store = useStore();
      store.editTodos(this.todoListId, editedTodo.id, editedTodo.title, editedTodo.description, editedTodo.status)
      this.selectedTodo = null;
    },
  },
};
</script>

<template>
  <div class="todolist-component">
    <div class="header">
      <h2>{{ todoList.title }}</h2>
      <h3 @click="removeSelf">X</h3>
    </div>
    <div class="add-todo">
      <input v-model="newTodo" @keyup.enter="addTodo" placeholder="Ajouter une tâche" />
      <button @click="addTodo">+</button>
    </div>
    <ul class="todo-list">
      <li v-for="todo in todoList.todos" :key="todo.id" :class="todo.status">
        {{ todo.title }} <div><button @click="editTodo(todo.id)">Edit</button> <button @click="removeTodo(todo.id)">X</button></div>
      </li>
    </ul>
    <!-- Add the TaskModal component to handle todo editing -->
    <TaskModal :task="selectedTodo" @saveChanges="saveTodoChanges" @closeModal="selectedTodo = null" />
  </div>
</template>

<script>

</script>

<style scoped>
.todolist-component {
  min-width: 24%;
  max-width: 24%;
  height: 70vh;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin-right: 20px;
  margin-bottom: 20px;
}

h2 {
  text-align: center;
  color: #333;
}
.new {
  background-color: #2980b9;
}
.ongoing {
  background-color: #f39c12;
}
.paused {
  background-color: #e74c3c;
}
.canceled {
  background-color: #8e44ad;
}
.completed {
  background-color: #2ecc43;
}

.add-todo {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

input {
  flex: 1;
  padding: 8px;
  font-size: 14px;
}

button {
  background-color: #3498db;
  color: #fff;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

button:hover {
  background-color: #2980b9;
}

ul {
  list-style-type: none;
  padding: 0;
}

.todo {
  border: 1px solid rgb(5, 100, 160);
  background-color: rgba(5, 100, 160, 0.204);;
}
.todo-list {
  overflow-y: auto;
  height: 80%;
}

li {
  margin: 10px 0;
  padding: 10px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
}
h3 {
  color: red;
  cursor: pointer;
}

.header {
  display: flex;
  justify-content: space-between;
}

</style>