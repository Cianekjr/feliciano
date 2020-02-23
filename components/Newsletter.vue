<template>
  <form @submit.prevent="submitNewsletter">
    <Input
      store="newsletter"
      name="email"
      commit="setEmail"
      type="email"
      placeholder="Enter email address"
      class="input"
      required
    />
    <Button type="submit" name="newsletter">
      Subscribe
    </Button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import Input from '~/components/Input.vue'
import Button from '~/components/Button.vue'

export default defineComponent({
  components: {
    Input,
    Button
  },
  setup (_, ctx) {
    const submitNewsletter = () => {
      ctx.root.$store.dispatch('newsletter/sendNewsletter')
    }
    return { submitNewsletter }
  }
})
</script>

<style scoped lang="scss">
  .input {
    margin-bottom: .8rem;
  }
</style>
