<template>
  <div class="capsule">
    <slot />
  </div>
</template>

<style scoped lang="scss">
  .capsule {
    max-width: 380px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  @media (min-width: 420px) {
    .capsule {
      max-width: 400px;
    }
  }

  @media (min-width: 480px) {
    .capsule {
      max-width: 420px;
    }
  }

  @media (min-width: 520px) {
    .capsule {
      max-width: 480px;
    }
  }

  @media (min-width: 620px) {
    .capsule {
      max-width: 580px;
    }
  }

  @media (min-width: 760px) {
    .capsule {
      max-width: 700px;
    }
  }

  @media (min-width: 900px) {
    .capsule {
      max-width: 800px;
    }
  }

  @media (min-width: 1050px) {
    .capsule {
      max-width: 900px;
    }
  }

  @media (min-width: 1240px) {
    .capsule {
      max-width: 1040px;
    }
  }

  @media (min-width: 1360px) {
    .capsule {
      max-width: 1140px;
    }
  }
</style>
