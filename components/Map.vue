<template>
  <section class="map">
    <client-only>
      <l-map :zoom="15" :center="[52.2418333,21.028638]">
        <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
        <l-marker :lat-lng="[52.2418333,21.028638]" />
      </l-map>
    </client-only>
  </section>
</template>

<style scoped lang="scss">
  .map {
    width: 100%;
    height: 100%;
    min-height: 50vh;
    z-index: 0;
  }
</style>
