<script setup>
import { ref } from "vue";
const props = defineProps({
  size: String,
});
</script>

<template>
  <svg :class="size">
    <circle class="sun" cx="15" cy="15" r="10" fill="orange"></circle>
  </svg>
</template>

<style scoped>
@import "@/style/sun.css";
</style>
