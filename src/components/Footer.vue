<script setup>

</script>

<template>
  <div>
    <div class="footer">
        Подпишитесь на нашу рассылку прямо сейчас, всего за<br> <u>9.99$/мес</u>, и будьте в курсе всех новостей, скидок на подписки<br> и понижении цен на фильмы.
        <div class="footer__input">
            <input type="text" placeholder="Ваш email">
        </div>
        <button class="footer__button">Подписаться</button>
        <div class="footer__copyright">Нажимая на кнопку “Подписаться”, вы принимаете правила <span>пользовательского соглашения</span></div>
    </div>

  </div>
</template>

<style scoped>
  .footer {
    margin-left: 120px;
    margin-top: 50px;

}

.footer__input {
    padding-left: 40px;
    padding-top: 15px;
    text-align: left;
    background-color: #fff;
    width: 880px;
    height: 50px;
    border-radius: 15px;
    margin-top: 20px;
}


.footer__button {
    background: #686DE0;
    width: 150px;
    height: 50px;
    border-radius: 15px;
    margin-bottom: 50px;
    margin-top: 20px;
}

.footer__copyright {
    padding-bottom: 80px;
}


span {
    color: #686DE0;
}
</style>