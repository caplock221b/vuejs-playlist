<template>
  <div v-theme="'narrow'" id="show-blogs">
    <h1>All Blog Articles</h1>
    <input type="text" v-model="search" placeholder="Search blogs..." />
    <div v-for="blog in filteredBlogs" :key="blog.id" class="single-blog">
      <router-link v-bind:to="'/blog/' + blog.id"
        ><h2 v-rainbow>{{ blog.title | toUppercase }}</h2></router-link
      >
      <article>{{ blog.body | shorten }}</article>
    </div>
  </div>
</template>

<script>
// Filters - toUppercase, shorten
// Custom Directives - v-theme, v-rainbow
import searchMixin from "../mixins/searchMixin";
export default {
  data() {
    return {
      blogs: [],
      search: "",
    };
  },
  methods: {},
  created() {
    this.$http
      .get("http://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        this.blogs = res.data.slice(0, 10);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  computed: {},
  filters: {
    toUppercase(value) {
      return value.toString().toUpperCase();
    },
  },
  directives: {
    rainbow: {
      bind(el, binding, vnode) {
        el.style.color = "#" + Math.random().toString().slice(2, 8);
      },
    },
  },
  mixins: [searchMixin],
};
</script>
<style>
#show-blogs {
  max-width: 800px;
  margin: 0 auto;
}

.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-shadow: border-box;
  background: #eee;
}
</style>