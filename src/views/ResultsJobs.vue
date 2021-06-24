<template>
  <div class="page-results jobs">
    <div class="container">
      <h2 class="page-title">Jobs results:</h2>
      <div class="wrapper-results">
        <form class="form-search mb-6" @submit.prevent="searchJobs(search.queryJobs)">
          <input type="text" placeholder="Buscar trabajo..." v-model="search.queryJobs"/>
          <button type="submit">Buscar</button>
        </form>
        <CardJob v-for="job in jobs_results" v-bind:key="job.id" title={{job.id}} />
        {{ jobs_results }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapState } from 'vuex';
import CardJob from '@/components/CardJob.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'ResultsJobs',
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
  components: {
    CardJob,
  },
  async mounted() {
    console.log('mounted');
  },
});
</script>
