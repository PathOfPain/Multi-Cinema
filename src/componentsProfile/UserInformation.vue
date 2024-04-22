<template>
  <div class="UserInformation">
    <div class="UserInformation__title">
      <h1>Информация об пользователе</h1>
    </div>
    <div class="UserInformation__avatar">
      <div class="UserInformation__avatar-image">
        <img src="@/assets/img/Profile/avatar.svg" alt="avatar">
      </div>
      <div class="UserInformation__avatar-info">
        <h1 class="UserInformation__avatar-info-title">Cool Man</h1>
        <h2><img src="@/assets/img/Profile/location.svg" alt="location" class="UserInformation__avatar-info-text-1"> Russia, Lobnya</h2>
        <h2 class="UserInformation__avatar-info-text-2">Типо описание, очень длинное, очень прикольное и вообще Lorem IpsumТипо описание, очень длинное, очень прикольное и вообще Lorem Ipsum</h2>
      </div>
    </div>
    <div class="UserInformation__linked">
      <h1>Связанные аккаунты</h1>
      <ul class="UserInformation__list">
        <li class="UserInformation__item">
          <img src="@/assets/img/Profile/avatar.svg" alt="avatar" class="UserInformation__item-image">
          <div class="UserInformation__profile-info">
            <h2>Cool Man</h2>
            <a href="#">Профиль на FaceBook</a>
            <p>100K</p>
          </div>
        </li>
        <li class="UserInformation__item">
          <img src="@/assets/img/Profile/user-btn.svg" alt="btn" class="UserInformation__item-btn">
          <img src="@/assets/img/Profile/avatar.svg" alt="avatar" class="UserInformation__item-image">
          <div class="UserInformation__profile-info">
            <h2>Cool Man</h2>
            <a href="#">Профиль на FaceBook</a>
            <p>100K</p>
          </div>
        </li>
        <li class="UserInformation__item">
          <img src="@/assets/img/Profile/avatar.svg" alt="avatar" class="UserInformation__item-image">
          <div class="UserInformation__profile-info">
            <h2>Cool Man</h2>
            <a href="#">Профиль на FaceBook</a>
            <p>100K</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.UserInformation__title {
  font-weight: 300;
  font-size: 38px;
  position: relative;
}

.UserInformation__title h1::after {
  content: ''; 
  display: block; 
  position: absolute;
  left: 0;
  right: 0;
  bottom: -5px;
  border-bottom: 2px solid #686DE0;
}

.UserInformation__avatar {
  display: flex;
  gap: 30px;
  padding-top: 29px;
}

.UserInformation__avatar-image {
  height: 170px;
  width: 210px;
}

.UserInformation__avatar-info-title {
  font-weight: 600;
  font-size: 36px;
  padding-top: 15px;
}

.UserInformation__avatar-info-text-1 {
  font-weight: 300;
  padding-top: 3px;
}

.UserInformation__avatar-info-text-2 {
  font-weight: 300;
  padding-top: 5px;
}

.UserInformation__linked h1 {
  font-weight: 600;
  font-size: 46px;
  margin-bottom: 14px;
}

.UserInformation__list {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.UserInformation__profile-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 15px;
}

.UserInformation__profile-info h2 {
  font-weight: 600;
  font-size: 26px;
  margin-bottom: 5px;
  padding-left: 20px;
}

.UserInformation__profile-info p {
  margin-top: 10px;
  padding-left: 60px;
}

.UserInformation__item-btn {
  margin-right: 20px;
}



.UserInformation__list a {
  text-decoration: underline;
  color: #D9D9D9; 
}

.UserInformation__item {
  display: flex;
}

.UserInformation__item-image {
  height: 100px;
  width: 100px;
}
</style>
