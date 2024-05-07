<script setup>
import SideBar from "./componentsProfile/SideBar.vue";
import DisneyCharacter from "./componentsProfile/DisneyCharacter.vue";
import NavProfile from "./componentsProfile/NavProfile.vue";
import UserInformation from "./componentsProfile/UserInformation.vue";
import FavoritesFilms from "./componentsProfile/FavoritesFilms.vue";
import WatchLater from "./componentsProfile/WatchLater.vue";
import UserScores from "./componentsProfile/UserScores.vue";
import Footer from "./components/Footer.vue";
import FooterProfile from "./componentsProfile/FooterProfile.vue";
</script>

<template>
<div>
  <NavProfile/>
    <div class="wrapper">
      <DisneyCharacter/>
        <UserInformation/>
        <FavoritesFilms/>
        <WatchLater/>
        <UserScores/>
    </div>
    <div class="wrapper-footer">
        <Footer/>
        <FooterProfile/>
      </div>
</div>
</template>



<style scoped>
  .wrapper {
    width: 1400px;
    height: auto;
    padding: 0 144px;
}

.wrapper-footer {
  margin-left: 30px;
}


</style>