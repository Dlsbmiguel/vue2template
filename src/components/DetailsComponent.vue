<template>
  <div v-if="currentCategory" class="edit-form">
    <h4>Category</h4>
    <form>
      <div class="form-group">
        <label for="title" class="text-gray-700">Name</label>
        <input
          type="text"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          id="categoryName"
          v-model="currentCategory.categoryName"
        />
      </div>
    </form>
    <!-- <RouterLink to="/list">Go back</RouterLink> -->
    <button type="submit" class="" @click="updateCategory">Update</button>
    <p>{{ message }}</p>
  </div>
</template>
<script>
import CategoryData from "../services/CategoryService.js"
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
    getCategory(id) {
      CategoryData.get(id)
        .then((response) => {
          this.currentCategory = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    updateCategory() {
      CategoryData.update(this.currentCategory.id, this.currentCategory)
        .then((response) => {
          console.log(response.data);
          this.message = "The Category was updated successfully!";
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>
