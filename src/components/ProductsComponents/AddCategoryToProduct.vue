<template>
  <div sclass="container">
    <form @submit.prevent="" class="mt-6">
      <section>
        <b-field label="Product Id">
          <b-input
            placeholder="Product Id"
            v-model="product.categoriesId"
            type="text"
            maxlength="30"
          ></b-input>
        </b-field>

        <b-field label="Category Id">
          <b-input
            placeholder="1000"
            v-model="product.productsId"
            type="number"
            maxlength="30"
          ></b-input>
        </b-field>
      </section>

      <div class="field is-grouped mt-1">
        <div class="control">
          <button class="button is-link" @click="handleSubmit">Submit</button>
        </div>
        <div class="control">
          <b-button
            class="button"
            type="button"
            tag="router-link"
            :to="{ path: '/productsList' }"
            >Cancel</b-button
          >
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import ProductsService from "../../services/ProductsService.js";
export default {
  mounted() {
    this.message = "";
    this.getProduct(this.$route.params.id);
  },
  data() {
    return {
      product: {
        categoriesId: null,
        productsId: null,
      },
    };
  },
  methods: {
    async handleSubmit() {
      const data = {
        categoriesId: this.product.categoriesId,
        productsId: this.product.productsId,
      };

      try {
        await ProductsService.addCategoryToProduct(data);
        alert("Category added to product successfully");
        this.$router.push("/productsList");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
