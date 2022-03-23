<script setup>
import sidebar from '@/components/sidebar/sidebar.vue'
import Block from '@/components/block/Block.vue'
</script>

<template>
  <div class="mx-auto">
    <div>
      <block></block>
      <sidebar></sidebar>
    </div>
    <router-view></router-view>
  </div>
</template>
