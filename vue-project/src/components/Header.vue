<template>
  <div class="header-div">
    <a href="#">Home</a>
    <a href="#">Add Restaurant</a>
    <a href="#">Update Restaurant</a>
    <a @click="logout" href="#">Logout</a>
  </div>
</template>
<script>
export default {
  name: "Header",
  methods : {
    logout () {
        localStorage.clear();
        this.$router.push({name:'log-in'})
    }
    
  }
};
</script>
<style scoped>
.header-div {
  padding: 1rem 0;
  background-color: black;
  margin: 0rem 1rem;
}
.header-div a {
  margin: 0 10px;
  color: white;
  font-family: system-ui;
  text-decoration: none;
  cursor: pointer;
  font-size: 14px;
  /* height: 100%; */
  padding: 18px;
}
.header-div a:hover {
  color: black;
  background-color: aliceblue;
}

@media (max-width:600px) {
  .header-div a {
    display: block;
  }
}
</style>
