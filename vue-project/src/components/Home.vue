<template>
  <div>
    <Header />
  </div>
  <div class="home-div">
    
    <h2>This is the Home page</h2>
  </div>
</template>
<script>
import Header from "./Header.vue";
export default {
  name: "Home",
  components: {
    Header,
  },

  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
  },
};
</script>
<style scoped>
.home-div {
  display: flex;
  justify-content: center;
  align-items: center;
}


</style>
