<template>
  <div
    class="h-screen w-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative"
  >
    <div
      class="max-w-md w-full space-y-8 absolute top-1/2 left-1/2"
      style="transform: translate(-50%, -50%)"
    >
      <div>
        <img
          class="mx-auto h-12 w-auto"
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
          alt="Workflow"
        />
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          登录你的账号
        </h2>
        <p class="mt-2 text-center text-sm text-gray-600"></p>
      </div>
      <form class="mt-8 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="Username" class="sr-only">Username</label>
            <input
              id="Username"
              name="Username"
              type="Username"
              autocomplete="Username"
              required=""
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Username"
              v-model="userInfo.username"
            />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required=""
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Password"
              v-model="userInfo.password"
            />
          </div>
        </div>

        <div>
          <button
            type="button"
            @click="handleLogon"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <LockClosedIcon
                class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                aria-hidden="true"
              />
            </span>
            登录
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { LockClosedIcon } from '@heroicons/vue/solid'
import { reactive } from 'vue'
import { useStore } from '@/store/globalStore'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

const userInfo = reactive({
  username: '',
  password: ''
})

const handleLogon = async () => {
  const res = await store.login(userInfo.username, userInfo.password)
  if (res) router.push('/gym')
}
</script>
