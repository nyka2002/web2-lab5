<template>
    <div>
      <button @click="incrementCounter">Klikni me</button>
      <p>Broj klikova: {{ counter }}</p>
      <p>Kvadrat broja klikova: {{ squaredCounter }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        counter: 0,
      };
    },
    computed: {
      squaredCounter() {
        return this.counter * this.counter;
      },
    },
    methods: {
      incrementCounter() {
        this.counter++;
      },
    },
  };
  </script>
  
  <style scoped>
  button {
    background-color: #42b983;
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
  }
  </style>