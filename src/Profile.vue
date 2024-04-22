<script setup>
import NavProfile from "./componentsProfile/NavProfile.vue";
import UserInformation from "./componentsProfile/UserInformation.vue";
import FavoritesFilms from "./componentsProfile/FavoritesFilms.vue";
import Footer from "./components/Footer.vue";
import FooterProfile from "./componentsProfile/FooterProfile.vue";
</script>

<template>
 <div>
  <NavProfile/>
  <div class="wrapper">
    <UserInformation/>
    <FavoritesFilms/>
  </div>
  <!-- <Footer/> -->
    <!-- <FooterProfile/> -->
  </div>
</template>



<style scoped>
  .wrapper {
    width: 1100px;
    height: auto;
    padding-left: 44px;
}

</style>