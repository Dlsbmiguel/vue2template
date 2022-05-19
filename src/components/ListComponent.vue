<template>
  <div class="container">
    <div class="level">
      <div class="level-left">
        <div class="level-item">
          <div class="field has-addons">
            <p class="control">
              <input
                class="input"
                type="text"
                placeholder="Find a category"
                v-model="id"
              />
            </p>
            <p class="control">
              <b-button class="button" type="button" @click="searchId"
                >Search</b-button
              >
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col">
      <h4>Category List</h4>
      <b-table :data="categories">
        <b-table-column label="ID" width="40" numeric v-slot="props">
          {{ props.row.id }}
        </b-table-column>

        <b-table-column label="First Name" v-slot="props">
          {{ props.row.categoryName }}
        </b-table-column>

        <b-table-column label="Actions" v-slot="props">
          <b-button @click="go(props.row.id)">Edit</b-button>
          <b-button @click="deleteCategory(props.row.id)" type="is-danger"
            >Delete</b-button
          >
        </b-table-column>
      </b-table>
    </div>
  </div>
</template>

<script>
import CategoryData from "../services/CategoryService.js";
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
    };
  },
  methods: {
    go(id) {
      this.$router.push(`/details/${id}`);
    },
    retrieveCategories() {
      CategoryData.getAll()
        .then((res) => {
          this.categories = res.data;
          console.log(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    setActiveCategory(category, index) {
      this.currentCategory = category;
      this.currentIndex = category ? index : -1;
    },
    searchId() {
      CategoryData.get(this.id)
        .then((response) => {
          this.categories = response.data;
          this.setActiveCategory(this.categories, this.currentIndex);
          console.log(this.categories);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    refreshList() {
      this.retrieveCategories();
      this.currentCategory = null;
      this.currentIndex = -1;
    },
    deleteCategory(id) {
      CategoryData.delete(id)
        .then((response) => {
          console.log(response.data);
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>
