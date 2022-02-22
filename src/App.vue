<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "@/store";
import { week } from "@/constants/Date.js";
import { storeToRefs } from "pinia";
import Rainy from "@/components/Rainy.vue";
import Clear from "@/components/Clear.vue";
import Cloudy from "@/components/Cloudy.vue";
import Sunny from "@/components/Sunny.vue";

const nowWeather = Rainy;
const weekData = computed(() => {
  return [1, 2, 3, 4, 5, 6, 7];
});
const store = useStore();
const { state } = storeToRefs(store);
const getTime = () => {
  const day = new Date().getDay();
  const hour = new Date().getHours();
  const minutes = new Date().getMinutes();
  return `${week[day]} ${hour}:${minutes}`;
};
onMounted(() => {
  store.getWeather();
});
</script>

<template>
  <main
    class="m-auto h-[400px] w-[400px] rounded-lg bg-gradient-to-t from-[#1D678F] to-[#19283D] text-white"
  >
    <section class="h-[100px]">
      <div
        class="moom t-[30px] l-[10px] relative h-[80px] w-[80px] rounded-full shadow-[15px_10px_#fa0]"
      ></div>
    </section>
    <section class="flex pt-4">
      <div class="w-1/2 pl-6 text-4xl">
        <p>20<span>~</span> 22°C</p>
        <p class="text-xl">{{ getTime() }}</p>
      </div>
      <div class="w-1/2 text-center">
        <component :is="nowWeather" :size="'w-36 h-36 mx-auto'" />
        <p>晴時多雲</p>
      </div>
    </section>
    <!-- <rainy /> -->
    <!-- <Cloudy /> -->
    <!-- <Clear />
    <Sunny /> -->
    <ul class="flex">
      <li v-for="(vo, i) in weekData" :key="i">
        <component :is="nowWeather" :size="'w-12 h-12'" />
        <p>{{ vo }}</p>
      </li>
    </ul>
  </main>
</template>

<style></style>
