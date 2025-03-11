<template>
  <div class="home-page">
    <h1>Добро пожаловать на наш сайт!</h1>

    <section class="features">
      <div class="feature">
        <h2>Функция 1</h2>
        <p>Описание первой важной функциональности вашего приложения.</p>
      </div>

      <div class="feature">
        <h2>Функция 2</h2>
        <p>Описание второй важной функциональности вашего приложения.</p>
      </div>

      <div class="feature">
        <h2>Функция 3</h2>
        <p>Описание третьей важной функциональности вашего приложения.</p>
      </div>
    </section>

    <section class="cta">
      <h2>Начните пользоваться прямо сейчас</h2>
      <button>Начать</button>
    </section>
  </div>
</template>

<style scoped>
  .home-page {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }

  .features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin: 3rem 0;
  }

  .feature {
    padding: 1.5rem;
    border-radius: 8px;
    background-color: #f9f9f9;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .cta {
    text-align: center;
    margin: 2rem 0;
    padding: 2rem;
    background-color: #f5f5f5;
    border-radius: 8px;
  }

  .cta button {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    background-color: #4a66eb;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .cta button:hover {
    background-color: #3a56db;
  }
</style>
