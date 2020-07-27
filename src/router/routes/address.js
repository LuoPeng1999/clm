export default [
  {
    path: "/add",
    name: "添加地址",
    component: () => import("../../components/address/add.vue")
  },
  {
    path: "/address",
    name: "地址",
    component: () => import("../../components/address/address.vue")
  },
  {
    path: "/edit",
    name: "修改地址",
    component: () => import("../../components/address/edit.vue")
  }
];
