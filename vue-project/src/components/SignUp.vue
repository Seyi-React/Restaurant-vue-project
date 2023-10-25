<template>
  <div class="parent">
    <div>
      <img src="../assets/new.png" class="sign-logo" />
      <h2 class="sign">sign up</h2>
    </div>
    <div class="register">
      <input type="text" v-model="name" placeholder="Enter your Name" />
      <input type="email" v-model="email" placeholder="Enter your Email" />
      <input
        type="password"
        v-model="password"
        placeholder="Enter your Password"
      />
      <button type="submit" @click="signUp">Sign Up</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async signUp() {
      let result = await axios.post("http://localhost:8000/users", {
        email: this.email,
        name: this.name,
        password: this.password,
      });

      console.log(result);
      if (result.status === 201) {
        localStorage.setItem("user-info", JSON.stringify(result.data));
        this.$router.push({ name: "Home" });
      }
    },
    mounted() {
      let user = localStorage.getItem('user-info');
      if(user) {
        this.$router.push({ name: "Home" });
      }
    },
  },
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

.register input:focus {
  border: 1px solid skyblue;
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
