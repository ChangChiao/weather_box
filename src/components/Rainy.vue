<script setup>
import { ref } from "vue";
const props = defineProps({
  size: String,
});
</script>

<template>
  <div :class="[props.size, 'relative']">
    <div class="cloud bg-white"></div>
    <div class="rain"></div>
    <div class="rain rain2"></div>
    <div class="rain rain3"></div>
  </div>
</template>

<style scoped>
@import "@/style/cloudy.css";
.rain {
  height: 20px;
  width: 1px;
  background: #fff;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  top: 30px;
  animation: rain 1s infinite linear;
}
.rain2 {
  left: -30px;
  top: 30px;
  animation-delay: -0.7s;
}

.rain3 {
  left: 40px;
  top: 30px;
  animation-delay: -0.5s;
}

@keyframes rain {
  0% {
    transform: translateY(0px);
    opacity: 1;
  }

  70% {
    opacity: 0.4;
  }
  100% {
    transform: translateY(60px);
    opacity: 0;
  }
}
</style>
