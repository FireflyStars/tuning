import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Contacts from "@/pages/Contacts";
import News from "@/pages/News";
import Project from "@/pages/Project";
import About from "@/pages/About";
import Partners from "@/pages/Partners";
import Service from "@/pages/Service";
import NewsItem from "@/pages/NewsItem";
import ProjectItem from "@/pages/ProjectItem";
import ServiceItem from "@/pages/ServiceItem";
import ServiceItem2 from "@/pages/ServiceItem2";
import Tuning from "@/pages/Tuning";
// import OtherTuning from "@/pages/OtherTuning";

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/contacts',
            name: 'Contacts',
            component: Contacts
        },
        {
            path: '/news',
            name: 'News',
            component: News
        },
        {
            path: '/news/:id',
            props: true,
            name: 'NewsItem',
            component: NewsItem
        },
        {
            path: '/project',
            name: 'Project',
            component: Project
        },
        {
            path: '/project/:id',
            props: true,
            name: 'ProjectItem',
            component: ProjectItem
        },
        {
            path: '/service',
            name: 'Service',
            component: Service
        },
        {
            path: '/service/:id',
            props: true,
            name: 'ServiceItem',
            component: ServiceItem
        },
        {
            path: '/uniqueservice/:id',
            props: true,
            name: 'ServiceItem2',
            component: ServiceItem2
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/partners',
            name: 'Partners',
            component: Partners
        },
        {
            path: '/tuning/:engineid',
            props: true,
            name: 'Tuning',
            component: Tuning
        }
    ],
    mode: 'history'
})