import msg from '@/components/message/msg.vue'
import { createApp } from 'vue'

export default function createMsg(type, message) {
  const messageInstance = createApp(msg, {
    type,
    message
  })

  let div = document.createElement('div')

  document.body.appendChild(div)

  messageInstance.mount(div)

  setTimeout(() => {
    messageInstance.unmount()
    document.body.removeChild(div)
    div = null
  }, 3000)
}
