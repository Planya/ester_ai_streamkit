<template lang="pug">
.widgets
  .widgets-item(
    v-for="widget in widgets" 
    :key="widget.name"
    :class="`widgets-item--${widget.className}`"
    @click="navigate(widget.link)"
  )
    .widgets-item__title {{ widget.name }}
</template>
  
<script setup lang="ts">
import { ref } from 'vue'

const widgets = ref([
  {
    name: 'Twitch чат',
    link: '',
    className: 'twitch'
  },
  {
    name: 'YouTube чат',
    link: '',
    className: 'youtube'
  },
  {
    name: 'DonationAlerts оповещения',
    link: '',
    className: 'da'
  },
  {
    name: 'Live2D',
    link: '',
    className: 'default'
  },
  {
    name: 'Субтитры',
    link: '',
    className: 'default'
  },
  {
    name: 'Голосования',
    link: '',
    className: 'default'
  },
  {
    name: 'Песни',
    link: '',
    className: 'default'
  },
])

const navigate = (link: string) => {

}
</script>
  
<style scoped lang="scss">
.widgets {
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;

  &-item {
    box-shadow: $shadow;
    width: 200px;
    height: 200px;
    padding: 10px;
    border-radius: 6px;
    border: 1px solid;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: .3s;

    &:hover {
      opacity: .7;
    }

    &__title {
      font-size: 16px;
      color: inherit;
      text-align: center;
      text-transform: uppercase;
      font-weight: 700;
    }

    &--twitch {
      background-color: rgba($color: $twitch, $alpha: .2);
      border-color: $twitch;
      color: $twitch;
    }

    &--youtube {
      background-color: rgba($color: $youtube, $alpha: .2);
      border-color: $youtube;
      color: $youtube;
    }

    &--da {
      background-color: rgba($color: $da, $alpha: .2);
      border-color: $da;
      color: $da;
    }

    &--default {
      background-color: rgba($color: $blue-4, $alpha: .2);
      border-color: $blue-4;
      color: $blue-4;
    }
  }
}
</style>
  