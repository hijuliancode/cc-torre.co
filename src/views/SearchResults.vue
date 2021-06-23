<template>
  <div class="page-search-results">
    SearchResults

    <button @click="handleClick" >Click</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import HeaderNav from '@/components/HeaderNav.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'SearchResults',
  data() {
    return {
      results: [],
    };
  },
  methods: {
    handleClick() {
      console.log('Haz hecho click', this.results);
    },
  },
  async mounted() {
    const { data } = await this.axios.get('https://jsonplaceholder.typicode.com/users');
    this.results = data;
  },
});
</script>
