<template>
  <div v-theme:column="'narrow'" id="show-blogs">
    <h1>All Blog Articles</h1>
    <input type="text" v-model="search" placeholder="Search blogs..." />
    <div v-for="blog in filteredBlogs" :key="blog.id" class="single-blog">
      <h2 v-rainbow>{{ blog.title | toUppercase }}</h2>
      <article>{{ blog.body | shorten }}</article>
    </div>
  </div>
</template>

<script>
// Filters - toUppercase, shorten
// Custom Directives - v-theme, v-rainbow
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
  computed: {
    filteredBlogs() {
      return this.blogs.filter(
        (item) =>
          item.body.includes(this.search) || item.title.includes(this.search)
      );
    },
  },
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