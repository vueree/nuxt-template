<template>
  <div class="layout-default">
    <header class="header">
      <h1>My Nuxt App</h1>
      <nav>
        <ul>
          <li><NuxtLink to="/">Главная</NuxtLink></li>
          <li><NuxtLink to="/about">О нас</NuxtLink></li>
          <li><NuxtLink to="/contact">Контакты</NuxtLink></li>
        </ul>
      </nav>
    </header>

    <main class="main-content">
      <!-- Здесь будет отображаться содержимое страницы -->
      <slot />
    </main>

    <footer class="footer">
      <p>© 2025 My Nuxt App</p>
    </footer>
  </div>
</template>

<style scoped>
  .layout-default {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .header {
    padding: 1rem;
    background-color: #f5f5f5;
  }

  .header nav ul {
    display: flex;
    list-style: none;
    gap: 1rem;
    padding: 0;
  }

  .main-content {
    flex: 1;
    padding: 1rem;
  }

  .footer {
    padding: 1rem;
    background-color: #f5f5f5;
    text-align: center;
  }
</style>
