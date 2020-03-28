<template>
  <div class="wrapper">
    <Header :bg-index="4" title="Contact" half />
    <container class="container">
      <Map />
      <ContactForm />
    </container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import container from '~/layouts/container.vue'
import Header from '~/components/Header.vue'
import ContactForm from '~/components/ContactForm.vue'
import Map from '~/components/Map.vue'

export default defineComponent({
  components: {
    container,
    Header,
    ContactForm,
    Map
  }
})
</script>

<style scoped lang="scss">
  .container {
    display: grid;
    gap: 2rem;
    padding: 5rem 1rem 0;
  }

  @media (min-width: 768px) {
    .container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 5rem;
      padding: 0 1rem;
    }
  }
</style>
