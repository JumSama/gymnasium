<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const now = computed(() => {
  console.log(route.name)
})
</script>

<template>
  <div></div>
</template>
