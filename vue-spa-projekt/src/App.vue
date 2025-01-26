<template>
  <div id="app">
    <h1>VUE3 SPA</h1>

    <NavBar></NavBar>

    <router-view></router-view>

    <ClicksCounter></ClicksCounter>

    <p>interpolation/one-way binding: {{ message }}</p>

    <p v-bind:title="tooltip">hover over this text!</p>

    <input type="text" v-model="userInput" placeholder="type anything!" />
    <p>you entered: {{ userInput }}</p>

    <button @click="incrementCounter">click the button!</button>
    <p>clicks count: {{ counter }}</p>

    <p>clicks count squared: {{ squaredCounter }}</p>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue"
import ClicksCounter from "./components/ClicksCounter.vue"

export default {
  components: {
    NavBar,
    ClicksCounter,
  },
  data() {
    return {
      message: "this is an example of one-way binding!",
      tooltip: "this is an example of two-way binding!",
      userInput: "",
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
  mounted() {
    console.log("component ready!");
    setTimeout(() => {
      this.message = "the message has changed after 5 seconds!";
    }, 5000);
  },
};
</script>

<style scoped>
h1 {
  color: #900C3F;
}
nav {
  margin-bottom: 20px;
}
nav a {
  margin: 0 10px;
  text-decoration: none;
  color: #FFC300;
  font-weight: bold;
}
</style>