<script setup>
import navbar from '@/components/navbar/navbar.vue'
import sidebar from '@/components/sidebar/sidebar.vue'
import Block from '@/components/block/Block.vue'
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const showCategory = computed(() => {
  if (route.name == 'Display') {
    return false
  } else {
    return true
  }
})
</script>

<template>
  <div class="bg-white">
    <navbar :isOpacity="!showCategory"></navbar>
    <div v-if="showCategory">
      <block></block>
      <sidebar></sidebar>
    </div>
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
