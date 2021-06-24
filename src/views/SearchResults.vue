<template>
  <div class="page-search-results">
    SearchResults

    <form @submit.prevent="searchJobs(search.query)">
      <input type="text" placeholder="Buscar trabajo..." v-model="search.queryJobs"/>
      <button type="submit">Buscar Trabajo</button>
    </form>
    <form @submit.prevent="searchUsers(search.query)">
      <input type="text" placeholder="Buscar usuarios..." v-model="search.queryUsers"/>
      <button type="submit">Buscar Usuarios</button>
    </form>
    {{search}}

    <div class="loading" v-if="loading">loading...</div>

    <hr/>
    {{jobs_results}}
    {{users_results}}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapState } from 'vuex';
// import HeaderNav from '@/components/HeaderNav.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'SearchResults',
  computed: {
    ...mapState(['loading', 'jobs_results', 'users_results']),
  },
  data() {
    return {
      search: {
        queryJobs: '',
        queryUsers: '',
      },
    };
  },
  methods: {
    ...mapActions(['searchJobs', 'searchUsers', 'cleanJobs', 'cleanUsers']),
  },
  async mounted() {
    console.log('mounted');
  },
});
</script>
