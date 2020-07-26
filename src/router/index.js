import Vue from 'vue'
import VueRouter from 'vue-router'
import trafficLight from '../views/TrafficLight.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/:activeColor',
        name: 'traffic-light',
        component: trafficLight,
        props: true,
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    if ((to.params.activeColor === 'home')||(to.params.activeColor === undefined)) {
        if (localStorage.activeColor) {
            router.push(localStorage.activeColor);
        } else {
            router.push('red');
        }
    } else {
        next();
    }
});

export default router
