<script setup>
defineProps({
  type: String,
  message: String
})
</script>

<template>
  <div
    class="w-72 h-16 fixed top-10 right-0 left-0 mx-auto shadow-md z-50 rounded-md flex items-center justify-center"
    :class="{
      'bg-sky-400': type === 'SUCCESS',
      'bg-orange-400': type === 'WARNING',
      'bg-red-400': type === 'ERROR'
    }"
  >
    <p>{{ message }}</p>
  </div>
</template>

<style lang="scss" scoped></style>
