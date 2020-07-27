// 首页/美食
export default {
  path: "/drink",
  name: "美食",
  component: () => import("../../views/home/drink.vue"),
  children: [
    {
      path: "all",
      name: "全部",
      component: () => import("../../components/drink/all.vue")
    },
    {
      path: "juice",
      name: "奶茶果汁",
      component: () => import("../../components/drink/juice.vue")
    },
    {
      path: "dessert",
      name: "甜品",
      component: () => import("../../components/drink/dessert.vue")
    },
    {
      path: "coffee",
      name: "咖啡",
      component: () => import("../../components/drink/coffee.vue")
    },
    {
      path: "cake",
      name: "蛋糕",
      component: () => import("../../components/drink/cake.vue")
    },
    {
      path: "bread",
      name: "面包",
      component: () => import("../../components/drink/bread.vue")
    }
  ]
};
