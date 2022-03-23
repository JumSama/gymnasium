<script setup>
import { computed, reactive } from 'vue'
import { useRoute } from 'vue-router'
import { videoPlay } from 'vue3-video-play'
import 'vue3-video-play/dist/style.css'
const options = reactive({
  width: '1000px', //播放器高度
  height: '600px', //播放器高度
  color: '#409eff', //主题色
  title: '', //视频名称
  src: 'http://127.0.0.1:8888/mp4/six', //视频源
  muted: false, //静音
  webFullScreen: false,
  speedRate: ['0.75', '1.0', '1.25', '1.5', '2.0'], //播放倍速
  autoPlay: false, //自动播放
  loop: false, //循环播放
  mirror: false, //镜像画面
  ligthOff: true, //关灯模式
  volume: 0.3, //默认音量大小
  control: true, //是否显示控制
  controlBtns: [
    'audioTrack',
    'quality',
    'speedRate',
    'volume',
    'setting',
    'pip',
    'pageFullScreen',
    'fullScreen'
  ] //显示所有按钮,
})
</script>

<template>
  <div class="flex justify-center items-center bg-slate-600 w-full h-main">
    <videoPlay v-bind="options" />
  </div>
</template>
