<template>
  <div class="page-user-details">
    UserDetails

    <div class="loading" v-if="loading">loading...</div>

    <div class="user__desc" v-if="!loading">{{user_selected}}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapState } from 'vuex';

export default defineComponent({
  name: 'UserDetails',
  computed: {
    ...mapState(['loading', 'jobs_results', 'users_results', 'job_selected', 'user_selected']),
  },
  methods: {
    ...mapActions(['searchJobs', 'searchUsers', 'getJob', 'getUser', 'setLoading']),
  },
  async mounted() {
    this.setLoading(true);
    const idUser = await this.$route.params.id;
    this.getUser(idUser);
    console.log('mounted idUser', idUser);
  },
});
</script>
