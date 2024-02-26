<script setup>
// import config from "@/config.js";
import {ref} from "vue";

let errors = []
const name = ref('')
const email = ref('')
const number = ref('')
const password = ref('')
const passwordRepeat = ref('')

function submitRegistrationForm() {
  if (name.value && email.value && password.value && passwordRepeat.value) {

    console.log('пздц')
    return true
  } else {
    {
      errors.push("Все поля должны быть заполнены")
      console.log(errors)
      return false
    }
  }
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
<!--            :action="config.serverUrl"-->
<!--            method="post">-->
        <label for="name">
          Имя:
        </label>
        <br />
        <input type="text" id="name"  class="form-control"
               placeholder="Введите имя" name="fio" v-model="name"/>
        <label for="email">
          Электронная почта:
        </label>
        <br />
        <input name="email" type="text" id="email"
               class="form-control" placeholder="Введите адрес  электронной почты"
               v-model="email"/>
        <label for="number">
          Номер телефона:
        </label>
        <br />
        <input name="number" type="text" id="number"
               class="form-control" placeholder="Введите номер телефона"
               v-model="number"/>
        <label for="password">
          Пароль:
        </label>
        <br />
        <input name="password" type="password" id="password"
               class="form-control" placeholder="Введите пароль"
               v-model="password"/>
        <label for="password-repeat">
          Пароль ещё раз:
        </label>
        <br />
        <input name="passwordRepeat" type="password" id="password-repeat"
               class="form-control" placeholder="Повторите пароль"
               v-model="passwordRepeat"/>
        <button type="submit" class="btn btn-primary mt-2">Зарегистрироваться</button>
      </form>
    </section>

    <section class="col"></section>
  </section>
</template>

<style scoped>

</style>