<template>
    <nav>
      <router-link to="/">home page</router-link> |
      <router-link to="/about">about us</router-link>
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