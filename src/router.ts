import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/search'
        },
        {
            path: '/search',
            component: () => import('@/pages/Search.vue')
        },
        {
            path: '/search/details/:id',
            component: () => import('@/pages/SearchDetails.vue'),
            props: true
        },
        {
            path: '/food/details/:id',
            component: () => import('@/pages/FoodDetails.vue'),
            props: true
        },
        {
            path: '/daily',
            component: ()=> import('@/pages/DailyTable.vue')
        }
    ]
})