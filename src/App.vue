<script setup>
import { RouterLink, RouterView } from 'vue-router'


</script>

<template>
  <header>
    <ul class="nav justify-content-center fixed-top bg-black">
      <li class="nav-item">
        <RouterLink to="/" class="nav-link">Text Editor</RouterLink>
      </li>
      <li class="nav-item">
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
</style>