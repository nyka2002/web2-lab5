<template>
    <div>
      <button @click="counterStore.increment">click the button!</button>
      <p>clicks count: {{ counterStore.counter }}</p>
      <p>clicks count squared: {{ counterStore.squaredCounter }}</p>
    </div>
  </template>
  
  <script>
  import { useCounterStore } from "../store/counterStore";

  export default {
    setup() {
      const counterStore = useCounterStore()
      return { counterStore }
    },
  };
  </script>
  
  <style scoped>
  button {
    background-color: #be1e2d;
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
  }
  </style>