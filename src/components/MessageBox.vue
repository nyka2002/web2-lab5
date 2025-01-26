<template>
    <div>
      <p>message: {{ message }}</p>
      <button @click="emitNewMessage">change message</button>
    </div>
  </template>
  
  <script>
  export default {
    props: ["message"],
    emits: ["update-message"],
    methods: {
      emitNewMessage() {
        this.$emit("update-message", "this is a new message from the MessageBox component!");
      },
    },
  };
  </script>
  
  <style scoped>
  button {
    background-color: #01263d;
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
  }
  </style>