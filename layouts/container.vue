<template>
  <div class="container">
    <slot />
  </div>
</template>

<style scoped lang="scss">
  .container {
    max-width: 380px;
    margin: 0 auto;
  }

  @media (min-width: 420px) {
    .container {
      max-width: 400px;
    }
  }

  @media (min-width: 480px) {
    .container {
      max-width: 420px;
    }
  }

  @media (min-width: 520px) {
    .container {
      max-width: 480px;
    }
  }

  @media (min-width: 620px) {
    .container {
      max-width: 580px;
    }
  }

  @media (min-width: 760px) {
    .container {
      max-width: 700px;
    }
  }

  @media (min-width: 900px) {
    .container {
      max-width: 800px;
    }
  }

  @media (min-width: 1050px) {
    .container {
      max-width: 900px;
    }
  }

  @media (min-width: 1240px) {
    .container {
      max-width: 1040px;
    }
  }

  @media (min-width: 1360px) {
    .container {
      max-width: 1140px;
    }
  }
</style>
