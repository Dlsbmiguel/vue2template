<script setup></script>

<template>
  <div id="app">
    <header>
      <Nav />
    </header>
    <router-view />
  </div>
</template>

<script>
import UserService from "./services/UserService";
import Nav from "./components/Nav.vue";

export default {
  components: {
    Nav,
  },
  methods: {
    async getUser() {
      const response = await UserService.getLoggedInUser();
      this.$store.dispatch("user", response.data);
    },
  },
};
</script>
