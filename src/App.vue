<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "@/store";
import { addZero, transStatus } from "@/utils/common";
import { week } from "@/constants/Date.js";
import { storeToRefs } from "pinia";
import Rainy from "@/components/Rainy.vue";
import Clear from "@/components/Clear.vue";
import Cloudy from "@/components/Cloudy.vue";
import Sunny from "@/components/Sunny.vue";

// const nowWeather = Rainy;
const store = useStore();
const weatherList = {
  rain: Rainy,
  cloudy: Cloudy,
  clear: Clear,
  sunny: Sunny,
};
const { info, zone, column } = storeToRefs(store);
const weekData = computed(() => {
  const { Wx } = info.value;
  const dayData = Wx?.time.filter((vo, i) => {
    return i % 2 === 0;
  });
  const data =
    dayData &&
    dayData.map((vo, i) => {
      return vo?.elementValue[0].value;
    });
  return data;
});

const temperature = computed(() => {
  const { MinT, MaxT } = info.value;
  console.log("MinT", MinT);
  const high = MaxT?.time[0].elementValue[0].value;
  const Low = MinT?.time[0].elementValue[0].value;
  return `${Low}°C~${high}°C`;
});

const todayWeather = computed(() => {
  const { Wx } = info.value;
  const target = Wx?.time[0].elementValue[0].value;
  return transStatus(target);
});

setTimeout(() => {
  console.log("temperature", temperature);
}, 2000);
const getTime = () => {
  const day = new Date().getDay();
  const hour = new Date().getHours();
  const minutes = new Date().getMinutes();
  return `${week[day]} ${addZero(hour)}:${addZero(minutes)}`;
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
        <p>{{ temperature }}</p>
        <p class="text-xl">{{ getTime() }}</p>
      </div>
      <div class="w-1/2 text-center">
        <component
          :is="weatherList[todayWeather]"
          :size="'w-36 h-36 mx-auto'"
        />
        <p>{{ zone }} 晴時多雲</p>
      </div>
    </section>
    <ul class="flex">
      <li v-for="(vo, i) in weekData" :key="i">
        <component :is="weatherList[transStatus(vo)]" :size="'w-12 h-12'" />
        <!-- <p>{{ vo }}</p> -->
      </li>
    </ul>
  </main>
</template>

<style></style>
