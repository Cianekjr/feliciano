<template>
  <ul class="wrapper">
    <li class="item">
      <LinkButton
        reverse
        :to="{ path: 'stories', query: { page: Number(activePage) - 1 }}"
        class="switch-button"
        :disabled="Number(activePage) === 1"
      >
        <svg
          class="arrow"
          height="19px"
          version="1.1"
          viewBox="0 0 512 512"
          width="19px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="352,115.4 331.3,96 160,256 331.3,416 352,396.7 201.5,256 " />
        </svg>
      </LinkButton>
    </li>
    <li v-for="n in pages" :key="n" class="item">
      <LinkButton
        reverse
        :to="{ path: 'stories', query: { page: n }}"
        class="switch-button"
        :active="Number(activePage) === n"
      >
        {{ n }}
      </LinkButton>
    </li>
    <li class="item">
      <LinkButton
        reverse
        :to="{ path: 'stories', query: { page: Number(activePage) + 1 }}"
        class="switch-button"
        :disabled="Number(activePage) === Number(pages)"
      >
        <svg
          class="arrow"
          version="1.1"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="160,115.4 180.7,96 352,256 180.7,416 160,396.7 310.5,256 " />
        </svg>
      </LinkButton>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, SetupContext, computed } from '@vue/composition-api'
import LinkButton from '~/components/LinkButton.vue'

export default defineComponent({
  components: {
    LinkButton
  },
  setup (props: any, ctx: SetupContext) {
    const { $store } = ctx?.root

    const pages = computed(() => $store.getters['articles/pages'])

    const activePage = computed(() => ctx.root.$route.query.page || '1')

    return {
      pages, activePage
    }
  }
})
</script>

<style scoped lang="scss">
  .wrapper {
    display: grid;
    grid-auto-flow: column;
    column-gap: .6rem;
    width: max-content;
  }

  .switch-button {
    width: 4rem;
    height: 4rem;
    padding: 0;
    border-radius: .5rem;
  }

  .arrow {
    height: 2rem;
    width: 2rem;
  }
</style>
