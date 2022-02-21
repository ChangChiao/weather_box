<script setup>
import HelloWorld from "./components/Index.vue";

const test = () => {
  //https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-063?Authorization=CWB-98356BDD-2791-42C7-87AE-D958E6F643BA
};
</script>

<template>
  <div class="text-center selection:bg-green-100">
    <img class="mx-auto mt-12 mb-8" alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Vite + Vue 3 + Tailwindcss v3" />
    <img
      class="mx-auto my-8"
      alt="powered-by"
      src="./assets/powered-by-vitawind-bright.png"
    />
  </div>
</template>

<style></style>
