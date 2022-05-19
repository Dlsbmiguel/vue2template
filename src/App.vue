<script setup></script>

<template>
  <div id="app">
    <header>
      <b-navbar>
        <template #brand>
          <b-navbar-item tag="router-link" :to="{ path: '/' }">
            <img
              alt="Vue logo"
              class="logo"
              src="./assets/logo.svg"
              width="125"
              height="125"
            />
          </b-navbar-item>
        </template>
        <template #start>
          <b-navbar-item tag="router-link" :to="{ path: '/' }">
            Home
          </b-navbar-item>
          <b-navbar-item tag="router-link" :to="{ path: '/list' }">
            Categories
          </b-navbar-item>
        </template>

        <template #end>
          <b-navbar-item tag="div">
            <div class="buttons">
              <a class="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a class="button is-light"> Log in </a>
            </div>
          </b-navbar-item>
        </template>
      </b-navbar>
    </header>
    <router-view></router-view>
  </div>
</template>
