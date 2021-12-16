<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <p>count: {{ count }}</p>
  <p>double-count: {{ double }}</p>
  <button @click="countUp">押す</button>
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
      count: computed(() => store.state.count),
      double: computed(() => store.getters.double),
      countUp: () => store.dispatch("sayHi"),
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
