<template>
  <header :class="props.isFixed && 'fixed'" class="wrapper">
    <container :class="props.isFixed && 'fixed'" class="container">
      <h1 @click="hideMenu">
        <nuxt-link to="/" class="logo-link">
          Feliciano
        </nuxt-link>
      </h1>
      <button v-if="isMobile" @click="handleMenuShow" :class="props.isFixed && 'fixed'" class="menu-button">
        Menu
      </button>
      <nav v-if="showMenu || !isMobile" class="nav">
        <ul class="nav-list">
          <li @click="hideMenu" v-for="link in links" class="list-item">
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
import { computed, createComponent, ref } from '@vue/composition-api'
import { viewportStore } from '~/store'
import container from '~/layouts/container.vue'

interface Link {
  name: String,
  to: String,
  modifier?: String
}

export default createComponent({
  components: {
    container
  },
  props: {
    isFixed: Boolean
  },
  setup (props) {
    const links: Link[] = [{
      name: 'Home',
      to: '/'
    },
    {
      name: 'About',
      to: '/about'
    },
    {
      name: 'Menu',
      to: '/menu'
    },
    {
      name: 'Stories',
      to: '/stories'
    },
    {
      name: 'Contact',
      to: '/contact'
    },
    {
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

    const isMobile = computed(() => viewportStore.isMobile)

    return {
      links, showMenu, handleMenuShow, hideMenu, viewportStore, isMobile, props
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
    padding: 1rem 1rem;
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
