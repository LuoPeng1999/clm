// 跑腿代购
export default {
  path: "/purchase",
  name: "跑腿代购",
  component: () => import("../../views/home/purchase.vue"),
  redirect: "/purchase/milktea",
  children: [
    {
      path: "milktea",
      name: "奶茶",
      component: () => import("../../components/purchase/milktea.vue")
    },
    {
      path: "coffee",
      name: "奶茶",
      component: () => import("../../components/purchase/coffee.vue")
    },
    {
      path: "refreshment",
      name: "小吃",
      component: () => import("../../components/purchase/refreshment.vue")
    },
    {
      path: "express",
      name: "快递",
      component: () => import("../../components/purchase/express.vue")
    },
    {
      path: "medicine",
      name: "药品",
      component: () => import("../../components/purchase/medicine.vue")
    },
    {
      path: "dish",
      name: "买菜",
      component: () => import("../../components/purchase/dish.vue")
    },
    {
      path: "brother",
      name: "万能小哥",
      component: () => import("../../components/purchase/brother.vue")
    },
    {
      path: "daily",
      name: "日用",
      component: () => import("../../components/purchase/daily.vue")
    },
    {
      path: "wine",
      name: "酒水",
      component: () => import("../../components/purchase/wine.vue")
    }
  ]
};
