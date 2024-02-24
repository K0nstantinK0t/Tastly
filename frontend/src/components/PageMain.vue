<script setup>
import InformationSlide from "@/components/InformationSlide.vue";
import InformationBlockRight from "@/components/InformationBlockRight.vue";
import InformationBlockLeft from "@/components/InformationBlockLeft.vue";
</script>

<template>
  <main class="container mt-2 px-0">
    <InformationSlide/>

    <h4 class="text-center fs-3 fw-bold my-5">
      Наши преимущества
    </h4>
    <section class="row gy-3 row-cols-1">
      <section class="col">
      <InformationBlockRight img-src="/src/assets/arg1.png"
                             desc="Овощи"
                             text="Мы используем только свежие и отборные продукты."/>
      </section>
      <section class="col">
      <InformationBlockLeft img-src="/src/assets/arg2.png"
                            desc="блюдо"
                            text="Наши сотрудники - профессионалы своего дела.
                            Приготовить вкусное еду для вас - это наша приоритетная цель."/>
      </section>
      <section class="col">
        <InformationBlockRight img-src="/src/assets/arg3.png"
                               desc="Гитарист"
                               text="У нас вы можете заказать музыкантов,
                               чтобы приятно провести время."/>
      </section>
    </section>
    <section class="bg-secondary-subtle text-center my-3 py-3 mx-0">
      <p class="fst-italic fs-4 w-50 mx-auto">
        Вы можете сделать заказ сейчас, выбрав блюда из меню, или позвонив по телефону
        <br />
        +7 (666) 666-66-66
      </p>
      <button type="button" class="btn btn-primary fs-4 p-3">Перейти в меню</button>
    </section>
  </main>
</template>

<style scoped>
</style>