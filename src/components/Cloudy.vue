<script setup>
import { ref, defineProps } from "vue";
const props = defineProps({
  size: String,
  color: String,
});
</script>

<template>
  <div :class="[props.size, 'relative']">
    <div :class="['cloud bg-white', props.color]"></div>
  </div>
</template>

<style scoped>
@import "@/style/cloudy.css";
</style>
