<template>
  <div class="container">
    <form @submit.prevent="handleSubmit">
      <section>
        <b-field label="First Name">
          <b-input
            placeholder="Jon"
            v-model="firstName"
            type="text"
            maxlength="30"
          ></b-input>
        </b-field>

        <b-field label="Last Name">
          <b-input
            placeholder="Doe"
            v-model="lastName"
            type="text"
            maxlength="30"
          ></b-input>
        </b-field>

        <b-field label="Email">
          <b-input
            placeholder="jon@doe.com"
            type="text"
            maxlength="30"
            v-model="email"
          ></b-input>
        </b-field>

        <b-field label="Password">
          <b-input
            placeholder="*****"
            type="password"
            v-model="password"
            maxlength="30"
          ></b-input>
        </b-field>

        <b-field label="Confirm Password">
          <b-input
            placeholder="*****"
            type="password"
            v-model="passwordConfirm"
            maxlength="30"
          ></b-input>
        </b-field>
      </section>

      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link">Submit</button>
        </div>
        <div class="control">
          <button class="button is-link is-light">Cancel</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import UserService from "../../services/UserService.js";
export default {
  name: "login",
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirm: "",
    };
  },
  methods: {
    async handleSubmit() {
      const data = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
      };
      await UserService.create(data);
      this.$swal("User created!", "Login to start working", "success");
      this.$router.push("/login");
    },
  },
};
</script>
