import Vue from "vue";
import VueRouter from "vue-router";

import SearchGamePage from "../components/pages/search/SearchGamePage.vue";
import RulesPage from "../components/pages/rules/RulesPage.vue";
import CardsPage from "../components/pages/cards/CardsPage.vue";
import AboutPage from "../components/pages/about/AboutPage.vue";

Vue.use(VueRouter);

const routes = [
 { path: "/game", component: SearchGamePage },
 { path: "/rules", component: RulesPage },
 { path: "/cards", component: CardsPage },
 { path: "/about", component: AboutPage },
];

const router = new VueRouter({
 routes,
});

export default router;
