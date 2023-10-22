<template>
  <div class="parent">
  <div>
    <img src="../assets/new.png" class="sign-logo" />
    <h2 class="sign">sign up</h2>
  </div>
  </div>
</template>

<script>
export default {
  name: "SignUp",
};
</script>

<style scoped>
.sign {
  text-align: center;
  text-transform: capitalize;
}
.sign-logo {
  width: 150px;
  height: 150px;
}
.parent {
  display: flex;
  justify-content: center;
  align-items: center;

}
</style>
