<template>
    <div>
      <button @click="counterStore.increment">click the button!</button>
      <p>clicks count: {{ counterStore.counter }}</p>
      <p>clicks count squared: {{ counterStore.squaredCounter }}</p>
    
        <button @click="incrementCounter">button clicker number 2</button>
        <p>number of clicks  of the second button: {{ counter }}</p>
        <p>second buton clicks cubed: {{ cubedCounter }}</p>
    </div>
  </template>
  
  <script>
  import { useCounterStore } from "../store/counterStore";

  export default {
    data() {
        return {
          counter: 0,
        };
      },
    computed: {
        cubedCounter() {
          return this.counter * this.counter * this.counter;
        },
      },
      methods: {
        incrementCounter() {
          this.counter++;
        },
      },
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
