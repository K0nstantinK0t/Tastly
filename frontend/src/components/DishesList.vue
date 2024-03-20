<script setup>
import {reactive} from "vue";
import config from "@/config.js";
import axios from "axios";

const dishes = reactive([])
dishes.value = axios.get(config.getDishesUrl).then(function (response) {
  const data = response.data
  for (const [, value] of Object.entries(data[0])) {
    dishes.push(value)
  }
})

</script>

<template>
  <section class="container my-2">
    <section class="row row-cols-auto gy-5 justify-content-center">
      <section v-if="dishes.length" class="col" v-for="dish in dishes">
        <div class="card" style="width: 20rem;">
          <img :src="dish.photo" class="card-img-top" :alt="dish.header">
          <div class="card-body">
            <h5 class="card-title text-center">{{ dish.header }} {{ dish.price }}</h5>
            <h5 class="card-title text-center">{{ dish.price }} руб.</h5>
            <p class="card-text  text-center">{{ dish.description }}</p>
          </div>
        </div>
      </section>
    </section>
  </section>
</template>

<style scoped>

</style>