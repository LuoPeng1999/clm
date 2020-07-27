// 商家之一----木桶饭
export default {
  path: "/quality",
  name: "品质套餐",
  component: () => import("../../views/home/quality"),
  children: [
    {
      path: "all",
      name: "全部类别",
      component: () => import("../../components/quality/all.vue")
    },
    {
      path: "convenient",
      name: "简餐便当",
      component: () => import("../../components/quality/convenient.vue")
    },
    {
      path: "tradition",
      name: "传统美食",
      component: () => import("../../components/quality/tradition.vue")
    },
    {
      path: "westernfood",
      name: "西式套餐",
      component: () => import("../../components/quality/westernfood.vue")
    },
    {
      path: "macau",
      name: "港澳风味",
      component: () => import("../../components/quality/macau.vue")
    },
    {
      path: "korea",
      name: "日韩料理",
      component: () => import("../../components/quality/korea.vue")
    }
  ]
};
