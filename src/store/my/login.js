export default {
  namespaced: true,
  state: {
    lists: []
    // num: 0
  },
  mutations: {
    add(state, obj) {
      state.lists.push(obj);
      //  console.log(state.lists);
    }
  },
  actions: {},
  modules: {},
  getters: {}
};
