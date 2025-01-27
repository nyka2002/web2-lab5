<template>
    <nav>
    <router-link to="/">home</router-link> |
    <router-link to="/about">about us</router-link> |
    <router-link v-if="!user" to="/login">login</router-link> |
    <router-link v-if="!user" to="/register">register</router-link> |
    <button v-if="user" @click="logout">logout</button>
    </nav>
  </template>
  
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
  </style>