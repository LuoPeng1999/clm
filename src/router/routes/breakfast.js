// 首页/美食
export default {
  path: "/breakfast",
  name: "早餐",
  component: () => import("../../views/home/breakfast.vue"),
  children: [
    {
      path: "all",
      name: "全部",
      component: () => import("../../components/breakfast/all.vue")
    },
    {
      path: "bun",
      name: "简餐便当",
      component: () => import("../../components/breakfast/bun.vue")
    },
    {
      path: "dumpling",
      name: "面食粥点",
      component: () => import("../../components/breakfast/dumpling.vue")
    },
    {
      path: "fries",
      name: "汉堡披萨",
      component: () => import("../../components/breakfast/fries.vue")
    },
    {
      path: "bread",
      name: "香锅冒菜",
      component: () => import("../../components/breakfast/bread.vue")
    }
  ]
};
