<script setup>

</script>

<template>
  <div>
    <div class="playbill__text">
      Самый популярный фильм на неделе
    </div>
    <div class="playbill__cinema">
      <img src="@/assets/img/playbill-cinema.svg" alt="cinema">
    </div>
    <button class="playbill__btn">Посмотреть</button>
    <div class="playbill__text-2">
      Вы хотели посмотреть
    </div>
    <ul class="playbill__list">
      <li class="playbill__item">
        <img src="@/assets/img/cinema-2.png" alt="cinema-2">
        <button class="playbill__btn-2">Посмотреть</button>
      </li>
      <li class="playbill__item">
        <img src="@/assets/img/cinema-2.png" alt="cinema-2">
        <button class="playbill__btn-2">Посмотреть</button>
      </li>
      <li class="playbill__item">
        <img src="@/assets/img/cinema-2.png" alt="cinema-2">
        <button class="playbill__btn-2">Посмотреть</button>
      </li>
    </ul>
    <div class="playbill__link"><u>Полный список</u></div>
  </div>
</template>

<style scoped>
  .playbill__text {
  margin: 210px 0 0 123px;
  font-weight: bold;
  font-size: 30px;
}


.playbill__text-2 {
  margin: 210px 0 0 843px;
  font-weight: bold;
  font-size: 30px;
}


.playbill__cinema{
  max-width: 676px;
  max-height: 360px;
  margin: 46px 0 0 344px;
  border: 1px solid #1d1c1c; 
  box-shadow: 0 0 20px rgba(244, 239, 239, 0.2);
  padding: 20px; 
  border-radius: 10px;
}

.playbill__btn {
        margin-top: 20px;
        margin-left: 370px;
        color: #2C2C54;
        background-color: #686DE0;
        width: 620px;
        height: 50px;
        font-weight: bold;
        font-size: 20px;
        align-items: center;
        border: none;
         border-radius: 5px;
        cursor: pointer;
        transition: transform 0.3s ease;
}

.playbill__btn:hover {
    transform: scale(1.05);
}

.playbill__list {
  margin-left: 200px;
  margin-top: 42px;
  display: flex;
  gap: 55px
}
.playbill__item {
  border: 1px solid #1d1c1c; 
  box-shadow: 0 0 20px rgba(244, 239, 239, 0.2);
  padding: 20px; 
  border-radius: 10px;
  width: 280px;
  height: 430px;
}
.playbill__btn-2 {
        display: flex;
        margin-top: 20px;
        color: #2C2C54;
        background-color: #686DE0;
        width: 250px;
        height: 35px;
        font-weight: bold;
        font-size: 20px;
        text-align: center;
        align-items: center;
        justify-content: center;
        border: none;
         border-radius: 5px;
        cursor: pointer;
        transition: transform 0.3s ease;
}


.playbill__btn-2:hover {
  transform: scale(1.05);
}

.playbill__link {
  margin-top: 20px;
  margin-left: 1150px;
}

</style>