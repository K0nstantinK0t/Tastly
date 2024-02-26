<script setup>

</script>

<template>
  <header>
    <section class="row justify-content-between">
      <section class="col-2">
          <img src="../assets/logo.png"  class="img-fluid"  alt="logo"
               @click="this.$router.push({ name: 'index' })"/>
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
              <img src="../assets/user.png"  class="img-fluid me-5" alt="user"
                   @click="this.$router.push({ name: 'registration' })">
              <img src="../assets/bag.png"  class="img-fluid" alt="bag"/>
          </section>
        </section>
        <hr />
        <nav class="container ps-0 pe-0">
            <button type="button" class="btn btn-light col-3 border border-1"
                    @click="this.$router.push({ name: 'index' })">
              О кафе
            </button>
            <button type="button" class="btn btn-light col-3 border border-1"
                    @click="this.$router.push({ name: 'menu' })">
              Меню
            </button>
            <button type="button" class="btn btn-light col-3 border border-1"
                    @click="this.$router.push({ name: 'contacts' })">
              Контакты
            </button>
            <button type="button" class="btn btn-light col-3 border border-1"
                    @click="this.$router.push({ name: 'vacations' })">
              <a>Вакансии</a>
            </button>
        </nav>
      </section>
    </section>
  </header>
</template>

<style scoped>

</style>