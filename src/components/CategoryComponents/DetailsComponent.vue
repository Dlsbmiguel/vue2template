<template>
  <div v-if="currentCategory" class="container">
    <form class="mt-6" @submit.prevent="">
      <section>
        <b-field label="Product Name">
          <b-input
            placeholder="Product Name"
            v-model="currentCategory.categoryName"
            type="text"
            maxlength="50"
          ></b-input>
        </b-field>
      </section>

      <div class="field is-grouped mt-6">
        <div class="control">
          <button class="button is-link" @click="updateCategory">Submit</button>
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
import CategoryService from "../../services/CategoryService.js";
export default {
  mounted() {
    this.message = "";
    this.getCategory(this.$route.params.id);
  },
  data() {
    return {
      currentCategory: null,
      message: "",
    };
  },
  methods: {
    goBack() {
      this.$router.push("/list");
    },
    async getCategory(id) {
      try {
        const response = await CategoryService.get(id);
        this.currentCategory = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async updateCategory() {
      try {
        await CategoryService.update(
          this.currentCategory.id,
          this.currentCategory
        );
        this.$swal("Updated!", "The Category has been updated.", "success");
        this.$router.push("/list");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
