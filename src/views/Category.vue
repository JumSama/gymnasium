<script setup>
import card from '@/components/card/card.vue'
import { useRoute, useRouter } from 'vue-router'
import { computed, watchEffect, ref } from 'vue'
import request from '../request'
const route = useRoute()
const router = useRouter()

// 获取不同部位训练列表
const execiseList = ref([])
watchEffect(async () => {
  const { data } = await request.request(`/api/execise/${route.params.part_id}`)
  execiseList.value = data
})

// 跳转
const bound = (url) => {
  // 权限检测
  router.push(`/gym/execise/${url}`)
}
</script>

<template>
  <div class="w-full h-full container mx-auto">
    <div class="text-2xl py-6 w-full text-center"></div>
    <div class="grid grid-cols-1 gap-10 sm:grid-cols-3 items-center">
      <card
        v-for="item in execiseList"
        @click.prevent="bound(item.id)"
        :key="item.title"
        :title="item.title"
        :coverUrl="item.coverUrl"
        :rank="item.level"
      />
    </div>
  </div>
</template>
