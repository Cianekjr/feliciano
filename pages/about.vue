<template>
  <div class="wrapper">
    <Header :bg-index="2" title="About" half />
    <Services class="services" />
    <ReservationSection />
    <CustomersCarousel />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

import Header from '~/components/Header.vue'
import Services from '~/components/Services.vue'
import ReservationSection from '~/components/ReservationSection.vue'
import CustomersCarousel from '~/components/CustomersCarousel.vue'

export default defineComponent({
  components: {
    Header,
    Services,
    ReservationSection,
    CustomersCarousel
  }
})
</script>

<style>
  .services {
    background-color: #fafafa;
  }
</style>
