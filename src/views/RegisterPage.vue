<template>
    <div>
      <h2>Registracija</h2>
      <input v-model="email" type="email" placeholder="email" />
      <input v-model="password" type="password" placeholder="password" />
      <button @click="register">register</button>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>
  </template>
  
  <script>
  import { auth } from "../firebase";
  import { createUserWithEmailAndPassword } from "firebase/auth";
  
  export default {
    data() {
      return {
        email: "",
        password: "",
        errorMessage: "",
      };
    },
    methods: {
      async register() {
        try {
          await createUserWithEmailAndPassword(auth, this.email, this.password);
          this.$router.push("/login");
        } catch (error) {
          this.errorMessage = "registration unsuccessful";
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .error {
    color: red;
  }
  </style>