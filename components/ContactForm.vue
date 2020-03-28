<template>
  <form
    class="form"
    @submit.prevent="sendMessage"
  >
    <h3 class="heading">
      Contact us
    </h3>
    <Input
      store="contact"
      name="name"
      commit="setName"
      placeholder="Your Name"
      theme="white"
      required
    />
    <Input
      store="contact"
      name="email"
      commit="setEmail"
      type="email"
      placeholder="Your email"
      theme="white"
      required
    />
    <Input
      store="contact"
      name="Subject"
      commit="setSubject"
      placeholder="Subject"
      theme="white"
      required
    />
    <Input
      tag="textarea"
      store="contact"
      name="Message"
      commit="setMessage"
      placeholder="Message"
      theme="white"
      required
    />
    <Button type="submit" name="send message" class="button">
      Send Message
    </Button>
  </form>
</template>

<script lang="ts">
import { defineComponent, SetupContext } from '@vue/composition-api'
import Input from '~/components/Input.vue'
import Button from '~/components/Button.vue'

export default defineComponent({
  components: {
    Input,
    Button
  },
  setup (_: any, ctx: SetupContext) {
    const { $store, $axios } = ctx?.root
    const sendMessage = () => {
      $store.dispatch('contact/sendMessage', {
        $axios
      })
    }
    return { sendMessage }
  }
})
</script>

<style scoped lang="scss">
  .form {
    display: grid;
    row-gap: 1.5rem;
    padding: 5rem 0;
  }

  .heading {
    font-size: 2.4rem;
    color: #333;
    margin-bottom: 3rem;
  }
</style>
