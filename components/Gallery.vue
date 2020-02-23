<template>
  <section class="gallery">
    <img v-for="n in 6" :key="n" :src="`images/insta-${n}.jpg`" class="image" alt="Instagram photo">
    <a />
  </section>
</template>

<style scoped lang="scss">
  .gallery {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    width: 100%;
    height: 25rem;
  }

  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (min-width: 768px) {
    .gallery {
      height: 100%;
    }
  }
</style>
