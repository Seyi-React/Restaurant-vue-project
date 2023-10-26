<template>
  <div class="parent">
    <div>
      <img src="../assets/new.png" class="log-logo" />
      <h2 class="login">Login</h2>
    </div>
    <div class="login">
      <input type="email" v-model="email" placeholder="Enter your Email" />
      <input
        type="password"
        v-model="password"
        placeholder="Enter your Password"
      />
      <button type="submit" @click="signUp">Login</button>
      <p>
        <router-link to="signup" class="login">SignUp</router-link>
      </p>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async Login() {
      let loginInfo = await axios.get(
        `http://localhost:8000/users?email=${this.email}&password=${this.password}`
      );
      if (loginInfo.status == 200 && loginInfo.data.length > 0) {
        localStorage.setItem("user-info", JSON.stringify(result.data[0]));
        this.$router.push({ name: "Home" });
      }
    },
  },
};
</script>
<style scoped>
  .log-logo {
  width: 150px;
  height: 150px;
}
.login {
  text-align: center;
  text-transform: capitalize;
  font-family: system-ui;
  font-size: 28px;
  font-weight: 400;
}
.parent {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.login input {
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
.login button {
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
.login input:focus {
  border: 1px solid skyblue;
}
.login {

  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 18px;
  color: black;
  text-decoration: none;
  cursor: pointer;
}
.login:hover {
  opacity: 0.7;
}
</style>
