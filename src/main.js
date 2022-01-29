import Vue from "vue";
import App from "./App.vue";
import VueResource from "vue-resource";

// Create eventBus
// export const eventBus = new Vue();

// Use VueResource
Vue.use(VueResource);

new Vue({
  el: "#app",
  render: h => h(App)
});
