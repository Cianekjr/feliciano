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

import { defineComponent, computed, onMounted, SetupContext } from '@vue/composition-api'
import { Category } from '~/models/definitions'

export default defineComponent({
  setup (props, ctx: SetupContext) {
    onMounted(() => {
      ctx.root.$store.dispatch('category/getCategories')
    })

    const categories: any = computed((): Category[] => {
      const categoriesMenu = ctx.root.$store.getters['category/categoriesMenu']
      const category = ctx.root.$route.query.category
      if (!category) {
        ctx.root.$router.push({ query: { category: categoriesMenu[0]?.name } })
      }
      ctx.root.$store.dispatch('menu-dishes/getMenuDishes', category)
      return categoriesMenu
    })

    const activeCategory = computed(() => ctx.root.$route.query.category)

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
    row-gap: .4rem;
  }

  .nav-link {
    background-color: #f6f1e9;
    padding: 1rem 0;
    text-transform: capitalize;
    text-align: center;
    font-weight: 600;
    transition: background-color .3s ease, color .3s ease;
    position: relative;

    &:hover {
      background-color: #c09d6c;
      color: #fff;
    }

    &.active {
      background-color: #c8a97e;
      color: #fff;
    }
  }

  @media (min-width: 768px) {
    .nav-list {
      grid-auto-flow: column;
    }

    .nav-link {
      &::after {
        position: absolute;
        content: '';
        top: 100%;
        left: 50%;
        width: 0;
        height: 0;
        transform: translateX(-50%);
        border: 1rem solid transparent;
        transition: border-color .3s ease;
      }

      &.active {
        &::after {
          border-top-color: #c8a97e;
        }
      }
    }
  }
</style>
