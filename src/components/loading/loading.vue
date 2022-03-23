<script setup>
defineProps({
  isLoading: Boolean
})
</script>

<template>
  <div class="loader" v-if="isLoading">
    <svg
      t="1647856921400"
      class="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="1616"
      width="48"
      height="48"
    >
      <path
        d="M721.024 725.333333A298.666667 298.666667 0 1 1 810.666667 512a42.666667 42.666667 0 0 0 85.333333 0 384 384 0 1 0-128 286.208V810.666667c0 23.722667 19.114667 42.666667 42.666667 42.666666 23.722667 0 42.666667-19.114667 42.666666-42.666666v-128a42.538667 42.538667 0 0 0-42.666666-42.666667h-128c-23.722667 0-42.666667 19.114667-42.666667 42.666667 0 23.722667 19.114667 42.666667 42.666667 42.666666h38.357333z"
        fill="#2c2c2c"
        p-id="1617"
      ></path>
    </svg>
  </div>
</template>

<style scoped>
.loader {
  background: rgba(100, 100, 100, 0.5);
  z-index: 100;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
}
.icon {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  animation: load-effect 0.5s;
  animation-iteration-count: infinite;
}

/*动画：旋转360°*/
@keyframes load-effect {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
