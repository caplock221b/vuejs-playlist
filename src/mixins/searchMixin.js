export default {
  computed: {
    filteredBlogs() {
      return this.blogs.filter(
        item =>
          item.body.includes(this.search) || item.title.includes(this.search)
      );
    }
  }
};
