// 首页/美食
export default {
  path: "/food",
  name: "美食",
  component: () => import("../../views/home/food.vue"),
  children: [
    {
      path: "all",
      name: "全部",
      component: () => import("../../components/food/all.vue")
    },
    {
      path: "convenient",
      name: "简餐便当",
      component: () => import("../../components/food/convenient.vue")
    },
    {
      path: "gruel",
      name: "面食粥点",
      component: () => import("../../components/food/gruel.vue")
    },
    {
      path: "hamburger",
      name: "汉堡披萨",
      component: () => import("../../components/food/hamburger.vue")
    },
    {
      path: "incensepot",
      name: "香锅冒菜",
      component: () => import("../../components/food/incensepot.vue")
    },
    {
      path: "japanese",
      name: "日韩料理",
      component: () => import("../../components/food/japanese.vue")
    },
    {
      path: "snack",
      name: "小吃炸串",
      component: () => import("../../components/food/snack.vue")
    },
    {
      path: "localdish",
      name: "地方菜系",
      component: () => import("../../components/food/localdish.vue")
    },
    {
      path: "lightfood",
      name: "轻食简餐",
      component: () => import("../../components/food/lightfood.vue")
    }
  ]
};
