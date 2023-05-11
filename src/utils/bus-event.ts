/**
 * Глобальная шина событий
 */
class BusEventer{
  private events: { [key: string]: Function[] }
  constructor(){
    this.events = {}
  }

  on(eventName: string, fn: Function) {
    this.events[eventName] = this.events[eventName] || []
    this.events[eventName].push(fn)
  }

  off(eventName: string, fn: Function) {
    if (this.events[eventName]) {
      for (let i = 0; i < this.events[eventName].length; i++) {
        if (this.events[eventName][i] === fn) {
          this.events[eventName].splice(i, 1)
          break
        }
      }
    }
  }

  emit<T>(eventName: string, data: T|any) {
    if (this.events[eventName]) {
      this.events[eventName].forEach((fn) => {
        fn(data)
      })
    }
  }
}

export default new BusEventer()