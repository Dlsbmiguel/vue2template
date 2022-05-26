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
          <b-navbar-item @click="created"> Log in </b-navbar-item>
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
import CallForLoginOrHandleRedirect from "../config/azure-ad/settings";
import { mapGetters } from "vuex";
import LogInService from "../services/LogInService";
export default {
  name: "Nav",
  methods: {
    created() {
      CallForLoginOrHandleRedirect(this.onLoggedIn);
    },
    onLoggedIn(tokenResponse) {
      console.log(tokenResponse);
      localStorage.setItem("token", tokenResponse.accessToken);
      localStorage.setItem("ad_username", tokenResponse.account.username);
      this.$store.dispatch("user", {
        accessToken: tokenResponse.accessToken,
        userName: tokenResponse.account.name,
        email: tokenResponse.account.username,
      });
      this.UserService.getLoggedInUser()
        .then((response) => {
          console.log(response);
          return this.$store.dispatch("user", response.data);
        })
        .catch((e) => console.log(e));
    },
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
