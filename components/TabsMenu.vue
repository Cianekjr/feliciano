<template>
  <section class="wrapper">
    <nav class="nav">
      <ul class="nav-list">
        <li v-for="category in categories" :key="category.id" class="list-item">
          <nuxt-link :to="{ path: 'menu', query: { category: category.name }}" :class="activeCategory === category.name && 'active'" class="nav-link">
            {{ category.name }}
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </section>
</template>

<script lang="ts">

import { defineComponent, computed, onMounted } from '@vue/composition-api'
import { Category } from '~/models/definitions'

export default defineComponent({
  setup (_, ctx) {
    onMounted(() => {
      ctx.root.$store.dispatch('category/getCategories')
    })
    const categories: any = computed((): Category[] => ctx.root.$store.getters['category/categoriesMenu'])
    const activeCategory = computed(() => ctx.root.$route.query.category || categories[0]?.name)

    return {
      categories, activeCategory
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
