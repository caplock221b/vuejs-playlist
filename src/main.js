import Vue from "vue";
import App from "./App.vue";
import VueResource from "vue-resource";
import VueRouter from "vue-router";
import routes from "./routes";
// Create eventBus
// export const eventBus = new Vue();

// Use VueResource for HTTP request
Vue.use(VueResource);

// Use VueRouter from routing
Vue.use(VueRouter);

const router = new VueRouter({
  routes: routes,
  mode: "history"
});

// Custom Directive
Vue.directive("theme", {
  bind(el, binding, vnode) {
    if (binding.value === "wide") {
      el.style.maxWidth = "1200px";
    } else if (binding.value === "narrow") {
      el.style.maxWidth = "560px";
    }

    if (binding.arg === "column") {
      el.style.background = "#ddd";
      el.style.padding = "20px";
    }
  }
});

Vue.filter("shorten", value => {
  return (
    value
      .toString()
      .trim()
      .slice(0, 100) + "..."
  );
});

new Vue({
  el: "#app",
  render: h => h(App),
  router: router
});
