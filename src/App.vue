<script setup>
import { onMounted } from "vue";
import { useStore } from "@/store";
const store = useStore();
onMounted(() => {
  console.log("store", store);
  store.getWeather();
});
</script>

<template>
  <div class="text-center selection:bg-green-100">
    <!-- <img class="mx-auto mt-12 mb-8" alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Vite + Vue 3 + Tailwindcss v3" />
    <img
      class="mx-auto my-8"
      alt="powered-by"
      src="./assets/powered-by-vitawind-bright.png"
    /> -->
  </div>
</template>

<style></style>
