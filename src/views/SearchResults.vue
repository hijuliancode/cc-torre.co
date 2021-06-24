<template>
  <div class="page-search">
    <div class="wrapper-search">
      <div class="area-a">
        <div class="area__image">
          <img src="" alt="" />
        </div>
        <h2 class="search-title">Job Search</h2>
        <form class="form-search" @submit.prevent="goToSearchJobs()">
          <input type="text" placeholder="Buscar trabajo..." v-model="search.queryJobs"/>
          <button type="submit">Buscar</button>
        </form>
      </div>
      <div class="area-b">
        <div class="area__image">
          <img src="" alt="" />
        </div>
        <h2 class="search-title">User Search</h2>
        <form class="form-search" @submit.prevent="goToSearchUsers()">
          <input type="text" placeholder="Buscar usuarios..." v-model="search.queryUsers"/>
          <button type="submit">Buscar</button>
        </form>
      </div>
    </div>
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
    goToSearchJobs() {
      console.log('GO TO SEARCH JOBS');
      this.searchJobs(this.search.queryJobs);
      this.$router.push('/jobs/results');
    },
    goToSearchUsers() {
      console.log('GO TO SEARCH USERS');
      this.searchUsers(this.search.queryUsers);
      this.$router.push('/users/results');
    },
  },
  async mounted() {
    console.log('mounted');
  },
});
</script>
