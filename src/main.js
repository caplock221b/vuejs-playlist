import Vue from "vue";
import App from "./App.vue";

// Create eventBus
// export const eventBus = new Vue();

new Vue({
  el: "#app",
  render: h => h(App)
});
