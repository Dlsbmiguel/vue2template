<template>
  <main class="container">
    <h1 class="my-5 title is-1"><strong>Tienda</strong></h1>
    <div class="columns is-half-desktop">
      <div class="column" v-for="product in products">
        <div class="card">
          <div class="card-image">
            <figure class="image is-96x96">
              <img src="../assets/logo.svg" alt="Placeholder image" />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-5">{{ product.productName }}</p>
                <p class="subtitle is-6">Precio: {{ product.productPrice }}</p>
              </div>
            </div>

            <div class="content">
              {{ product.productDescription }}
              <br />
              <b-button type="is-success" class="mt-3">Add to cart</b-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import ProductsService from "../services/ProductsService";
export default {
  mounted() {
    this.retrieveProducts();
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    async retrieveProducts() {
      try {
        this.isLoading = true;
        const response = await ProductsService.getAll();
        this.products = response.data;
        this.isLoading = false;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
