<script setup>
import { useStore } from '@/stores/store.js';
import ToDoListComponent from '@/components/ToDoListComponent.vue';
import { watch } from 'vue';

const store = useStore();

let todolists = store.todolist;

const addTodoList = () => {
  store.addTodoList();
};  
const removeSelf = (id) => {
  store.removeTodoList(id)
};  
watch(store.todolist, (newVal, oldVal) => {
  todolists = newVal;
});

</script>

<template>
  <div>
    <p class="add" @click="addTodoList">+</p>
    <div class="todolist-track">
      <ToDoListComponent v-for="index in todolists" :key="index.id" :todoListId="index.id" @removeSelf="removeSelf" />
    </div>
  </div>
</template>

<style>
.add {
  font-size: 50px;
  cursor: pointer;
  margin: 0px 20px;
  vertical-align: middle;
  display: inline;
}

.todolist-track {
  display: flex;
  overflow-y: auto;
  margin: 0px 40px;
}

</style>