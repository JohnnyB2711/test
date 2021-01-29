import Vue from "vue";
import "./styles.sass";
import App from "./App.vue";
import store from "./store";

new Vue({
  render: (h) => h(App),
  store,
}).$mount("#app");
