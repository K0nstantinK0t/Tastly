<script setup>
import {useRouter} from "vue-router";
import nav from "@/Modules/nav.js";
import store from "@/store.js";
const router = useRouter()

</script>

<template>
  <header>
    <section class="row justify-content-between">
      <section class="col-2">
          <img src="../assets/logo.png"  class="img-fluid"  alt="logo"
               @click="router.push({ name: 'index' })"/>
      </section>
      <section class="col ">
        <p class="pt-2 fs-4">
          г.Чернушка, Банковский пер., 7
        </p>
        <section class="row justify-content-between">
          <section class="col-3 fs-4">
            +7 (666) 666 66-66
          </section>
          <section class="col-3 text-end">
            <section class="dropdown mb-1">
              <img src="../assets/user.png"  class="img-fluid dropdown-toggle"
                   alt="user" data-bs-toggle="dropdown" aria-expanded="false">
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" v-if="store.role==='guest'"
                       @click="nav.goToUserCabinet(router)">
                  Войти/Зарегистрироваться</a></li>
                <li><a class="dropdown-item" v-if="store.role!=='guest'"
                       @click="nav.goToUserCabinet(router)">
                  Личный кабинет</a></li>
                <li><a class="dropdown-item" v-if="store.role!=='guest'"
                       @click="nav.logOut(router)">
                  Выйти из аккаунта</a></li>
              </ul>
            </section>
              <img src="../assets/bag.png"  class="img-fluid" alt="bag"/>
          </section>
        </section>
        <hr />
        <nav class="container ps-0 pe-0">
            <button type="button" class="btn btn-light col-3 border border-1"
                    @click="router.push({ name: 'index' })">
              О кафе
            </button>
            <button type="button" class="btn btn-light col-3 border border-1"
                    @click="router.push({ name: 'menu' })">
              Меню
            </button>
            <button type="button" class="btn btn-light col-3 border border-1"
                    @click="router.push({ name: 'contacts' })">
              Контакты
            </button>
            <button type="button" class="btn btn-light col-3 border border-1"
                    @click="router.push({ name: 'vacations' })">
              <a>Вакансии</a>
            </button>
        </nav>
      </section>
    </section>
  </header>
</template>

<style scoped>

</style>