<template>
  <section class="section">
    <ReservationForm class="form" secondary />
  </section>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import ReservationForm from '~/components/ReservationForm.vue'

export default defineComponent({
  components: {
    ReservationForm
  }
})
</script>

<style scoped lang="scss">
  .section {
    background-image: url('~assets/images/bg-3.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    display: grid;
    justify-items: center;
    padding: 8rem 0;
  }

  @media (min-width: 520px) {
    .section {
      padding: 10rem 0;
    }

    .form {
      width: 80%;
      max-width: 67rem;
    }
  }

  @media (min-width: 900px) {
    .section {
      grid-template-columns: 4fr 1fr;
    }
  }
</style>
