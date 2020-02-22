<template>
  <header :class="props.isFixed && 'fixed'" class="wrapper">
    <container :class="props.isFixed && 'fixed'" class="container">
      <h1 @click="hideMenu">
        <nuxt-link to="/" class="logo-link">
          Feliciano
        </nuxt-link>
      </h1>
      <button v-if="isMobile" :class="props.isFixed && 'fixed'" class="menu-button" @click="handleMenuShow">
        Menu
      </button>
      <nav v-if="showMenu || !isMobile" class="nav">
        <ul class="nav-list">
          <li v-for="link in links" :key="link.id" class="list-item" @click="hideMenu">
            <nuxt-link :class="[link.modifier, props.isFixed && 'fixed']" :to="link.to" class="nav-link">
              {{ link.name }}
            </nuxt-link>
          </li>
        </ul>
      </nav>
    </container>
  </header>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from '@vue/composition-api'
import container from '~/layouts/container.vue'
import { Link } from '~/models/definitions'

export default defineComponent({
  components: {
    container
  },
  props: {
    isFixed: Boolean
  },
  setup (props, ctx) {
    const links: Link[] = [
      {
        id: 0,
        name: 'Home',
        to: '/'
      },
      {
        id: 1,
        name: 'About',
        to: '/about'
      },
      {
        id: 2,
        name: 'Menu',
        to: '/menu'
      },
      {
        id: 3,
        name: 'Stories',
        to: '/stories'
      },
      {
        id: 4,
        name: 'Contact',
        to: '/contact'
      },
      {
        id: 5,
        name: 'Book a table',
        to: '/reservation',
        modifier: 'button'
      }]

    const showMenu = ref(false)
    const handleMenuShow = (): void => {
      showMenu.value = !showMenu.value
    }
    const hideMenu = (): void => {
      showMenu.value = false
    }

    const isMobile = computed(() => ctx.root.$store.getters['viewport/isMobile'])

    return {
      links, showMenu, handleMenuShow, hideMenu, isMobile, props
    }
  }
})
</script>

<style scoped lang="scss">
  .wrapper {
    background-color: #000;

    &.fixed {
      background-color: #fff;
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, .1);
    }
  }

  .container {
    display: grid;
    grid-template-columns: 1fr 80px;
    padding: 1rem;
    color: #fff;

    &.fixed {
      color: #000;
      padding: 0 1rem;
    }
  }

  .nav {
    grid-column: span 2;
  }

  .nav-list {
    display: flex;
    flex-direction: column;
    padding-bottom: .8rem;
  }

  .menu-button {
    height: 100%;
    font-size: 1.6rem;
    background-color: transparent;
    text-transform: uppercase;
    letter-spacing: .1rem;
    color: rgba(255, 255, 255, .5);
    cursor: pointer;

    &.fixed {
      color: rgba(0, 0, 0, .5);
    }
  }

  .logo-link {
    width: min-content;
    font-size: 2rem;
    font-weight: 900;
    padding: .9rem 0;
  }

  .nav-link {
    font-size: 1.4rem;
    line-height: 2;
    padding: 1.4rem 0;
  }

  .button {
    background-color: #c8a97e;
    padding: 1.5rem;
    border-radius: .5rem;

    &.fixed {
      border-radius: 0;
      color: #fff;
    }
  }

  @media (min-width: 768px) {
    .wrapper {
      background-color: transparent;
      margin-bottom: 1rem;
      border-bottom: 1px solid rgba(255, 255, 255, .1);

      &.fixed {
        border-bottom: none;
      }
    }

    .container {
      align-items: center;
      grid-template-columns: 1fr max-content;
    }

    .nav {
      grid-column: span 1;
    }

    .nav-list {
      flex-direction: row;
      align-items: center;
      padding-bottom: 0;
    }

    .nav-link {
      padding: 1.28rem 2rem;
    }
  }
</style>
