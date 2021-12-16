import App from "./App.vue";
// 以下二つが重要
import { createApp } from "vue";
import store from "./store";

// ここのプロジェクトでstoreを使えるように宣言する→src/store/index.jsへ
createApp(App).use(store).mount("#app");
