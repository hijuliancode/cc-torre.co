<template>
  <div class="page-search">
    <div class="wrapper-search">
      <h1>jobs results</h1>
      {{ jobs_results }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapState } from 'vuex';

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
  async mounted() {
    console.log('mounted');
  },
});
</script>
