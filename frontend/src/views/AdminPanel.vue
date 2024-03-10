<script setup>

import PointsPanel from "@/components/PointsPanel.vue";
import axios from "axios";

axios.get('https://api.tastly.com/user').then((response)=>console.log(response))
</script>

<template>
  <h3 class="text-center my-5">
    Панель администратора
  </h3>
  <PointsPanel />
</template>

<style scoped>

</style>