import axios from 'axios';
import { useContext } from 'vue';
import { createStore } from 'vuex';

export default createStore({
  state: {
    loading: false,
    jobs_results: [],
    users_results: [],
    job_selected: {},
    user_selected: {},
  },
  mutations: {
    setJobs(state, payload) {
      state.jobs_results = payload;
    },
    setUsers(state, payload) {
      state.users_results = payload;
    },
    setJobSelected(state, payload) {
      state.job_selected = payload;
    },
    setUserSelected(state, payload) {
      state.user_selected = payload;
    },
    loading(state, payload) {
      state.loading = payload;
    },
  },
  actions: {
    async searchJobs(context, query) {
      context.commit('loading', true);
      this.dispatch('cleanUsers');
      try {
        const { data } = await axios.post(
          'https://search.torre.co/opportunities/_search/?offset=0&size=4&aggregate=true',
          {
            body: {
              'skill/role': {
                text: query,
                experience: 'potential-to-develop',
              },
            },
          },
        );
        const { results } = data;
        context.commit('setJobs', results);
        context.commit('loading', false);
        console.log('searchJobs results=>', results);
      } catch (err) {
        console.warn('searchJobs err => ', err);
      }
    },
    async searchUsers(context, query) {
      context.commit('loading', true);
      this.dispatch('cleanJobs');
      try {
        const { data } = await axios.post(
          'https://search.torre.co/people/_search/?offset=0&size=4&aggregate=true',
          {
            body: {
              name: {
                term: query,
              },
            },
          },
        );
        const { results } = data;
        context.commit('setUsers', results);
        context.commit('loading', false);
        console.log('searchUsers results=>', results);
      } catch (err) {
        console.warn('searchUsesr err => ', err);
      }
    },
    cleanJobs(context) {
      context.commit('setJobs', []);
    },
    cleanUsers(context) {
      context.commit('setUsers', []);
    },
  },
  modules: {},
});
