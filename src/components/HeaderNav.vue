<template>
  <header class="header">
    <nav id="nav" class="header__nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/users/andresurreao">Users</router-link> |
      <router-link to="/jobs/Jdm8pXqw">Jobs</router-link> |
      <router-link to="/search">Search</router-link>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HeaderNav',
});
</script>
