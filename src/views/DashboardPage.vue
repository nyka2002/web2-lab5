<template>
    <div>
      <h2>this is the dashboard</h2>
      <p>you have access to this page because you're logged in, congrats!</p>
    </div>
  </template>
  
  <script>
  export default {
    created() {
      console.log("user logged in - has access to the dashboard");
    },
  };
  </script>
  
  <style scoped>
  h2 {
    color: #42b983;
  }
  </style>