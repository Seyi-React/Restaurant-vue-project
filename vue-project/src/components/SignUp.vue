<template>
  <div class="parent">
    <div>
      <img src="../assets/new.png" class="sign-logo" />
      <h2 class="sign">sign up</h2>
    </div>
    <div class="register">
      <input type="text" placeholder="Enter your Name" />
      <input type="email" placeholder="Enter your Email" />
      <input type="password" placeholder="Enter your Password" />
      <button>Sign Up</button>
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
  font-family: system-ui;
  font-size: 28px;
  font-weight: 400;
}
.sign-logo {
  width: 150px;
  height: 150px;
}
.parent {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.register {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.register input {
  display: block;
  width: 280px;
  height: 30px;
  margin: 10px 10px;
  border: 1px solid gray;
  outline: none;
  padding: 5px;
  margin-left: auto;
  margin-right: auto;
}
.register button {
  width: 300px;
  height: 37px;
  color: white;
  background-color: black;
  outline: none;
  border: none;
  border-radius: 5px;
  letter-spacing: 1px;
  cursor: pointer;
}

@media (max-width: 550px) {
  .register input {
    width: 260px;
  }
  .register button {
    width: 280px;
  }
}
</style>
