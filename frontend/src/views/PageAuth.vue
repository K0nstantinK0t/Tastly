<script setup>
import {reactive, ref} from "vue";
import config from "@/config.js"
import axios from "axios";
import store from "@/store.js";
import {useRouter} from 'vue-router'


const router = useRouter()
const errors = reactive([])
const email = ref('')
const password = ref('')

function submitRegistrationForm(emit) {
  errors.length = 0
  if (password.value && email.value) {
    axios.post(config.authUrl, {
      email: email.value,
      password: password.value,
    }).then(function (response) {
      store.token= response.data.token
      console.log(response.data)
      console.log(store.token)
    }).catch((error) => {

      console.log(error)
      for (let i in error.response.data.errors)
        errors.push(error.response.data.errors[i][0])
    })
    emit.preventDefault()
    if(!errors.length){
      router.push({ name: 'pc' })
      return true
    }
  } else {
    {
      errors.push("Все поля должны быть заполнены")
      emit.preventDefault();
    }
  }
  return false
}
</script>

<template>
  <h4 class="text-center fs-3 fw-bold my-5">
    Авторизация
  </h4>
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
        <label for="email">
          Почта:
        </label>
        <br/>
        <input type="text" id="email" class="form-control"
               placeholder="Введите имя" name="email" v-model="email"/>
        <br/>
        <label for="password">
          Пароль:
        </label>
        <br/>
        <input name="password" type="password" id="password"
               class="form-control" placeholder="Введите пароль"
               v-model="password"/>
        <button type="submit" class="btn btn-primary mt-2">Войти в аккаунт</button>
      </form>
    </section>
    <section class="col"></section>
  </section>
</template>

<style scoped>

</style>