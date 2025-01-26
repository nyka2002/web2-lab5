<template>
  <div id="app">
    <h1>VUE3 SPA</h1>

    <NavBar></NavBar>

    <router-view></router-view>

    <MessageBox :message="appMessage" @update-message="updateAppMessage"></MessageBox>

    <ClicksCounter></ClicksCounter>

    <LoadPosts></LoadPosts>

    <p>interpolation/one-way binding: {{ message }}</p>

    <p v-bind:title="tooltip">hover over this text!</p>

    <input type="text" v-model="userInput" placeholder="type anything!" />
    <p>you entered: {{ userInput }}</p>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue"
import ClicksCounter from "./components/ClicksCounter.vue"
import MessageBox from "./components/MessageBox.vue";
import LoadPosts from "./components/LoadPosts.vue";

export default {
  components: {
    NavBar,
    ClicksCounter,
    MessageBox,
    LoadPosts,
  },
  data() {
    return {
      message: "this is an example of one-way binding!",
      tooltip: "this is an example of two-way binding!",
      userInput: "",
      appMessage: "first message shown on page",
    };
  },
  methods: {
    updateAppMessage(newMessage) {
      this.appMessage = newMessage;
    }
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
  color: #c43240;
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