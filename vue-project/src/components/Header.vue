<template>
  <div class="header-div">
    <a href="#">Home</a>
    <a href="#">Add Restaurant</a>
    <a href="#">Update Restaurant</a>
    <a href="#">Logout</a>
  </div>
</template>
<script>
export default {
  name: "Header",
};
</script>
<style scoped>
.header-div {
  padding: 1rem 0;
  background-color: black;
}
.header-div a {
  margin: 0 10px;
  color: white;
  font-family: system-ui;
  text-decoration: none;
  cursor: pointer;
  font-size: 14px;
}
</style>
