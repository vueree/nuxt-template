<script setup></script>

<template>
  <nav>
    <ul>
      <li><NuxtLink to="/">Home</NuxtLink></li>
      <li><NuxtLink to="/about">About</NuxtLink></li>
    </ul>
  </nav>
</template>

<style scoped>
  nav {
    background-color: #333;
    color: white;
    padding: 1rem;
  }
  ul {
    list-style: none;
    display: flex;
    gap: 1rem;
  }
  a {
    color: white;
    text-decoration: none;
  }
</style>
