<script setup>
import Nav from "./components/Nav.vue";
import Header from "./components/Header.vue";
import Playbill from "./components/Playbill.vue";
import News from "./components/News.vue";
import Forum from "./components/Forum.vue";
import Footer from "./components/Footer.vue";
import Decoration from "./components/Decoration.vue";
</script>

<template>
<div class="wrapper">
    <Decoration/>
    <Nav/>
    <Header/>
    <Playbill/>
    <News/>
    <Forum/>
    <Footer/>
</div>
</template>

<style scoped>
.wrapper {
    
}

</style>
