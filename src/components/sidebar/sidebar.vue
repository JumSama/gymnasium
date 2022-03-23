<script setup>
import { useRouter, useRoute } from 'vue-router'
import { computed } from 'vue'
const parts = [
  {
    id: 1,
    cname: '肩部',
    icon: 'icon-shoulder'
  },
  {
    id: 2,
    cname: '腹部',
    icon: 'icon-sixpack'
  },
  {
    id: 3,
    cname: '背部',
    icon: 'icon-back'
  },
  {
    id: 4,
    cname: '臂部',
    icon: 'icon-bichps'
  },
  {
    id: 5,
    cname: '胸部',
    icon: 'icon-chest'
  },
  {
    id: 6,
    cname: '腿部',
    icon: 'icon-leg'
  }
]

const router = useRouter()
const route = useRoute()

const selected = computed(() => route.params.part_id)

const changePart = (part) => {
  router.push(`/gym/category/${part}`)
}
</script>

<template>
  <div
    class="w-screen h-category overflow-y-hidden flex flex-wrap text-black bg-yellow-400"
  >
    <!-- PC端 -->
    <div
      v-for="(part, index) in parts"
      :key="part.id"
      class="basis-1/6 shrink-0 text-center h-full flex items-center cursor-pointer bg-cover bg-no-repeattransition ease-in-out duration-100 hover:bg-black hover:text-yellow-400"
      @click="changePart(part.id)"
      :class="{
        'bg-black': selected == part.id,
        'text-white': selected == part.id
      }"
    >
      <p class="w-full text-lg">
        <span class="iconfont" :class="part.icon"></span>
        {{ part.cname }}
      </p>
    </div>
  </div>
</template>
