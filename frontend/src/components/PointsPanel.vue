<script setup>
import {reactive, ref} from "vue";
import config from "@/config.js"
import axios from "axios";

const errors = reactive([])
const phone = ref('')
const sum = ref('')
const status = reactive([])

function submitRegistrationForm(emit) {

  emit.preventDefault();
  errors.length = 0
  if (phone.value && sum.value) {
    axios.post(config.addPointsUrl, {
      phone: phone.value,
      sum: sum.value,
    },{
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then(function (response) {
      status.push(response.data.message)
    }).catch((error) => {
      for (let i in error.response.data.errors)
        errors.push(error.response.data.errors[i][0])
    })
  } else {
    {
      errors.push("Все поля должны быть заполнены")
    }
  }
  return false
}
</script>

<template>
  <section class="container bg-secondary-subtle text-center my-3 py-3">
    <section class="row row-cols-3">
      <section class="col"></section>
      <form class="col text-center" @submit="submitRegistrationForm"
            action="#"
            method="post">
        <div class="alert alert-danger" role="alert" v-if="errors.length">
          <p v-for="error in errors">
            {{ error }}
          </p>
        </div>
        <div class="alert alert-primary" role="alert" v-if="status.length">
          <p v-for="message in status">
            {{ message }}
          </p>
        </div>
        <label for="email">
          Телефон покупателя:
        </label>
        <br/>
        <input type="text" id="phone" class="form-control"
               placeholder="Введите телефон покупателя" name="email" v-model="phone"/>
        <br/>
        <label for="password">
          Сумма покупки:
        </label>
        <br/>
        <input name="sum" type="text" id="sum"
               class="form-control" placeholder="Введите сумму покупки"
               v-model="sum"/>
        <button type="submit" class="btn btn-primary mt-2">Подтвердить покупку</button>
      </form>
    </section>
    <section class="col"></section>
  </section>
</template>

<style scoped>

</style>