<template>
    <div>
      <h2>posts</h2>
      <button @click="fetchPosts">click to load posts</button>
      <ul v-if="posts.length">
        <li v-for="post in posts" :key="post.id">
          <strong>{{ post.title }}</strong>
          <p>{{ post.body }}</p>
        </li>
      </ul>
      <p v-else>no posts loaded</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        posts: [],
      };
    },
    methods: {
      async fetchPosts() {
        try {
          const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=3");
          this.posts = await response.json();
        } catch (error) {
          console.error("there has been an error while loading data:", error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  button {
    background-color: #03324e;
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    margin-bottom: 10px;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    border-bottom: 1px solid #ccc;
    padding: 10px 0;
  }
  </style>