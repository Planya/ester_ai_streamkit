import { inject } from 'vue'

/**
 * Хук для инжекта глобальной переменной шины событий в компоненты
 */
export default () => {
  const bus = inject('bus')

  return {
    bus
  }
}