<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue';

const mouseOver = ref(false)
</script>

<template>
  <header @mouseenter="mouseOver = true" @mouseleave="mouseOver=false">
    <ul class="nav justify-content-center fixed-top bg-black" :class="{'fade-out': !mouseOver}">
      <li class="btn ">
        <RouterLink to="/" class="nav-link">Text Editor</RouterLink>
      </li>
      <li class="btn">
        <RouterLink :to="{ name: 'show' }" class="nav-link">Show</RouterLink>
      </li>
    </ul>
  </header>
  <RouterView />
</template>

<style>
.nav-link {
  color:azure;
}

.fade-out {
  opacity: 0;
  transition: opacity 1s ease-in-out
}
</style>