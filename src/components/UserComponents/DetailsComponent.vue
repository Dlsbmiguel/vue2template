<template>
  <div v-if="currentUser" class="container">
    <form @submit.prevent="">
      <section>
        <b-field label="First Name">
          <b-input
            placeholder="Jon"
            v-model="currentUser.firstName"
            type="text"
            maxlength="30"
          ></b-input>
        </b-field>

        <b-field label="Last Name">
          <b-input
            placeholder="Doe"
            v-model="currentUser.lastName"
            type="text"
            maxlength="30"
          ></b-input>
        </b-field>

        <b-field label="Email">
          <b-input
            placeholder="jon@doe.com"
            type="email"
            maxlength="30"
            v-model="currentUser.email"
          ></b-input>
        </b-field>

        <b-field label="Wallet">
          <b-input
            placeholder="*****"
            type="number"
            v-model="currentUser.wallet"
            maxlength="30"
          ></b-input>
        </b-field>
      </section>

      <div class="field is-grouped mt-6">
        <div class="control">
          <button class="button is-link" @click="updateUser">Submit</button>
        </div>
        <div class="control">
          <button class="button is-link is-light" @click="goBack">
            Cancel
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import UserService from "../../services/UserService.js";
export default {
  mounted() {
    this.message = "";
    this.getUser(this.$route.params.id);
  },
  data() {
    return {
      currentUser: null,
      message: "",
    };
  },
  methods: {
    goBack() {
      this.$router.push("/userList");
    },
    async getUser(id) {
      try {
        const response = await UserService.get(id);
        this.currentUser = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async updateUser() {
      try {
        await UserService.update(this.currentUser.id, this.currentUser);
        alert((this.message = "The User was updated successfully!"));
        this.$router.push("/userList");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
