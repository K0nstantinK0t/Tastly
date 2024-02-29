<script setup>

const name = "name"
const points = 0
</script>

<template>
  <h3 class="text-center my-5">
    Личный кабинет
  </h3>
  <section class="bg-secondary-subtle text-center my-3 py-3 mx-0">
    <p class="fs-4 w-50 mx-auto">
      {{name}}, у вас
      <br />
      {{points}} баллов.
      <br />
      Вы можете потратить их для оплаты не более 50% заказа,
      для этого просто скажите номер телефона,
      привязанный к вашему аккаунту

    </p>
  </section>
</template>

<style scoped>

</style>