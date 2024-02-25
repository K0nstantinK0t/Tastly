<script setup>
import telegram from '@/assets/telegram.png?url'
import vk from '@/assets/vk.png?url'
</script>

<template>
<section class="bg-secondary text-white mb-0 px-4 pb-2 pt-3 fs-6">
  <section class="row row-cols-2">
    <section class="col">
      Tastly - кафе, которое вы заслуживаете
    </section>
    <section class="col">
      <section class="text-end">
        <p>г.Чернушка, Банковский пер., 7</p>
        <p>+7 (666) 666-66-66</p>
      </section>
    </section>
  </section>
  <img alt="telegram" :src="telegram" class="img-fluid"/>
  <img alt="vk" :src="vk" class="img-fluid"/>
  <p class="text-center p-0 m-0">
    2024 &copy; Кафе Tastly 2024
  </p>
</section>
</template>

<style scoped>
</style>