<script setup>
import {reactive, ref} from "vue";
import config from "@/config.js"
import axios from "axios";
import store from "@/store.js";
import {useRouter} from 'vue-router'
import nav from "@/Modules/nav.js";

const router = useRouter()
const errors = reactive([])
const name = ref('')
const email = ref('')
const number = ref('')
const password = ref('')
const passwordRepeat = ref('')

async function submitRegistrationForm(emit) {
  emit.preventDefault()
  errors.length = 0
  if (name.value && email.value && password.value && passwordRepeat.value
      && number.value) {
    checkPasswordEqual(password.value, passwordRepeat.value, emit)
    await axios.post(config.registrationUrl, {
      name: name.value,
      email: email.value,
      password: password.value,
      "phone_number": number.value,
    })
        .catch((error) => {
          console.log('error')
          for (let i in error.response.data.errors)
            errors.push(error.response.data.errors[i][0])
          return false
        })
        .then(function (response) {
          store.token = response.data.token
          store.role = response.data.role
          console.log(response.data)
          if (!errors.length) {
            nav.goToUserCabinet(router)
            return true

          }
        })
  } else {
    errors.push("Все поля должны быть заполнены")
  }
  console.log(errors)
  return false
}

function checkPasswordEqual(InputPassword, InputRepeatPassword, emit) {
  if (InputPassword === InputRepeatPassword) {
    return true;
  }
  errors.push("Пароли должны совпадать")
  emit.preventDefault();
  return false
}
</script>

<template>
  <h4 class="text-center fs-3 fw-bold my-5">
    Регистрация
  </h4>
  <section class="container bg-secondary-subtle text-center my-3 py-3">
    <section class="row row-cols-3">
      <section class="col"></section>
      <form class="col text-center" @submit="submitRegistrationForm">
        <section class="alert alert-danger" role="alert" v-if="errors.length">
          <p v-for="error in errors">
            {{ error }}
          </p>
        </section>
        <label for="name">
          Имя:
        </label>
        <br/>
        <input type="text" id="name" class="form-control"
               placeholder="Введите имя" name="fio" v-model="name"/>
        <label for="email">
          Электронная почта:
        </label>
        <br/>
        <input name="email" type="text" id="email"
               class="form-control" placeholder="Введите адрес  электронной почты"
               v-model="email"/>
        <label for="number">
          Номер телефона:
        </label>
        <br/>
        <input name="number" type="text" id="number"
               class="form-control" placeholder="Введите номер телефона"
               v-model="number"/>
        <label for="password">
          Пароль:
        </label>
        <br/>
        <input name="password" type="password" id="password"
               class="form-control" placeholder="Введите пароль"
               v-model="password"/>
        <label for="password-repeat">
          Пароль ещё раз:
        </label>
        <br/>
        <input name="passwordRepeat" type="password" id="password-repeat"
               class="form-control" placeholder="Повторите пароль"
               v-model="passwordRepeat"/>
        <button type="submit" class="btn btn-primary mt-2">Зарегистрироваться</button>
      </form>
    </section>
    <router-link :to="{name: 'auth'}" >Уже есть аккаунт? Авторизоваться</router-link>
    <section class="col"></section>
  </section>
</template>

<style scoped>

</style>