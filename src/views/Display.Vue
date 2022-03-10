<script setup>
window.addEventListener('scroll', (e) => {
  // clientHeight 客户窗口高度 1200
  // scrollTop 移动距离
  // scrollHeight滚动条高度  3000
  // 剩余滚动条 scrollHeight-clientHeight
  // 当前滚动进度 scrollTop / (scrollHeight-clientHeight)
  const scrolled =
    document.documentElement.scrollTop /
    (document.documentElement.scrollHeight -
      document.documentElement.clientHeight)

  const text = document.getElementById('the-text')

  const muscle = document.getElementById('the-muscle')

  const body = document.getElementById('the-body')

  const man = document.getElementById('the-man')

  body.style.width = body.style.height =
    document.documentElement.clientWidth *
      20 *
      (scrolled * scrolled * scrolled) +
    'px'

  // build your body 上移 分配 0.1
  if (scrolled <= 0.1) {
    text.style.opacity = (0.1 - scrolled) / 0.1
    text.style.marginTop = scrolled * 1000 * -1 + 'px'
  } else {
    text.style.opacity = 0
  }

  // muscle变不透明
  if (scrolled <= 0.2) {
    muscle.style.opacity = (scrolled - 0.1) / 0.1
  } else {
    muscle.style.opacity = 1
  }

  // body变大 muscle变透明 从1 -> 0
  if (scrolled >= 0.3) {
    man.style.opacity = (1 - scrolled) / 0.7
    body.classList.add('hide')
  } else {
    man.style.opacity = 1
    body.classList.remove('hide')
  }

  if (scrolled >= 0.5) {
    body.style.opacity = (1 - scrolled) / 0.5
  } else {
    body.style.opacity = 1
  }
})
</script>

<template>
  <div style="height: 3000px">
    <div class="the-section">
      <video
        class="the-video"
        muted
        playsinline
        autoplay
        loop
        src="//v1.keepcdn.com/infra-cms/2021/05/27/12/27/896681731657_.mp4"
      ></video>
      <h1 id="the-text">
        Build your body<br />
        自律给我自由
      </h1>
      <div id="the-body">
        <svg
          id="the-muscle"
          t="1646493054101"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="12910"
          width="128"
          height="128"
        >
          <path
            d="M136 1008C70.4 1008 16 953.6 16 888v-768C16 54.4 70.4 0 136 0h768C969.6 0 1024 54.4 1024 120v768c0 65.6-54.4 120-120 120h-768z"
            fill="#000000"
            p-id="12911"
            data-spm-anchor-id="a313x.7781069.0.i6"
            class=""
          ></path>
          <path
            d="M904 16C966.4 16 1008 57.6 1008 120v768c0 62.4-41.6 120-104 120h-768C73.6 1008 16 950.4 16 888v-768C16 57.6 73.6 16 136 16H896m8-16h-768C65.6 0 0 49.6 0 120v768C0 958.4 65.6 1024 136 1024h768c70.4 0 120-65.6 120-136v-768C1024 49.6 974.4 0 904 0z"
            fill="#ffffff"
            p-id="12912"
            data-spm-anchor-id="a313x.7781069.0.i9"
            class="selected"
          ></path>
          <path
            id="the-man"
            d="M840 560H816v129.6c0 14.4-9.6 27.2-24 27.2S768 704 768 689.6V352c0-14.4 9.6-27.2 24-27.2s24 12.8 24 27.2v112h24c19.2 0 40 19.2 40 38.4v17.6c0 20.8-20.8 40-40 40z m-160 209.6c-28.8 0-56-24-56-52.8V560H400v155.2c0 28.8-27.2 52.8-56 52.8S288 745.6 288 715.2V308.8c0-28.8 27.2-52.8 56-52.8s56 24 56 52.8V464h224v-155.2c0-28.8 27.2-52.8 56-52.8s56 24 56 52.8v408c0 28.8-27.2 52.8-56 52.8z m-448-54.4c-14.4 0-24-11.2-24-27.2v-128h-24C164.8 560 144 540.8 144 521.6v-17.6c0-19.2 20.8-38.4 40-38.4H208v-112c0-14.4 9.6-27.2 24-27.2s24 11.2 24 25.6v337.6c0 14.4-9.6 25.6-24 25.6z"
            p-id="12913"
            data-spm-anchor-id="a313x.7781069.0.i8"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<style scoped>
.the-section {
  width: 100%;
  height: 100vh;
  position: sticky;
  top: 0;
  overflow: hidden;
}

#the-text {
  text-align: center;
}

#the-body {
  box-shadow: 0px 0px 0px 100vw black, 0px 0px 0px 40px black inset;
  width: 100px;
  height: 100px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  min-width: 100px;
  min-height: 100px;
  background-color: #000000;
}

#the-muscle {
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0;
}

.the-video {
  /* height: 100vh; */
  width: 100vw;
}

h1 {
  font-size: 64px;
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 20;
  transform: translate(-50%, -50%);
  margin: 0;
  font-family: Helvetica;
}

.hide {
  background-color: transparent;
}

#the-man {
  fill: white;
}
</style>
