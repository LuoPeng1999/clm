export default {
  namespaced: true,
  state: {
    lists: [
      {
        available: 2,
        condition: "无使用门槛\n最多优惠12元",
        reason: "",
        value: 150,
        name: "优惠券名称",
        startAt: 1489104000,
        endAt: 1514592000,
        valueDesc: "1.5",
        unitDesc: "元"
      },
      {
        available: 2,
        condition: "无使用门槛\n最多优惠12元",
        reason: "",
        value: 500,
        name: "优惠券名称",
        startAt: 1489104000,
        endAt: 1514592000,
        valueDesc: "5",
        unitDesc: "元"
      }
    ]
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
