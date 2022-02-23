<script setup>
import { computed, onMounted, ref, watch } from "vue";
import { useStore } from "@/store";
import { addZero, transStatus } from "@/utils/common";
import { week } from "@/constants/Date.js";
import { storeToRefs } from "pinia";
import Rainy from "@/components/Rainy.vue";
import Clear from "@/components/Clear.vue";
import Cloudy from "@/components/Cloudy.vue";
import Sunny from "@/components/Sunny.vue";
import Loading from "@/components/Loading.vue";
// const nowWeather = Rainy;
const store = useStore();
const weatherList = {
  rain: Rainy,
  cloudy: Cloudy,
  clear: Clear,
  sunny: Sunny,
};
const isOpen = ref(false);
const { info, zone, column } = storeToRefs(store);
const weekData = computed(() => {
  const { Wx } = info.value;
  const dayData = Wx?.time.filter((vo, i) => {
    return i % 2 === 0;
  });
  return dayData;
});

const weekStatus = computed(() => {
  const data =
    weekData.value &&
    weekData.value.map((vo, i) => {
      return vo?.elementValue[0].value;
    });
  return data || [];
});

const weekDay = computed(() => {
  const data =
    weekData.value &&
    weekData.value.map((vo, i) => {
      const target = vo?.startTime;
      const day = new Date(target).getDay();
      return week[day];
    });
  return data;
});

const temperature = computed(() => {
  const { MinT, MaxT } = info.value;
  const high = MaxT?.time[0].elementValue[0].value;
  const Low = MinT?.time[0].elementValue[0].value;
  return `${Low || 0}°C~${high || 0}°C`;
});

const todayWeather = computed(() => {
  const { Wx } = info.value;
  const target = Wx?.time[0].elementValue[0].value;
  return target && transStatus(target);
});

watch(weekData, (newVal) => {
  console.log("newVal~~", newVal);
  if (newVal && newVal.length > 0) {
    console.log("innnnnnn");
    isOpen.value = false;
  }
});
const getTime = () => {
  const day = new Date().getDay();
  const hour = new Date().getHours();
  const minutes = new Date().getMinutes();
  return `${week[day]} ${addZero(hour)}:${addZero(minutes)}`;
};
onMounted(() => {
  isOpen.value = true;
  store.getWeather();
});
</script>

<template>
  <main
    class="absolute top-0 right-0 left-0 bottom-0 m-auto h-[400px] w-[400px] rounded-xl bg-gradient-to-t from-[#1D678F] to-[#19283D] text-white"
  >
    <section class="h-[100px]">
      <div
        class="moom t-[30px] l-[10px] relative h-[80px] w-[80px] rounded-full shadow-[15px_10px_#fa0]"
      ></div>
    </section>
    <section class="flex pt-4">
      <div class="w-1/2 pl-6 text-4xl">
        <p>{{ temperature }}</p>
        <p class="py-2 text-lg">{{ getTime() }}</p>
        <p class="font-bold">{{ zone }}</p>
      </div>
      <div class="w-1/2 text-center">
        <component
          :is="weatherList[todayWeather]"
          :size="'w-24 h-24 mx-auto scale-[2.5]'"
        />
        <p>晴時多雲</p>
      </div>
    </section>
    <ul class="flex justify-between px-4 pt-10">
      <li v-for="(vo, i) in weekData" :key="i">
        <component
          :is="weatherList[transStatus(weekStatus[i])]"
          :size="'w-12 h-12'"
        />
        <p class="text-center">{{ weekDay[i] }}</p>
      </li>
    </ul>
  </main>
  <loading :isOpen="isOpen" />
</template>

<style></style>
