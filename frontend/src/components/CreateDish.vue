<script setup>
import {reactive, ref} from "vue";
import axios from "axios";
import config from "@/config.js";
const errors = reactive([])
const header = ref('')
const description = ref('')
const price= ref('')
const status = reactive([])
const imgInput = ref('')

function updateImgInput(event){
  if (event.target.files.length) {
    const selectedFile = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.addEventListener('load', (e) => {
      imgInput.value = e.target.result;
    });
  }
}
async function submitAddDishForm(emit) {
  emit.preventDefault()
  console.log(imgInput)
  errors.length = 0
  if (header.value && description.value && price.value && imgInput.value) {
    await axios.post(config.createDishUrl, {
      header: header.value,
      description: description.value,
      price: price.value,
      photo: imgInput.value
    })
        .catch((error) => {
          console.log('error')
          for (let i in error.response.data.errors)
            errors.push(error.response.data.errors[i][0])
          return false
        })
        .then(function (response) {
          status.push(response.data.message)
          console.log(response.data.message)
        })
  } else {
    errors.push("Все поля должны быть заполнены")
  }
  console.log(errors)
  return false
}
</script>

<template>

  <p class="d-inline-flex ga ">
    <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseForm" aria-expanded="false" aria-controls="collapseExample">
      Добавить блюдо
    </button>
  </p>
  <section class="collapse" id="collapseForm">
    <form class="card card-body" @submit="submitAddDishForm">
      <section class="alert alert-primary mb-0" role="alert" v-if="status.length">
        <p v-for="message in status">
          {{ message }}
        </p>
      </section>
        <section class="alert alert-danger mb-0" role="alert" v-if="errors.length">
          <p v-for="error in errors">
            {{ error }}
          </p>
        </section>
        <label for="header" class="mb-2">
          Заголовок:
        </label>
        <input type="text" id="header" class="form-control mb-2"
               placeholder="Введите имя" name="header" v-model="header"/>
        <label for="description" class="mb-2">
          Описание:
        </label>
        <input name="description" type="text" id="description"
               class="form-control mb-2" placeholder="Описание"
               v-model="description"/>
        <label for="price" class="mb-2">
          Цена
        </label>
        <input name="price" type="number" id="price"
               class="form-control mb-2" placeholder="Введите цену"
               v-model="price"/>
        <input type="file" class="form-control mb-2" id="imgInput" v-on:change="updateImgInput">
      <button class="btn btn-primary" type="submit">Добавить блюдо</button>
    </form>
  </section>
</template>

<style scoped>

</style>