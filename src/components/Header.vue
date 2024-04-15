<script setup>

</script>

<template>
    <div>
  <div class="header__title">
    <br>Фильмы, сериалы,<br> мультфильмы в одном месте!
  </div>
  <div class="header__text">
    <br>Всегда хотели узнать где можно дешевле посмотреть 
    <br>то или иное произведение исскуства?
     Просто обсудить<br> какой-то либо кинофраншизу? А может просто<br> посмотреть последние новости в сфере кино?
     <br>Тогда, данный сайт был сделан для вас!
  </div>
    <button class="header__btn">Посмотреть каталог фильмов</button>
</div>
</template>

<style scoped>
  .header__title {
    margin-left: 123px;
    font-weight: bold;
    font-size: 50px;
    line-height: 70px;
}

    .header__text {
    margin-top: 51px;
    margin-left: 123px;
    line-height: 20px;
}

    .header__btn {
        margin-top: 45px;
        margin-left: 123px;
        color: #2C2C54;
        background-color: #686DE0;
        width: 400px;
        height: 50px;
        font-weight: bold;
        font-size: 20px;
        align-items: center;
        border: none;
         border-radius: 5px;
        cursor: pointer;
        transition: transform 0.3s ease;
}

.header__btn:hover {
    transform: scale(1.05);
}
</style>