import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Profile from './Profile.vue'
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    { path: '/', component: App },
    { path: '/profile', component: Profile }
  ];

  const router = createRouter({
    history: createWebHistory(),
    routes
  });

createApp(App).use(router).mount('#app')
