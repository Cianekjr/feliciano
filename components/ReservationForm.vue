<template>
  <section class="wrapper-form" :class="{ secondary: props.secondary }">
    <Heading heading="Book a table" subheading="Make Reservation" class="title" />
    <form
      ref="form"
      class="reservation-form"
      @submit.prevent="makeReservation"
    >
      <Input
        store="reservation"
        name="name"
        label="Name"
        commit="setName"
        placeholder="Your Name"
        theme="white"
        required
      />
      <Input
        store="reservation"
        name="email"
        type="email"
        label="Email"
        commit="setEmail"
        placeholder="Your Email"
        theme="white"
        required
      />
      <Input
        store="reservation"
        name="phone"
        label="Phone"
        commit="setPhone"
        placeholder="Phone"
        theme="white"
        required
      />
      <Input
        store="reservation"
        name="date"
        label="Date"
        commit="setDate"
        placeholder="Date"
        theme="white"
        required
      />
      <Input
        store="reservation"
        name="time"
        label="Time"
        commit="setTime"
        placeholder="Time"
        theme="white"
        required
      />
      <Input
        store="reservation"
        name="person"
        type="number"
        label="Person"
        commit="setPerson"
        placeholder="Person"
        theme="white"
        required
      />
      <Button type="submit" name="make a reservation" class="button">
        Make a Reservation
      </Button>
    </form>
  </section>
</template>

<script lang="ts">
import { defineComponent, SetupContext } from '@vue/composition-api'
import Heading from '~/components/Heading.vue'
import Input from '~/components/Input.vue'
import Button from '~/components/Button.vue'

export default defineComponent({
  components: {
    Heading,
    Input,
    Button
  },
  props: {
    secondary: {
      type: Boolean,
      default: false
    }
  },
  setup (props: any, ctx: SetupContext) {
    const { $store, $axios } = ctx?.root
    const makeReservation = () => {
      $store.dispatch('reservation/makeReservation', {
        $axios
      })
    }
    return { makeReservation, props }
  }
})
</script>

<style scoped lang="scss">
  .wrapper-form {
    background-color: #fff;
    padding: 1rem 2rem 4rem;
    width: 100%;
  }

  .reservation-form {
    display: grid;
    row-gap: 1.5rem;
  }

  .title {
    margin-bottom: 2.4rem;
  }

  .secondary {
    &.wrapper-form {
      padding-top: 0;
    }

    .title {
      transform: translateY(-30%);
      margin-bottom: 0;
    }
  }

  @media (min-width: 520px) {
    .wrapper-form {
      padding: 2rem 4rem 5rem;
    }

    .secondary {
      &.wrapper-form {
        padding-top: 0;
      }
    }
  }

  @media (min-width: 700px) {
    .reservation-form {
      grid-template-columns: repeat(2, 1fr);
      column-gap: 3rem;
      justify-items: center;
    }

    .button {
      grid-column: span 2;
      max-width: max-content;
      padding: 0 3rem;
    }
  }
</style>
