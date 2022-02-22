<script setup>
import { ref } from "vue";
</script>

<template>
  <svg>
    <circle class="sun" cx="15" cy="15" r="10" fill="orange"></circle>
    <circle class="cloud" cx="20" cy="20" r="5" fill="white"></circle>
    <circle class="cloud" cx="18" cy="22" r="5" fill="white"></circle>
    <circle class="cloud" cx="15" cy="22" r="5" fill="white"></circle>
  </svg>
</template>

<style scoped>
@import "@/style/sun.css";
@import "@/style/cloudy.css";
</style>
