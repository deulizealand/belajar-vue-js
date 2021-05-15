import { createRouter, createWebHistory } from "vue-router";

const routes = [{
        path: "/transaction",
        name: "Transaction.Index",
        component: () =>
            import ("../views/transaction/Index.vue"),
    },
    {
        path: "/transaction/create",
        name: "Transaction.Create",
        component: () =>
            import ("../views/transaction/Create.vue"),
    },
    {
        path: "/transaction/edit/:id",
        name: "Transaction.Edit",
        component: () =>
            import ("../views/transaction/Edit.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;