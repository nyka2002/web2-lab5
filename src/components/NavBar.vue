<template>
    <nav>
    <router-link to="/">home</router-link> |
    <router-link to="/about">about</router-link> |
    <router-link v-if="!user" to="/login">login</router-link> |
    <router-link v-if="!user" to="/register">register</router-link> |
    <button v-if="user" @click="logout">logout</button>
    </nav>
  </template>
  
<script>
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

export default {
  data() {
    return {
      user: null,
    };
  },
  created() {
    onAuthStateChanged(auth, (user) => {
      this.user = user;
    });
  },
  methods: {
    async logout() {
      await signOut(auth);
      this.user = null;
      this.$router.push("/login");
    },
  },
};
</script>

  <style scoped>
  nav {
    margin-bottom: 20px;
  }
  nav a {
    margin: 0 10px;
    text-decoration: none;
    color: #72bad5;
    font-weight: bold;
  }
button {
  background: red;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}
  </style>