<template>
  <div v-if="currentProduct" class="container">
    <form @submit.prevent="">
      <section>
        <b-field label="Product Name">
          <b-input
            placeholder="Product Name"
            v-model="currentProduct.productName"
            type="text"
            maxlength="50"
          ></b-input>
        </b-field>

        <b-field label="Price">
          <b-input
            placeholder="Doe"
            v-model="currentProduct.productPrice"
            type="text"
            maxlength="50"
          ></b-input>
        </b-field>

        <b-field label="Description">
          <b-input
            placeholder="jon@doe.com"
            type="text"
            maxlength="50"
            v-model="currentProduct.productDescription"
          ></b-input>
        </b-field>

        <b-field label="Stock">
          <b-input
            placeholder="1000"
            type="number"
            v-model="currentProduct.inStock"
            maxlength="30"
          ></b-input>
        </b-field>
      </section>

      <div class="field is-grouped mt-6">
        <div class="control">
          <button class="button is-link" @click="updateProduct">Submit</button>
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
import ProductsService from "../../services/ProductsService.js";

export default {
  mounted() {
    this.message = "";
    this.getProduct(this.$route.params.id);
  },
  data() {
    return {
      currentProduct: null,
      message: "",
    };
  },
  methods: {
    goBack() {
      this.$router.push("/productsList");
    },
    async getProduct(id) {
      try {
        const response = await ProductsService.get(id);
        this.currentProduct = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async updateProduct() {
      try {
        console.log(this.currentProduct);
        await ProductsService.update(
          this.currentProduct.id,
          this.currentProduct
        );
        alert((this.message = "The Product was updated successfully!"));
        this.$router.push("/productsList");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
