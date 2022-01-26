<template>
  <div>
    <app-header :title="title" @changeTitle="updateTitle($event)" />
    <app-ninjas :ninjas="ninjas" />
    <app-footer :title="title" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Ninjas from "./components/Ninjas.vue";

export default {
  components: {
    "app-header": Header,
    "app-ninjas": Ninjas,
    "app-footer": Footer,
  },
  data() {
    return {
      title: "Vue Ninjas",
      ninjas: [
        { name: "Ryu", speciality: "Vue Components", show: false },
        { name: "Crystal", speciality: "HTML Wizardry", show: false },
        { name: "Hitoshi", speciality: "Click Events", show: false },
        { name: "Tango", speciality: "Conditionals", show: false },
        { name: "Kami", speciality: "Webpack", show: false },
        { name: "Yoshi", speciality: "Data Deiggin", show: false },
      ],
    };
  },
  methods: {
    updateTitle(updatedTitle) {
      this.title = updatedTitle;
    },
  },
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
