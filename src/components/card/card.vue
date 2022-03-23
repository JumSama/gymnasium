<script setup>
defineProps({
  rank: String,
  title: String,
  introduction: String,
  likes: String,
  comments: String,
  coverUrl: String
})
</script>

<template>
  <div class="h-48 relative mx-6 sm:mx-0 text-black">
    <img
      v-if="coverUrl"
      :src="`http://127.0.0.1:8888${coverUrl}`"
      alt=""
      class="rounded-lg h-48 w-full object-cover"
    />
    <img
      v-else
      :src="`http://127.0.0.1:8888/thenx.jpg`"
      alt=""
      class="rounded-lg h-48 w-full object-cover"
    />
    <div
      class="absolute top-2 left-2 text-sm bg-black text-white rounded-md text-center p-0.5"
    >
      {{ rank }}
    </div>
    <div class="absolute bottom-4 left-2 text-white text-sm">
      <div>
        <p class="text-base">训练介绍</p>
        <p class="text-lg font-bold">{{ title }}</p>
      </div>
      <span>120 喜欢</span>
      <span> - </span>
      <span>30 评论</span>
    </div>
  </div>
</template>
