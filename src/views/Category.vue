<script setup>
import card from '@/components/card/card.vue'
import { computed, onBeforeUnmount, onUpdated } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
// watch处理
const now = computed(() => {
  return route.params.category
})

const bound = (url) => {
  router.push(`/gym/execise/123`)
}
</script>

<template>
  <div class="w-full h-full">
    <div class="text-2xl py-6 w-full text-center">初学者</div>
    <div class="grid grid-cols-1 gap-10 sm:grid-cols-3 items-center">
      <card @click.prevent="bound" />
    </div>
  </div>
</template>
