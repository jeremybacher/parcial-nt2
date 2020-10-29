import { createWebHistory, createRouter } from 'vue-router';

import CreateExpense from '../components/CreateExpense.vue';
import ListExpenses from '../components/ListExpenses.vue';
import MultipleChoice from '../components/MultipleChoice.vue';

const routes = [
    { path: '/', name: 'Home', component: ListExpenses },
    { path: '/create-expense/', name: 'Create', component: CreateExpense },
    { path: '/list-expenses/', name: 'List', component: ListExpenses },
    { path: '/multiple-choice/', name: 'Multiple', component: MultipleChoice },
];

const Router = createRouter({
    history: createWebHistory(),
    routes
})

export default Router