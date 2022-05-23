<template>
  <div class="container">
    <div class="level mt-5">
      <div class="level-left">
        <div class="level-item">
          <div class="field has-addons">
            <p class="control">
              <b-button
                class="button"
                type="button"
                tag="router-link"
                :to="{ path: '/add' }"
                >Add Categories</b-button
              >
            </p>
          </div>
        </div>
      </div>
    </div>

    <div>
      <h1><strong>Category List</strong></h1>
      <b-table
        :data="categories"
        :loading="isLoading"
        :bordered="isBordered"
        :paginated="isPaginated"
        :per-page="perPage"
        :curret-page.syc="currentPage"
      >
        <b-table-column label="ID" width="40" numeric v-slot="props">
          {{ props.row.id }}
        </b-table-column>

        <b-table-column label="First Name" v-slot="props">
          {{ props.row.categoryName }}
        </b-table-column>

        <b-table-column label="Actions" v-slot="props" class="level">
          <div class="level-right">
            <b-button class="control mr-4" @click="go(props.row.id)"
              >Edit</b-button
            >
            <b-button
              class="control"
              @click="deleteCategory(props.row.id)"
              type="is-danger"
              >Delete</b-button
            >
          </div>
        </b-table-column>
      </b-table>
    </div>
  </div>
</template>

<script>
import CategoryService from "../../services/CategoryService";
export default {
  mounted() {
    this.retrieveCategories();
  },
  data() {
    return {
      categories: [],
      currentCategory: null,
      currentIndex: -1,
      id: null,
      isLoading: false,
      isBordered: true,
      isPaginated: true,
      currentPage: 1,
      perPage: 5,
    };
  },
  methods: {
    go(id) {
      this.$router.push(`/details/${id}`);
    },
    async retrieveCategories() {
      try {
        this.isLoading = true;
        const response = await CategoryService.getAll();
        this.categories = response.data;
        this.isLoading = false;
      } catch (error) {
        console.log(error);
      }
    },
    setActiveCategory(category, index) {
      this.currentCategory = category;
      this.currentIndex = category ? index : -1;
    },
    async searchId() {
      try {
        const response = await CategoryService.get(this.id);
        this.categories = response.data;
        this.setActiveCategory(this.categories, this.currentIndex);
      } catch (error) {
        console.log(error);
      }
    },
    refreshList() {
      this.retrieveCategories();
      this.currentCategory = null;
      this.currentIndex = -1;
    },
    async deleteCategory(id) {
      try {
        if (confirm("Do you want to delete this row?")) {
          await CategoryService.delete(id);
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
