import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Contacts from "@/pages/Contacts";
import News from "@/pages/News";
import Project from "@/pages/Project";
import About from "@/pages/About";
import Partners from "@/pages/Partners";
import Services from "@/pages/Services";
import NewsItem from "@/pages/NewsItem";
import ProjectItem from "@/pages/ProjectItem";
import Tuning from "@/pages/Tuning";

Vue.use(Router)

export default new Router({
  routes: [
    {
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
      path: '/services',
      name: 'Services',
      component: Services
    },
    {
      path: '/tuning',
      name: 'Tuning',
      component: Tuning
    }
  ],
  mode: 'history'
})
