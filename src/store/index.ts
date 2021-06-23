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
      // context.commit('loading', true);
      try {
        const { data } = await axios.post('https://search.torre.co/opportunities/_search/?offset=0&size=4&aggregate=true', {
          body: {
            'skill/role': {
              text: query,
              experience: 'potential-to-develop',
            },
          },
        });
        context.commit('setJobs', data);
        context.commit('loading', false);
        console.log('searchJobs data=>', data);
      } catch (err) {
        console.warn('searchJobs err => ', err);
      }
    },
    async searchUsers(context, query) {
      // context.commit('loading', true);
      try {
        const { data } = await axios.post('https://search.torre.co/people/_search/?offset=0&size=4&aggregate=true', {
          body: {
            name: {
              term: query,
            },
          },
        });
        context.commit('setUsers', data);
        context.commit('loading', false);
        console.log('searchUsers data=>', data);
      } catch (err) {
        console.warn('searchUsesr err => ', err);
      }
    },
  },
  modules: {
  },
});
