<template>
  <ul class="hours-list">
    <li v-for="openHour in openHours" :key="openHour.id" class="hours-item">
      <time :datatime="weekDays[openHour.id]">{{ weekDays[openHour.id] }}</time>
      <span v-if="openHour.start && openHour.end">
        <time :datatime="openHour.start">{{ openHour.start }}</time>
        -
        <time :datatime="openHour.end">{{ openHour.end }}</time>
      </span>
      <span v-else>
        Closed
      </span>
    </li>
  </ul>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from '@vue/composition-api'
import { OpenHour } from '~/models/definitions'

export default defineComponent({
  setup (_, ctx) {
    onMounted(() => {
      ctx.root.$store.dispatch('open-hours/getOpenHours')
    })
    const openHours: any = computed((): OpenHour[] => ctx.root.$store.getters['open-hours/openHours'])
    const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

    return {
      openHours, weekDays
    }
  }
})
</script>

<style scoped lang="scss">
  .hours-list {
    width: 80%;
  }

  .hours-item {
    display: flex;
    justify-content: space-between;
  }

  @media (min-width: 1024px) {
    .hours-list {
      width: 100%;
    }
  }
</style>
