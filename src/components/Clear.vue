<script setup>
import { ref } from "vue";
const props = defineProps({
  size: String,
});
</script>

<template>
  <svg :class="size">
    <circle class="sun" cx="25" cy="15" r="10" fill="orange"></circle>
    <circle class="cloud" cx="12" cy="22" r="5" fill="white"></circle>
    <circle class="cloud" cx="16" cy="24" r="5" fill="white"></circle>
    <circle class="cloud" cx="24" cy="20" r="5" fill="white"></circle>
    <circle class="cloud" cx="20" cy="20" r="5" fill="white"></circle>
  </svg>
</template>

<style scoped>
@import "@/style/sun.css";
@import "@/style/cloudy.css";
</style>
