<template>
  <div class="page-job-details">
    JobDetails
    <div class="loading" v-if="loading">loading...</div>

    <div class="job__desc" v-if="!loading">{{job_selected}}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapState } from 'vuex';

export default defineComponent({
  name: 'JobDetails',
  computed: {
    ...mapState(['loading', 'jobs_results', 'users_results', 'job_selected', 'user_selected']),
  },
  methods: {
    ...mapActions(['searchJobs', 'searchUsers', 'getJob', 'getUser', 'setLoading']),
  },
  async mounted() {
    this.setLoading(true);
    const idUser = await this.$route.params.id;
    this.getJob(idUser);
    console.log('mounted idUser', idUser);
  },
  // watch: {
  //   $route(to, from) {
  //   },
  // },
});
</script>
