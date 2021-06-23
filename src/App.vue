<template>
  <HeaderNav />
  <router-view/>
</template>

<style lang="scss">
  @import './scss/main.scss';
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderNav from '@/components/HeaderNav.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'App',
  components: {
    HeaderNav,
  },
});
</script>
