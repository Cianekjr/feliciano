<template>
  <div class="wrapper">
    <container>
      <ul class="list">
        <SingleDish
          v-for="dish in groupDishes"
          :key="dish.id"
          :dish="dish"
        />
      </ul>
    </container>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, SetupContext, onServerPrefetch } from '@vue/composition-api'
import SingleDish from '~/components/SingleDish.vue'
import container from '~/layouts/container.vue'
import { MenuDishes } from '~/models/definitions'

export default defineComponent({
  components: {
    container,
    SingleDish
  },
  setup (props: any, ctx: SetupContext) {
    const { $store, $axios } = ctx?.root

    onServerPrefetch(async () => {
      return await $store.dispatch('group-dishes/getRandomDishes', {
        $axios
      })
    })

    $store.dispatch('group-dishes/getRandomDishes', {
      $axios
    })

    const groupDishes: any = computed((): MenuDishes => $store.getters['group-dishes/groupDishes'])

    return {
      groupDishes
    }
  }
})
</script>

<style scoped lang="scss">
  .wrapper {
    width: 100%;
  }

  .list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
    padding: 5rem 0;
  }

  @media (min-width: 420px) {
    .list {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 768px) {
    .wrapper {
      border-top: 1px solid rgba(255, 255, 255, 0.2);
    }

    .list {
      grid-template-columns: repeat(4, 1fr);
      padding: 2rem 0;
    }
  }
</style>
