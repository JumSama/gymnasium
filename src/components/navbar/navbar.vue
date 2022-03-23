<script setup>
import MenuIcon from '@heroicons/vue/outline/MenuIcon'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { useStore } from '@/store/globalStore.js'
import { computed } from 'vue'

const store = useStore()

const isLogin = computed(() => store.isLogin)

defineProps({
  isOpacity: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div
    class="h-navbar mx-auto flex justify-between items-center bg-gray-900 text-base text-white fixed top-0 left-0 right-0 z-50"
    :class="{ 'bg-transparent': isOpacity }"
  >
    <!-- logo -->
    <div class="pl-10 flex justify-center items-center">
      <router-link to="/">
        <img src="@/assets/logo.svg" alt="logo" class="h-12" />
      </router-link>
      <router-link to="/" class="hidden sm:block">
        <span class="pl-10">NOBODY在线健身馆</span>
      </router-link>
    </div>

    <div class="flex-1"></div>

    <div class="flex items-center w-48" v-if="isLogin">
      <div class="bg-white rounded-full w-10 h-10 mx-4"></div>
      <span>状态 : 已登录</span>
    </div>

    <!-- 导航栏 -->
    <div class="md:block hidden pr-10">
      <ul class="flex gap-8">
        <li v-if="!isLogin"><router-link to="/login">登录</router-link></li>
        <li><router-link to="/gym">在线健身</router-link></li>
        <li><router-link to="">公益项目</router-link></li>
        <li><router-link to="">了解我们</router-link></li>
      </ul>
    </div>

    <!-- 折叠按钮 -->
    <div class="block md:hidden pr-10">
      <Popover class="relative">
        <PopoverButton>
          <MenuIcon class="h-8 w-8 text-white hover:text-lime-300" />
        </PopoverButton>
        <PopoverPanel
          class="h-2/5 mx-auto fixed top-0 left-0 right-0 z-10 bg-black bg-opacity-90"
        >
          <div class="flex flex-col justify-center h-full w-full">
            <ul class="flex flex-col gap-2 pl-4">
              <router-link to="">
                <li
                  class="border-b-white active:bg-opacity-10 active:bg-white h-10 leading-10"
                >
                  <router-link to="/gym">在线健身</router-link>
                </li>
              </router-link>
              <li
                class="border-b-white active:bg-opacity-10 active:bg-white h-10 leading-10"
              >
                公益责任
              </li>
              <li
                class="border-b-white active:bg-opacity-10 active:bg-white h-10 leading-10"
              >
                了解我们
              </li>
            </ul>
          </div>
          <div class="absolute bottom-4 left-4">
            <span class="pr-2">中</span>
            <span>|</span>
            <span class="pl-2">EN</span>
          </div>
        </PopoverPanel>
      </Popover>
    </div>
  </div>
</template>
