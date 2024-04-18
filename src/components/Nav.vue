<template>
  <div class="nav">
    <div class="nav__logo">
      <img src="@/assets/img/logo.png" alt="logo">
    </div>
    <ul class="nav__list">
      <li class="nav__item"><a href="#">Фильмы</a></li>
      <li class="nav__item"><a href="#">Треды</a></li>
      <li class="nav__item"><a href="#">Новости</a></li>
    </ul>
    <div class="nav__search">
      <input type="text" placeholder="Поиск...">
      <img src="@/assets/img/profile.svg" alt="profile">
    </div>
  </div>
</template>

<style scoped>
.nav {
  top: 0; 
  background-color: #2C2C54;
  z-index: 1000;
  position: sticky;
  padding: 27px 170px 60px 122px;
  display: flex;
  justify-content: space-between;
}

.nav__logo {
  max-height: 300px;
  max-width: 180px;
}

.nav__list {
  padding-left: 40px;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  gap: 118px;
}

.nav__list  {
  text-decoration: none;
  transition: color 0.3s ease, transform 0.3s ease;
}

.nav__list :hover {
  color: #1ff507;
  transform: scale(1.1);
}

.nav__search {
  margin-top: 15px;
  display: flex;
  align-items: center;
}

.nav__search input[type="text"] {
  height: 32px;
  width: 200px;
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-image: url('@/assets/img/search.svg');
  background-size: 20px 20px;
  background-position: 95% center;
  background-repeat: no-repeat;
}

.nav a:visited {
  color: inherit; 
  text-decoration: none;
}

.nav__search img {
  margin-left: 20px;
}
</style>
