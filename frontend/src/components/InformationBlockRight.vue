<script setup>
defineProps({
  text: String,
  imgSrc: String,
})
</script>

<template>
    <section class="row bg-secondary-subtle row-cols-2 justify-content-around px-0">
      <p class="col my-auto text-center fst-italic fs-3">{{text}}</p>
      <img :src="imgSrc" class="col mx-0 px-0" alt="Овощи">
    </section>
</template>

<style scoped>
</style>