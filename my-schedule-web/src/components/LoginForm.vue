<template>
  <div class="w-96 h-[441px] p-8 rounded-xl border border-gray-300 shadow-xl">
    <div class="mb-4">
      <h1 class="text-[40px]">Login</h1>
    </div>
    <form @submit.prevent="login" class="flex flex-col">
      <input
        v-model="username"
        class="rounded-md px-2 py-2 mb-5 border border-gray-300 hover:shadow-lg"
        type="text"
        name="username"
        placeholder="username"
      />
      <input
        v-model="password"
        class="rounded-md px-2 py-2 mb-6 border border-gray-300 hover:shadow-lg"
        type="password"
        name="password"
        placeholder="password"
      />
      <div class="flex justify-center text-center">
        <button type="submit" class="bg-green-400 w-24 h-10 rounded-lg">
          Login
        </button>
      </div>
    </form>
  </div>
  <div>
    <img src="https://ku-table.vercel.app/img/ku-table-high.0e9dc472.jpg" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../stores/auth";
const router = useRouter();
const store = useAuthStore();
const username = ref("");
const password = ref("");

const login = async () => {
  try {
    const url = "http://127.0.0.1:9000/login";
    const userData = JSON.stringify({
      username: username.value,
      password: password.value,
    });
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: userData,
    });
    const res = await response.json();
    console.log(res);
    // if login success redirect to /schedule page
    if (res.code == "success") {
      store.setToken(String(res.accesstoken));
      await router.push("/schedule");
    }
  } catch (err) {
    console.log(err);
  }
};
</script>
