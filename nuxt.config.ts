export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap',
        },
      ],
    },
  },

  build: {
    transpile: [],
  },

  components: ['~/components/ui'],

  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
    plugins: [],
    optimizeDeps: {
      include: ['vue', 'vue-demi'],
    },
  },

  css: ['./assets/css/tailwind.css'],
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
      autoprefixer: {},
    },
  },
});
