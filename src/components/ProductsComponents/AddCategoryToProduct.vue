<template>
  <div v-if="currentProduct" class="container">
    <form @submit.prevent="" class="mt-6">
      <section>
        <b-field label="Product Id">
          <b-input
            placeholder="Product Id"
            v-model="currentProduct.id"
            type="text"
            maxlength="30"
          ></b-input>
        </b-field>

        <b-field label="Category Id">
          <b-input
            placeholder="1000"
            v-model="product.categoriesId"
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
      currentProduct: null,
    };
  },
  methods: {
    async handleSubmit() {
      const data = {
        categoriesId: this.product.categoriesId,
        productsId: this.currentProduct.id,
      };
      console.log(data);
      try {
        await ProductsService.addCategoryToProduct(data);
        this.$swal("Added!", "The Category has been added.", "success");
        this.$router.push("/productsList");
      } catch (error) {
        console.log(error);
      }
    },
    async getProduct(id) {
      try {
        const response = await ProductsService.get(id);
        this.currentProduct = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
