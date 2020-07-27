export default {
  namespaced: true,
  state: {
    lists: [
      {
        id: "1",
        name: "张三",
        tel: "13870789383",
        address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室",
        isDefault: true,
        province: "浙江省",
        city: "杭州市",
        county: "西湖区",
        areaCode: "330106",
        addressDetail: "文三路 138 号东方通信大厦 7 楼 501 室"
      }
    ]
  },
  mutations: {
    add(state, obj) {
      state.lists.forEach(item => {
        item.isDefault = false;
      });
      obj.isDefault = true;
      obj.id = state.lists.length + 1;
      state.lists.push(obj);
    },
    edit(state, obj) {
      let index = state.lists.findIndex(item => item.id == obj.id);
      Object.assign(state.lists[index], obj);
    },
    editId(state, id) {
      state.lists.forEach(item => {
        item.isDefault = item.id == id ? true : false;
      });
    }
  }
};
