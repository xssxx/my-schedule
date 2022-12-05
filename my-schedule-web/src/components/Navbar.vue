<template>
  <nav class="flex w-screen h-16 bg-green-300 justify-around items-center">
    <div class="font-bold">KU TABLE</div>
    <div class="flex flex-row gap-8">
      <RouterLink to="/login"
        ><li class="hover:underline">Login</li></RouterLink
      >
      <RouterLink to="/schedule"
        ><li class="hover:underline">Schedule</li></RouterLink
      >
      <li @click="store.logout" class="hover:underline cursor-pointer">
        Logout
      </li>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { useAuthStore } from "../stores/auth";
const store = useAuthStore();
</script>
