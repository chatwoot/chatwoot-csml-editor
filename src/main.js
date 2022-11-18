import Vue from "vue";
import CsmlMonacoEditor from "@clevy/vue-csml-monaco";
import App from "./App.vue";
Vue.use(CsmlMonacoEditor);

import "./assets/main.css";

new Vue({
  render: (h) => h(App),
}).$mount("#app");
