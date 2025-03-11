// Prettier конфигурация для форматирования кода
module.exports = {
  printWidth: 100, // Максимальная длина строки
  tabWidth: 2, // Количество пробелов в отступе
  useTabs: false, // Использовать пробелы вместо табов
  semi: true, // Добавлять точки с запятой в конце строк
  singleQuote: true, // Использовать одинарные кавычки
  trailingComma: 'all', // Висячие запятые во всех структурах
  bracketSpacing: true, // Пробелы между скобками в объектах
  arrowParens: 'always', // Всегда использовать скобки в стрелочных функциях
  endOfLine: 'lf', // Конец строки в формате LF (Linux/macOS)
  jsxSingleQuote: false, // Двойные кавычки в JSX
  proseWrap: 'preserve', // Не изменять форматирование текста
  htmlWhitespaceSensitivity: 'css', // Чувствительность к пробелам в HTML
  vueIndentScriptAndStyle: true, // Отступы в `<script>` и `<style>` в файлах Vue
  embeddedLanguageFormatting: 'auto', // Автоформатирование встроенных языков
};
