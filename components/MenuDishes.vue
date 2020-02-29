<template>
  <ul class="wrapper">
    <Dish
      v-for="(dish, index) in menuDishes"
      :key="dish.id"
      :dish="dish"
      :reverse="index % 4 === 2 || index % 4 === 3"
    />
  </ul>
</template>

<script lang="ts">
import { computed, defineComponent, SetupContext } from '@vue/composition-api'
import Dish from '~/components/Dish.vue'
import { Category } from '~/models/definitions'

export default defineComponent({
  components: {
    Dish
  },
  setup (props, ctx: SetupContext) {
    const { $store } = ctx?.root
    const menuDishes: any = computed((): Category[] => $store.getters['menu-dishes/menuDishes'])

    return {
      menuDishes
    }
  }
})
</script>

<style scoped lang="scss">
  .wrapper {
    display: grid;
  }

  @media (min-width: 1024px) {
    .wrapper {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>
