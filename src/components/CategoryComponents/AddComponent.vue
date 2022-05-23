<template>
  <div class="container">
    <form @submit.prevent="" class="mt-6">
      <section>
        <b-field label="Category Name">
          <b-input
            placeholder="Category Name"
            v-model="category.categoryName"
            type="text"
            maxlength="30"
          ></b-input>
        </b-field>
      </section>

      <div class="field is-grouped mt-1">
        <div class="control">
          <button class="button is-link" @click="saveCategory">Submit</button>
        </div>
        <div class="control">
          <b-button
            class="button"
            type="button"
            tag="router-link"
            :to="{ path: '/list' }"
            >Cancel</b-button
          >
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import CategoryService from "../../services/CategoryService.js";
export default {
  data() {
    return {
      category: {
        categoryName: "",
      },
    };
  },
  methods: {
    async saveCategory() {
      try {
        const data = {
          categoryName: this.category.categoryName,
        };
        await CategoryService.create(data);
        this.$swal("Added!", "The Category has been added.", "success");
        this.$router.push("/list");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
