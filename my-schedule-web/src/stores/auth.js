import { useRouter } from "vue-router";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", () => {
  const router = useRouter();

  function isAuth() {
    if (localStorage.getItem("accesstoken")) return true;
    return false;
  }

  function setToken(token) {
    localStorage.setItem("accesstoken", token);
  }

  function logout() {
    localStorage.clear();
    router.push("/login");
    // console.log("logout clicked");
  }

  return { isAuth, setToken, logout };
});
