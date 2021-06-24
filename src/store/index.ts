import axios from 'axios';
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
        console.log('results jobs', results);
        context.commit('setJobs', results);
        context.commit('loading', false);
      } catch (err) {
        console.warn('searchJobs err => ', err);
      }
    },
    async getJob(context, id) {
      context.commit('loading', true);
      try {
        const { data } = await axios.get(`https://torre.co/api/opportunities/${id}`);
        context.commit('setJobSelected', data);
        context.commit('loading', false);
      } catch (err) {
        console.warn('getJob error', err);
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
      } catch (err) {
        console.warn('searchUsesr err => ', err);
      }
    },
    async getUser(context, id) {
      context.commit('loading', true);
      try {
        const { data } = await axios.get(`https://guarded-peak-77488.herokuapp.com/http://bio.torre.co/api/bios/${id}`);
        console.log('getUser data', data);
        context.commit('setUserSelected', data);
        context.commit('loading', false);
      } catch (err) {
        console.warn('getUser error', err);
      }
    },
    async setLoading(context, _loading:boolean) {
      context.commit('loading', _loading);
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
