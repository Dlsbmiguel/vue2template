<template>
  <div class="container">
    <form @submit.prevent="handleSubmit">
      <section>
        <b-field label="Email">
          <b-input
            placeholder="insert your email"
            type="text"
            v-model="email"
            maxlength="30"
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
      </section>

      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link">Submit</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import LogInService from "../../services/LogInService";
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async handleSubmit() {
      try {
        const data = {
          email: this.email,
          password: this.password,
        };
        const response = await LogInService.login(data);
        this.$store.dispatch("user", response);
        console.log(response);
        this.$router.push("/");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
