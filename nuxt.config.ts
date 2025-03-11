export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

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
});
