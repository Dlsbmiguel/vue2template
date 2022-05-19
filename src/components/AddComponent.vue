<!-- <script setup>
import { RouterLink } from "vue-router";
</script> -->

<template>
  <div class="mt-9 mx-auto max-w-md">
    <div v-if="!submitted">
      <div class="grid grid-cols-1 gap-6">
        <label class="block">
          <span class="text-gray-700">Name</span>
          <input
            type="text"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            id="categoryName"
            required
            v-model="category.categoryName"
            name="categoryName"
          />
        </label>
      </div>
      <button @click="saveCategory" class="btn btn-success">Submit</button>
    </div>
    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newCategory">Add</button>
    </div>
    <div>
      <!-- <RouterLink to="/list">Go Back</RouterLink> -->
    </div>
  </div>
</template>
<script>
import CategoryData from "../services/CategoryService.js";
export default {
  data() {
    return {
      category: {
        categoryName: "",
        id: null,
      },
      submitted: false,
    };
  },
  methods: {
    saveCategory() {
      const data = {
        categoryName: this.category.categoryName,
      };
      CategoryData.create(data)
        .then((response) => {
          this.category.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    newCategory() {
      this.submitted = false;
      this.tutorial = {};
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
