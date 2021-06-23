<template>
  <header class="header">
    <nav id="nav" class="header__nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/users">Users</router-link>
      <router-link to="/jobs">Jobs</router-link>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HeaderNav',
});
</script>
