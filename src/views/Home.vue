<template>
  <div class="home">
    <HeaderNav />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderNav from '@/components/HeaderNav.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    HeaderNav,
  },
});
</script>
