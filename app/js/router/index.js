import Vue from "vue"
import Router from "vue-router"
import Home from "../home/index.vue"
import Money from '../money/index.vue'
import Save from '../save/index.vue'
import Ious from '../ious/index.vue'

import '../../css/reset.scss';

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/money',
            name: 'money',
            component: Money
        },
        {
            path: '/save',
            name: 'save',
            component: Save
        },
        {
            path: '/ious',
            name: 'ious',
            component: Ious
        }
    ],
})
