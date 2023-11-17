<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HomeView from './views/HomeView.vue';
</script>

<template>
  <header>
    <div class="logo-container">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    </div>
    <div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/todolist">Todo List</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>
header {
  background-color: #3498db;
  color: #fff;
  padding: 1rem 0;
  text-align: center;
  width: 100%;
  display: flex;
  align-items: center ;
}

.logo-container {
  display: inline-block;
}

.logo {
  vertical-align: middle;
  width: 75px;
  height: 50px;
  padding: 0 20px;
}

nav a {
  color: #fff;
  padding: 0 1rem;
  text-decoration: none;
  font-size: 16px;
}

nav a.router-link-exact-active {
  font-weight: bold;
}

</style>