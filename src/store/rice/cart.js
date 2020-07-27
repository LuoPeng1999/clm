export default {
  namespaced: true,
  state: {
    lists: []
    // num: 0
  },
  mutations: {
    add(state, obj) {
      let index = state.lists.findIndex(val => val.id == obj.id);
      if (index == "-1") {
        // obj.num = 1;
        state.lists.push(obj);
      }
      console.log(state.lists);
    }
  },
  actions: {},
  modules: {},
  getters: {}
};
