// storeを作成するメソッド
import { createStore } from "vuex";

// main.jsにimportしたstoreがこれ
const store = createStore({
  state() {
    return {
      count: 0,
      message: "",
    };
  },
  getters: {
    double(state) {
      return state.count * 2;
    },
  },
  // mutationsは動機的でなければいけない(setTimeOutやPromise✖︎)
  mutations: {
    plusOne(state) {
      state.count++;
    },
    sayHi(state) {
      state.message = "hello, world!";
    },
  },
  // actionsは非同期も扱える。ここを介せばmutationsのメソッドに非同期も組み合わせられる
  actions: {
    // actionsは引数にcontextを取ります。
    // contextの中には、commitなどが入っておりそれを介してmutationsのメソッドなどにアクセスできます。
    countUp(context) {
      // console.log(context);
      context.commit("plusOne");
    },
    // 分割して取り出すと可読性up
    asyncSayHi({ commit }) {
      setTimeout(() => {
        commit("sayHi");
      }, 1000);
    },
  },
});

export default store;
