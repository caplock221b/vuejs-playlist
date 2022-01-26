<template>
  <header>
    <h1 v-on:click="changeTitle">{{ title }}</h1>
  </header>
</template>

<script>
import { eventBus } from "../main";
export default {
  props: ["title"],
  data() {
    return {};
  },
  methods: {
    changeTitle() {
      //   Emit an event - child to parent
      this.$emit("changeTitle", "Vue Wizards");

      // Emit event on eventBus
      // this.title = "Vue Wizards";
      // eventBus.$emit("titleChanged", "Vue Wizards");
    },
  },
};
</script>

<style scoped>
header {
  background: lightgreen;
  padding: 10px;
}

h1 {
  color: #222;
  text-align: center;
}
</style>