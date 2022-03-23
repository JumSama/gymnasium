<script setup>
import navbar from '@/components/navbar/navbar.vue'
import loading from '@/components/loading/loading.vue'
import { computed } from 'vue'
import { useStore } from './store/globalStore'

// 是否显示Loading状态
const store = useStore()
const isLoading = computed(() => store.isLoading)
</script>

<template>
  <div class="bg-white">
    <loading :isLoading="isLoading"></loading>
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<style>
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
  background-color: #f5f5f5;
}

/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #f5f5f5;
}

/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  background-color: #c8c8c8;
}
</style>
