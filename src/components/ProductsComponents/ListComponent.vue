<template>
  <div class="container">
    <div class="level mt-6">
      <div class="level-left">
        <div class="level-item">
          <div class="field has-addons">
            <p class="control">
              <b-button
                class="button"
                type="button"
                tag="router-link"
                :to="{ path: '/addProduct' }"
                >Add Products</b-button
              >
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col">
      <h4 class="mb-4"><strong>Products List</strong></h4>
      <b-table
        :data="products"
        :loading="isLoading"
        :bordered="isBordered"
        :paginated="isPaginated"
        :per-page="perPage"
        :curret-page.syc="currentPage"
      >
        <b-table-column label="ID" width="40" numeric v-slot="props">
          {{ props.row.id }}
        </b-table-column>

        <b-table-column label="Product Name" v-slot="props">
          {{ props.row.productName }}
        </b-table-column>

        <b-table-column label="Price" v-slot="props">
          RD$ {{ props.row.productPrice }}
        </b-table-column>

        <b-table-column label="Description" v-slot="props">
          {{ props.row.productDescription }}
        </b-table-column>

        <b-table-column label="Stock" v-slot="props">
          {{ props.row.inStock }}
        </b-table-column>

        <b-table-column label="Actions" v-slot="props" class="level">
          <div class="level-right">
            <b-button
              class="control mr-4"
              @click="goToAddCategoryToProduct(props.row.id)"
              >Add category</b-button
            >
            <b-button class="control mr-4" @click="go(props.row.id)"
              >Edit</b-button
            >
            <b-button
              class="control"
              @click="deleteProduct(props.row.id)"
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
import ProductsService from "../../services/ProductsService";
export default {
  mounted() {
    this.retrieveProducts();
  },
  data() {
    return {
      products: [],
      currentProduct: null,
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
      this.$router.push(`/productsDetails/${id}`);
    },
    goToAddCategoryToProduct(id) {
      this.$router.push(`/addCategoryToProduct/${id}`);
    },
    setActiveCategory(product, index) {
      this.currentProduct = product;
      this.currentIndex = product ? index : -1;
    },
    refreshList() {
      this.retrieveProducts();
      this.currentProduct = null;
      this.currentIndex = -1;
    },
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
    async searchId() {
      try {
        const response = await ProductsService.get(this.id);
        this.products = response.data;
        this.setActiveCategory(this.products, this.currentIndex);
      } catch (error) {
        console.log(error);
      }
    },
    deleteProduct(id) {
      this.$swal({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          ProductsService.delete(id)
            .then()
            .catch((e) => {
              console.log(e);
            });
          this.$swal("Deleted!", "Your file has been deleted.", "success");
          this.refreshList();
        }
      });
    },
  },
};
</script>
