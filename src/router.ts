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
            component: () => import('@/pages/search.vue')
        },
        {
            path: '/details/:id',
            component: () => import('@/pages/details.vue'),
            props: true
        },
        {
            path: '/daily',
            component: ()=> import('@/pages/DailyTable.vue')
        }
    ]
})