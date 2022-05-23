<template>
  <b-navbar>
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          alt="Vue logo"
          class="logo"
          src="../assets/logo.svg"
          width="125"
          height="125"
        />
      </b-navbar-item>
    </template>
    <template #start v-if="!user">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        Home
      </b-navbar-item>
    </template>
    <template #start v-else="user.isAdmin === true">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        Home
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/list' }">
        Categories
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/userList' }">
        Users
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/ProductsList' }">
        Products
      </b-navbar-item>
    </template>

    <template #end v-if="!user">
      <b-navbar-item tag="div">
        <div class="buttons">
          <b-navbar-item
            class="button is-primary"
            tag="router-link"
            :to="{ path: '/register' }"
          >
            <strong>Sign up</strong>
          </b-navbar-item>
          <b-navbar-item tag="router-link" :to="{ path: '/login' }">
            Log in
          </b-navbar-item>
        </div>
      </b-navbar-item>
    </template>
    <template #end v-else="user">
      <b-navbar-item tag="div">
        <div class="buttons">
          <a
            class="button is-primary"
            href="javascript:void(0)"
            @click="handleLogout"
          >
            <strong>Logout</strong>
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
import { mapGetters } from "vuex";
import LogInService from "../services/LogInService";
export default {
  name: "Nav",
  methods: {
    handleLogout() {
      LogInService.logout();
      this.$store.dispatch("user", null);
      this.$router.push("/");
    },
  },
  computed: {
    ...mapGetters(["user"]),
  },
};
</script>
