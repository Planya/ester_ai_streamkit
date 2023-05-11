<template lang="pug">
header.header
  a.header__logo(href="/") Ester <span>StreamKit</span> 
main.main
  router-view
footer.footer
  span {{ currentYear }}
  a(target="_blank" href="https://github.com/Planya") Planya's apps
  span v {{ version }}
</template>

<script setup lang="ts">
import { onUnmounted, ref } from 'vue'

// вывод версии приложения
const version = ref<string>(APP_VERSION) // APP_VERSION global vite env
const currentYear = new Date().getFullYear()

// регистрируем глобальную переменную высоты окна для фикса бага с высотой 100vh на мобилках
const calcVh = () => {
  const vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
}

calcVh()
window.addEventListener('resize', calcVh)

onUnmounted(() => {
  window.removeEventListener('resize', calcVh)
})
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  height: 80px;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: $shadow;
  position: sticky;
  top: 0;
  background-color: $gray-11;
  z-index: 999;

  &__logo {
    text-decoration: none;
    color: $white;
    font-weight: 800;
    font-size: 18px;
    transition: .3s;

    &:hover {
      opacity: .7;
    }

    span {
      font-size: 18px;
      color: $blue-4;
    }
  }
}

.main {
  flex: 1;
  display: flex;
  padding: 40px;
}

.footer {
  width: 100%;
  height: 80px;
  padding: 0 40px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: $gray-8;

  a {
    color: $blue-4;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
