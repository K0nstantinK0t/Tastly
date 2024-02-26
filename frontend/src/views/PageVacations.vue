<script setup>

</script>

<template>
  <h4 class="text-center fs-3 fw-bold my-5">
    Вакансии
  </h4>
  <section class="container bg-secondary-subtle text-center my-3 py-3">
    <section class="row row-cols-3">
      <section class="col"></section>
      <form class="col text-center">
        <label for="fio">
          ФИО:
        </label>
        <br />
        <input type="text" id="fio"  class="form-control" placeholder="Введите ФИО" />
        <label for="email">
          Электронная почта:
        </label>
        <br />
        <input type="text" id="email"  class="form-control" placeholder="Введите адрес  электронной почты" />
        <label for="number">
          Номер телефона:
        </label>
        <br />
        <input type="text" id="number"  class="form-control" placeholder="Введите номер телефона" />
        <label for="vacation">
          Желаемая должность:
        </label>
        <br />
        <select id="vacation"  class="form-control">
          <option>Нет доступных вакансий</option>
        </select>
        <button type="submit" class="btn btn-primary mt-2">Откликнуться на вакансию</button>
      </form>
    </section>

    <section class="col"></section>
  </section>
</template>

<style scoped>

</style>