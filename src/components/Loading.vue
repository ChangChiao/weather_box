<script setup>
const props = defineProps({
  isOpen: Boolean,
});
</script>

<template>
  <teleport to="#portal-target">
    <div v-if="isOpen" class="fixed z-50 h-full w-full bg-slate-900 opacity-70">
      <div class="loading absolute top-0 right-0 bottom-0 left-0 m-auto"></div>
    </div>
  </teleport>
</template>

<style scoped>
.loading {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  border: 0.25rem solid rgba(255, 255, 255, 0.2);
  border-top-color: #fff;
  animation: spin 1s infinite linear;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
