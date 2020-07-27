// 首页/美食
export default {
  path: "/hamburger",
  name: "汉堡薯条",
  component: () => import("../../views/home/hamburger.vue"),
  children: [
    {
      path: "all",
      name: "全部",
      component: () => import("../../components/hamburger/all.vue")
    },
    {
      path: "hamburger",
      name: "汉堡披萨",
      component: () => import("../../components/hamburger/hamburger.vue")
    },
    {
      path: "pasta",
      name: "意面披萨",
      component: () => import("../../components/hamburger/pasta.vue")
    }
  ]
};
