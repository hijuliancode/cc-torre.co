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

    <button @click="getJob('Jdm8pXqw')" type="button">Buscar un trabajo</button>
    <button @click="getUser('andresurreao')" type="button">Buscar un usuario</button>

    <div class="loading" v-if="loading">loading...</div>

    <hr/>
    {{jobs_results}}
    {{users_results}}
    {{job_selected}}
    {{user_selected}}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapState } from 'vuex';

export default defineComponent({
  name: 'SearchResults',
  computed: {
    ...mapState(['loading', 'jobs_results', 'users_results', 'job_selected', 'user_selected']),
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
    ...mapActions(['searchJobs', 'searchUsers', 'getJob', 'getUser']),
  },
  async mounted() {
    console.log('mounted');
  },
});
</script>
