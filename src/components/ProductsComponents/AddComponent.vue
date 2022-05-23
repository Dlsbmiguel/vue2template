<template>
  <div class="container">
    <form @submit.prevent="" class="mt-6">
      <section>
        <b-field label="Product Name">
          <b-input
            placeholder="Product Name"
            v-model="product.productName"
            type="text"
            maxlength="30"
          ></b-input>
        </b-field>

        <b-field label="Price">
          <b-input
            placeholder="1000"
            v-model="product.productPrice"
            type="number"
            maxlength="30"
          ></b-input>
        </b-field>

        <b-field label="Description">
          <b-input
            placeholder="Something goes here"
            v-model="product.productDescription"
            type="text"
            maxlength="30"
          ></b-input>
        </b-field>

        <b-field label="Stock">
          <b-input
            placeholder="1000"
            v-model="product.inStock"
            type="text"
            maxlength="30"
          ></b-input>
        </b-field>
      </section>

      <div class="field is-grouped mt-1">
        <div class="control">
          <button class="button is-link" @click="saveProduct">Submit</button>
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
  data() {
    return {
      product: {
        productName: "",
        productPrice: 0,
        productDescription: "",
        inStock: 0,
      },
    };
  },
  methods: {
    async saveProduct() {
      try {
        const data = {
          productName: this.product.productName,
          productPrice: this.product.productPrice,
          productDescription: this.product.productDescription,
          inStock: this.product.inStock,
        };
        await ProductsService.create(data);
        this.$swal("Added!", "Your Product has been added.", "success");
        this.$router.push("/productsList");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
