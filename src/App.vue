<template>
  <div>
    <!-- Helps keep data intact when switching between components  -->
    <keep-alive>
      <component v-bind:is="component" />
    </keep-alive>
    <button @click="component = 'form-one'">Show form one</button>
    <button @click="component = 'form-two'">Show form two</button>
  </div>
</template>

<script>
import formOne from "./components/formOne.vue";
import formTwo from "./components/formTwo.vue";

export default {
  components: {
    "form-one": formOne,
    "form-two": formTwo,
  },
  data() {
    return {
      component: "form-two",
    };
  },
  methods: {},
};
</script>

<style>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
