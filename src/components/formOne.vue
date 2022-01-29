<template>
  <div>
    <form-helper>
      <div slot="form-header">
        <h3>Form One - Contact Us</h3>
        <p>Fill in this form to contact us</p>
      </div>
      <div slot="form-fields">
        <input type="text" placeholder="Name" required />
        <label>Your message:</label>
        <textarea></textarea>
      </div>
      <div slot="form-controls">
        <button @click="handleSubmit">Send</button>
      </div>
    </form-helper>
  </div>
</template>

<script>
import formHelper from "./formHelper.vue";

export default {
  components: {
    "form-helper": formHelper,
  },
  data() {
    return {};
  },
  methods: {
    handleSubmit() {
      alert("Thanks for submitting form one and contacting us!");
    },
  },
};
</script>

<style>
body {
  margin: 0;
  font-family: "Nunito SemiBold";
}
</style>