import Vue from 'vue';
import VueRouter from 'vue-router';
import CardList from '../views/CardList.vue';
import CreateCard from '../views/CreateCard';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'CardList',
    component: CardList
  },
  {
    path: '/cards/create',
    name: 'CreateCard',
    component: CreateCard
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
