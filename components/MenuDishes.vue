<template>
  <section class="wrapper">
    <Dish v-for="dish in menuDishes" :key="dish.id" :dish="dish" />
  </section>
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
    const menuDishes: any = computed((): Category[] => ctx.root.$store.getters['menu-dishes/menuDishes'])

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
