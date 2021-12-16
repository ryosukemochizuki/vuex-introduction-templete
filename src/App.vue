<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <p>count: {{ count }}</p>
  <p>double-count: {{ double }}</p>
  <p>hello: {{ message }}</p>
  <button @click="countUp">+1</button>
  <button @click="asyncSayHi">hello</button>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import { useStore } from "vuex";
import { computed } from "@vue/reactivity";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  setup() {
    const store = useStore();
    return {
      // stateとgettersを呼び出す時は、computedでラップします
      count: computed(() => store.state.count),
      message: computed(() => store.state.message),
      double: computed(() => store.getters.double),
      // mitetionsとactionsは関数の返り値として記述します
      countUp: () => store.dispatch("countUp"),
      asyncSayHi: () => store.dispatch("asyncSayHi"),
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
