<template>
  <div class="flex justify-center items-center h-[calc(100vh-4rem)]">
    <div class="text-center">Schedule</div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { onMounted } from "vue";
const router = useRouter();

onMounted(() => {
  const token = localStorage.getItem("accesstoken");

  if (!token) {
    router.push("/login");
  }
});
</script>
