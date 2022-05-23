<template>
  <div class="container">
    <div class="mt-6">
      <h1 class="mb-4"><strong>Users List</strong></h1>
      <b-table
        :data="users"
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
          {{ props.row.firstName }}
        </b-table-column>

        <b-table-column label="Last Name" v-slot="props">
          {{ props.row.lastName }}
        </b-table-column>

        <b-table-column label="Email Name" v-slot="props">
          {{ props.row.email }}
        </b-table-column>

        <b-table-column label="Wallet" v-slot="props">
          {{ props.row.wallet }}
        </b-table-column>

        <b-table-column label="Roles" v-slot="props">
          {{ props.row.isAdmin }}
        </b-table-column>

        <b-table-column label="Actions" v-slot="props" class="level">
          <div class="level-right">
            <b-button class="control mr-4" @click="go(props.row.id)"
              >Edit</b-button
            >
            <b-button
              class="control"
              @click="deleteUser(props.row.id)"
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
import UserService from "../../services/UserService";
export default {
  mounted() {
    this.retrieveUsers();
  },
  data() {
    return {
      users: [],
      currentUser: null,
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
      this.$router.push(`/userDetails/${id}`);
    },
    setActiveUser(user, index) {
      this.currentUser = user;
      this.currentIndex = user ? index : -1;
    },
    refreshList() {
      this.retrieveUsers();
      this.currentUser = null;
      this.currentIndex = -1;
    },
    async retrieveUsers() {
      try {
        this.isLoading = true;
        const response = await UserService.getAll();
        this.users = response.data;
        this.isLoading = false;
      } catch (error) {
        console.log(error);
      }
    },
    async searchId() {
      try {
        const response = await UserService.get(this.id);
        this.users = response.data;
        this.setActiveUser(this.users, this.currentIndex);
      } catch (error) {
        console.log(error);
      }
    },
    async deleteUser(id) {
      try {
        if (confirm("Do you want to delete this row?")) {
          await UserService.delete(id);
          this.refreshList();
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
