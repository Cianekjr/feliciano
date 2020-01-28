<template>
  <section class="wrapper">
    <nav class="nav">
      <ul class="nav-list">
        <li v-for="menu in menus" class="list-item">
          <nuxt-link :to="{ path: 'menu', query: { menu }}" :class="activeMenu === menu && 'active'" class="nav-link">
            {{ menu }}
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </section>
</template>

<script lang="ts">
import { createComponent, computed } from '@vue/composition-api'

export default createComponent({
  setup (_, ctx) {
    const menus: String[] = ['breakfast', 'lunch', 'dinner', 'drinks', 'desserts', 'wine']
    const activeMenu = computed(() => ctx?.root?.$route?.query?.menu || menus[0])
    return {
      menus, activeMenu
    }
  }
})
</script>

<style scoped lang="scss">
  .nav-list {
    color: #000;
    font-size: 2rem;
    line-height: 2;
    margin-bottom: 2rem;

    display: grid;
    grid-auto-flow: row;
    row-gap: 4px;
  }

  .nav-link {
    background-color: #f6f1e9;
    padding: 1rem 0;
    text-transform: capitalize;
    text-align: center;
    font-weight: 600;

    &.active {
      background-color: #c8a97e;
      color: #fff;
    }
  }

  @media (min-width: 768px) {
    .nav-list {
      margin-bottom: 2rem;

      grid-auto-flow: column;
      row-gap: 4px;
    }
  }
</style>
