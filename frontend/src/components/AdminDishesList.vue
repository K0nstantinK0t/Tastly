<script setup>
import {reactive} from "vue";
import config from "@/config.js";
import axios from "axios";

const dishes = reactive([])
const status = reactive([])
dishes.value = axios.get(config.getDishesUrl).then(function (response) {
  const data = response.data
  console.log(data)
  for (const [key, value] of Object.entries(data[0])) {
    console.log(key, value)
    dishes.push(value)
  }
})

function deleteDish(id, key){
  axios.delete(config.deleteDishUrl(id))
      .then(function (response){
        console.log(response)
        status.push(response.data.message)
        dishes.splice(key,1)
      })
}
</script>

<template>
  <section class="container my-2">
    <section class="alert alert-primary mb-0" role="alert" v-if="status.length">
      <p v-for="message in status">
        {{ message }}
      </p>
    </section>
    <section class="row row-cols-auto gy-5 justify-content-center">
      <section class="col" v-for="(dish,key) in dishes" :key="dish.id">
        <div class="card" style="width: 20rem;">
          <img :src="dish.photo" class="card-img-top" :alt="dish.header">
          <div class="card-body">
            <h5 class="card-title text-center">{{ dish.header }} {{ dish.price }}</h5>
            <p class="card-text  text-center">{{ dish.description }}</p>
          </div>
          <button class="btn btn-danger" @click="deleteDish(dish.id, key)">Удалить</button>
        </div>
      </section>
    </section>
  </section>
</template>

<style scoped>

</style>