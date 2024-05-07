<script setup>
import Nav from "./components/Nav.vue";
import Decoration from "./components/Decoration.vue";
import Header from "./components/Header.vue";
import Playbill from "./components/Playbill.vue";
import News from "./components/News.vue";
import Forum from "./components/Forum.vue";
import Footer from "./components/Footer.vue";
import Profile from "./Profile.vue";

let isMainActive = true;
</script>

<template>
<div>
    <div id="main" v-if="isMainActive">
      <Decoration/>>
      <Nav/>
      <Header/>
      <Playbill/>
      <News/>
      <Forum/>
      <Footer/>
    </div>
    <div id="profile"  v-else>
      <Profile/>
    </div>
  </div>
  </template>
  
  <style scoped>
  
  </style>
  