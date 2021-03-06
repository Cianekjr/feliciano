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

import { defineComponent, computed, onMounted, SetupContext, watch, onServerPrefetch } from '@vue/composition-api'
import { Category } from '~/models/definitions'

export default defineComponent({
  setup (props: any, ctx: SetupContext) {
    const { $store, $axios, $route } = ctx?.root

    onServerPrefetch(async () => {
      await $store.dispatch('category/getCategories', {
        $axios
      })
      const categoriesMenu = $store.getters['category/categoriesMenu']
      const category = $route.query.category || categoriesMenu[0]?.name

      return $store.dispatch('menu-dishes/getMenuDishes', {
        $axios,
        category
      })
    })

    onMounted(() => {
      $store.dispatch('category/getCategories', {
        $axios
      })
    })

    const categories: any = computed((): Category[] => $store.getters['category/categoriesMenu'])
    const activeCategory = computed(() => {
      const category = ctx.root.$route.query.category
      if (category) {
        return category
      } else {
        const categoriesMenu = $store.getters['category/categoriesMenu']
        return categoriesMenu[0]?.name
      }
    })

    watch(activeCategory, (category: String) => {
      if (category) {
        $store.dispatch('menu-dishes/getMenuDishes', {
          $axios,
          category
        })
      } else {
        const categoriesMenu = $store.getters['category/categoriesMenu']
        const category = categoriesMenu[0]?.name
        $store.dispatch('menu-dishes/getMenuDishes', {
          $axios,
          category
        })
      }
    })

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
