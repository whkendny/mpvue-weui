import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import mutations from './mutations';
import * as getters from './getters';
import * as actions from './actions';

// 将状态从根组件"注入"到每一个根的子组件中
// 通过`this.$store`可以访问到
Vue.use(Vuex);
export default new Vuex.Store({ // eslint-disable-line
  state,
  mutations,
  actions,
  getters
});
